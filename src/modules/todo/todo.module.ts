import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './todo.entity';
import { TodoService } from './todo.service';

@Module({
  imports: [ TypeOrmModule.forFeature([ TodoEntity ]) ],
  components: [ TodoService ],
  exports: [ TodoService ],
})
export class TodoModule {}
