import { Body, Controller, Get, Post, Delete, Param, Put, Request } from '@nestjs/common';
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
  @Delete('delete/:bookId')
  deleteBook(@Param('bookId') bookId: Number) {
    return this.booksService.deleteBook(bookId);
  }
  @Put('update/:bookId')
  updateBook(@Param('bookId') bookId: Number, @Body() book: CreateBookDto){
    // , @Body() book: CreateBookDto
      return this.booksService.update(bookId, book);
  }

}
