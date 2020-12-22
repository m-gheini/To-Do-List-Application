import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import CategoryEntity from './category.entity';
import TagEntity from './tag.entity'

@Entity()
export default class TaskEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  //Category/n:1 relation with Category Entity
  @ManyToOne(type => CategoryEntity, category => category.tasks)
  category: CategoryEntity;


  //List of jobs(items)
  //tags/n:n relation with Tag Entity
  @ManyToMany(type => TagEntity)
  @JoinTable()
  tags: TagEntity[];

  // 1:n relation with bookEntity 
//   @OneToMany( type => BookEntity , book => book.user)
//   books: BookEntity[];
}