import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import GenreServices from './genre.service';
import CreateGenreDto from '../user/dto/create-genre.dto';
import {ApiBearerAuth} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport'; 

@Controller('genre')
export default class GenreController {
  constructor(private readonly genreServices: GenreServices) {}
  @Post('post')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  postGenre( @Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }
  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  getAll() {
    return this.genreServices.getAllGenre();
  }
}