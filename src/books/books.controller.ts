import { Body, Controller, Get, Post, Delete, Param, Put, Query } from '@nestjs/common';
import BooksService from './books.service';
import CreateBookDto from '../user/dto/create-book.dto';
import { query } from 'express';
import { MssqlParameter } from 'typeorm';

@Controller('books')
export default class GenreController {
  constructor(private readonly booksService: BooksService) {}
  @Post('post')
  postGenre( @Body() book: CreateBookDto) {
    return this.booksService.insert(book);
  }
  @Get()
  getAll() {
    return this.booksService.getAllBooks();
  }
  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId) {
    return this.booksService.deleteBook(bookId);
  }
//   @Put()
//   put(@Query() id, query){
//       return this.booksService.update(id, query);
//   }

}
