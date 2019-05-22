import { Injectable, Inject } from '@nestjs/common';
import { TASKS_MODEL_PROVIDER } from 'src/core/constants';
import { Model } from 'mongoose';
import { ITask } from './interfaces/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {

  constructor(
    @Inject(TASKS_MODEL_PROVIDER) private readonly taskModel: Model<ITask>,
  ) {}

  public async getAll(): Promise<ITask[]> {
    return await this.taskModel.find().exec();
  }

  public async createTask(taskDTO: CreateTaskDto): Promise<ITask> {
    const task = new this.taskModel(taskDTO);
    task.createdAt = new Date();
    return task.save();
  }

  public async get(id: string): Promise<ITask> {
    return await this.taskModel.findById(id);
  }

}
