import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from 'src/models/todo.model';
import { Model } from 'mongoose';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}
  async create(createTodoDto: CreateTodoDto) {
    if (createTodoDto.title === '') {
      throw new BadRequestException('Title is required');
    }
    const newTodo = new this.todoModel(createTodoDto);
    const result = await newTodo.save();
    return result;
  }

  async findAll() {
    const result = await this.todoModel.find({});
    return result;
  }

  async findOne(id: string) {
    const result = await this.todoModel.findOne({ _id: id });
    return result;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const updatedTodo = this.todoModel.findByIdAndUpdate(
      { _id: id },
      updateTodoDto,
    );
    const result = await (await updatedTodo).save();
    return result;
  }

  async remove(id: string) {
    const result = await this.todoModel.findByIdAndRemove({ _id: id });
    return result;
  }
}
