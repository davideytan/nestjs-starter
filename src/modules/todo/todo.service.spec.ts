import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { TodoService } from './todo.service';
import { expect } from 'chai';

describe('TodoService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
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
