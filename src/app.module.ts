import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import UserModule from './User/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from '../db/user.entity'; 
import BooksModule from './Books/books.module';
import GenreModule from './Genre/genre.module';
import BookEntity from '../db/book.entity';
import GenreEntity from '../db/genre.entity';

@Module({
  imports: [
            HelloModule,
            UserModule ,
            BooksModule,
            GenreModule,
    TypeOrmModule.forFeature(
      [BookEntity , UserEntity, GenreEntity],
    ),

    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}