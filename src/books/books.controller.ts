import { Body, Controller, Get, Post } from '@nestjs/common';
import BooksService from './books.service';
import CreateBookDto from '../user/dto/create-book.dto';

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
}
