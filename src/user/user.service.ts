import { Injectable } from '@nestjs/common';
import UserEntity from '../../db/user.entity';
import CreateUserDto from './dto/create-user.dto';
import BookEntity from '../../db/book.entity';
import {getConnection} from "typeorm";

export type User = any;

@Injectable()
export class UserServices {

  async insert(userDetails: CreateUserDto): Promise<UserEntity> {
    const userEntity: UserEntity = UserEntity.create();
    const username = userDetails.username;
    userEntity.username = username;
    const password = userDetails.password;
    userEntity.password = password;
    await UserEntity.save(userEntity);
    return userEntity;
  }
  async getAllUsers(): Promise<UserEntity[]> {
    return await UserEntity.find();
  }
  async getBooksOfUser(userID: number): Promise<BookEntity[]> {
    console.log(typeof(userID));
    const user: UserEntity = await UserEntity.findOne({where: {id: userID}, relations: ['books']});
    return user.books;
  }
  async getUser(username: string): Promise<UserEntity | undefined>{
    const user = await UserEntity.findOne({where: {username: username}});
    return user;
  }
}