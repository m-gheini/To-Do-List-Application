import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import CategoryEntity from './category.entity';
import ItemEntity from './item.entity';
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


  //items/1:n relation with Item Entity
  @OneToMany( type => ItemEntity , Item => Item.task)
  items : ItemEntity[];

  //tags/n:n relation with Tag Entity
  @ManyToMany(type => TagEntity)
  @JoinTable()
  tags: TagEntity[];
}