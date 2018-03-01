import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'todo' })
export class TodoEntity {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column({ default: '' })
  content?: string;

  @Column({ name: 'is_done', default: false })
  isDone: boolean;

}