import { Body, Controller, Get, Post, Delete, Param, Put,  UseGuards} from '@nestjs/common';
import BooksService from './books.service';
import CreateBookDto from '../user/dto/create-book.dto';
import { query } from 'express';
import { MssqlParameter } from 'typeorm';
import {ApiBearerAuth} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport'; 

@Controller('books')
export default class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Post('post')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  postGenre( @Body() book: CreateBookDto) {
    return this.booksService.insert(book);
  }
  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  getAll() {
    return this.booksService.getAllBooks();
  }
  @Delete('delete/:bookId')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  deleteBook(@Param('bookId') bookId: Number) {
    return this.booksService.deleteBook(bookId);
  }
  @Put('update/:bookId')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  updateBook(@Param('bookId') bookId: Number, @Body() book: CreateBookDto){
    // , @Body() book: CreateBookDto
      return this.booksService.update(bookId, book);
  }

}
