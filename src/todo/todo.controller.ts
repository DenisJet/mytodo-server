import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TODO_NOT_FOUND_ERROR } from './todo.constants';
import { TodoModel } from './todo.model';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UsePipes(new ValidationPipe())
  @Get('get')
  async get() {
    return this.todoService.get();
  }

  @Post('create')
  async create(@Body() dto: CreateTodoDto) {
    return this.todoService.create(dto);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TodoModel) {
    const updatedTodo = await this.todoService.updateById(id, dto);
    if (!updatedTodo) {
      throw new NotFoundException(TODO_NOT_FOUND_ERROR);
    }
    return updatedTodo;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedTodo = await this.todoService.deleteById(id);
    if (!deletedTodo) {
      throw new NotFoundException(TODO_NOT_FOUND_ERROR);
    }
  }
}
