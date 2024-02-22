import { Injectable } from '@nestjs/common';
import { TodoModel } from './todo.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(TodoModel) private readonly todoModel: ModelType<TodoModel>,
  ) {}

  async get() {
    return this.todoModel.find();
  }

  async findById(id: string) {
    return this.todoModel.findById(id).exec();
  }

  async create(dto: CreateTodoDto) {
    return this.todoModel.create(dto);
  }

  async updateById(id: string, dto: CreateTodoDto) {
    return this.todoModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async deleteById(id: string) {
    return this.todoModel.findByIdAndDelete(id).exec();
  }
}
