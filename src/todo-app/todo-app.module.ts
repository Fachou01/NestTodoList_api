import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/entities/Todo.entity';
import { config } from 'src/orm.config';
import { TodoAppController } from './todo-app.controller';
import { TodoAppService } from './todo-app.service';

@Module({
  imports: [TypeOrmModule.forRoot(config),TypeOrmModule.forFeature([Todo])],
  exports : [],
  controllers: [TodoAppController],
  providers: [TodoAppService],
})
export class TodoAppModule {}
