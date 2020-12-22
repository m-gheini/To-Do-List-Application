import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne } from 'typeorm';
// import CategoryEntity from './category.entity';
// import BookEntity from './book.entity';
@Entity()
export default class TagEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  //Category/n:1 relation with Category Entity
//   @ManyToOne(type => CategoryEntity, category => category.tasks)
//   category: CategoryEntity;


  //List of jobs(items)
  //tags

  // 1:n relation with bookEntity 
//   @OneToMany( type => BookEntity , book => book.user)
//   books: BookEntity[];
}