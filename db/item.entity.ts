import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class ItemEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  context: string;

  //tasks/n:1 relation with Task Entity
  @ManyToOne(type => TaskEntity, task => task.items)
  task: TaskEntity;
}