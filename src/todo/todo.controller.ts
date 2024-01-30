import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('get')
  async get() {
    return this.todoService.get();
  }

  @Post('create')
  async create() {
    return this.todoService.create();
  }

  @Patch('get')
  async patch() {
    return this.todoService.updateById();
  }

  @Delete('get')
  async delete() {
    return this.todoService.deleteById();
  }
}
