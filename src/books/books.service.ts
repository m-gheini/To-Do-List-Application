import { Injectable, HttpException } from '@nestjs/common';
import BookEntity from '../../db/book.entity';
import CreateBookDto from '../user/dto/create-book.dto';
import UserEntity from '../../db/user.entity';
import { Any, createQueryBuilder, DeleteResult, getConnection } from 'typeorm';
import GenreEntity from '../../db/genre.entity';

@Injectable()
export default class BooksService {

  async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
    const { name , userID , genreIDs } = bookDetails;
    const book = new BookEntity();
    book.name = name;
    book.user = await UserEntity.findOne(userID) ;
    book.genres=[];
    for ( let i = 0; i < genreIDs.length ; i++)
    {
             const genre = await GenreEntity.findOne(genreIDs[i]);
             book.genres.push(genre);
    }
    await book.save();
    return book;
  }
  async getAllBooks(): Promise<BookEntity[] > {
    // const user: UserEntity = await UserEntity.findOne({where: {id: 2}, relations: ['books']});
    return BookEntity.find();
  }

  async deleteBook(bookID): Promise<String> {
    const book= await BookEntity.findByIds(bookID);
    await BookEntity.remove(book);
    return 'Done!'
  }

  async update(bookID, updatedData: CreateBookDto): Promise<any> {
    // , updatedData: CreateBookDto
    const book = await BookEntity.findByIds(bookID);
    const bookInfo = book.shift();
    // return bookInfo.name;
    // return book.id;
    if("name" in updatedData){
      bookInfo.name = updatedData.name
    }
    if("genreIDs" in updatedData){
      bookInfo.genres=[];
      for ( let i = 0; i < updatedData.genreIDs.length ; i++)
      {
        const genre = await GenreEntity.findOne(updatedData.genreIDs[i]);
        bookInfo.genres.push(genre);
      }
    }
    if("userID" in updatedData){
      bookInfo.user = await UserEntity.findOne(updatedData.userID) ;
    }
    // if(updatedData.)
    await bookInfo.save();
    return bookInfo.name;
  }
}