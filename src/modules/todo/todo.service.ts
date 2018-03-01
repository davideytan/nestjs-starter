import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateService, PaginatedData, PaginationOptions, ReadService } from '../../common';
import { TodoEntity } from './todo.entity';

@Component()
export class TodoService implements CreateService<TodoEntity>, ReadService<TodoEntity> {

  constructor(
    @InjectRepository(TodoEntity) readonly repository: Repository<TodoEntity>,
  ) {}

  createOne(createPayload: TodoEntity): Promise<TodoEntity> {
    return;
  }

  createMany(createPayloads: TodoEntity[]): Promise<TodoEntity[]> {
    return;
  }

  saveOne(entity: TodoEntity): Promise<TodoEntity> {
    return;
  }

  saveMany(entities: TodoEntity[]): Promise<TodoEntity[]> {
    return;
  }

  getOne(id: number): Promise<TodoEntity> {
    return;
  }

  getMany(pagination?: PaginationOptions): Promise<PaginatedData<TodoEntity>> {
    return;
  }

}
