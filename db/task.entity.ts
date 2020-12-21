import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
// import BookEntity from './book.entity';
@Entity()
export default class TaskEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
  //Category
  //List of jobs(items)
  //tags

  // 1:n relation with bookEntity 
//   @OneToMany( type => BookEntity , book => book.user)
//   books: BookEntity[];
}