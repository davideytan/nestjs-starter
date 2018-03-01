import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { getRepositoryToken} from '@nestjs/typeorm/typeorm.utils';
import { TodoService } from './todo.service';
import { expect } from 'chai';
import { TodoEntity } from './todo.entity';

describe('TodoService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        {
          provide: getRepositoryToken(TodoEntity),
          useValue: {}
        },
        TodoService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: TodoService;
  beforeEach(() => {
    service = module.get(TodoService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});
