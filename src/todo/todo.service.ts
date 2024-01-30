import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  async get() {
    return 'Todo List';
  }

  async create() {
    return 'Create';
  }

  async updateById() {
    return 'update';
  }

  async deleteById() {
    return 'Delete';
  }
}
