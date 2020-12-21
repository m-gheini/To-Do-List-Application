import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class CategoryEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  // 1:n relation with Task Entity
  @OneToMany( type => TaskEntity , Task => Task.category)
  tasks : TaskEntity[];
}