import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from './common';
import { TodoModule } from './modules/todo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'username',
      password: 'password',
      database: 'db',
      entities: [
        `${__dirname}/**/*.entity.{js,ts}`,
      ],
      synchronize: true,
    }),
    TodoModule,
  ],
  controllers: [],
  components: [
    Configuration,
  ],
})
export class ApplicationModule {}
