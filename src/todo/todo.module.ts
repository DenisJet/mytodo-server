import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { TodoModel } from './todo.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: TodoModel,
        schemaOptions: {
          collection: 'Todo',
        },
      },
    ]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
