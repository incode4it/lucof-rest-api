import { Injectable, Inject, Logger } from '@nestjs/common';
import { TASKS_MODEL_PROVIDER, USER_MODEL_PROVIDER } from 'src/core/constants';
import { Model } from 'mongoose';
import { ITask } from './interfaces/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';
import { User } from 'src/users/intefaces/user.interface';

@Injectable()
export class TasksService {

  constructor(
    @Inject(TASKS_MODEL_PROVIDER) private readonly taskModel: Model<ITask>,
    @Inject(USER_MODEL_PROVIDER)  private readonly userModel: Model<User>,
  ) {}

  public async getAll(): Promise<ITask[]> {
    return await this.taskModel.find().exec();
  }

  public async createTask(taskDTO: CreateTaskDto, userId: string): Promise<ITask> {
    const task = new this.taskModel(taskDTO);
    task.createdAt = new Date();
    const user = await this.userModel.findById(userId);
    task.createdBy = {
      id: userId,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    return task.save();
  }

  public async get(id: string): Promise<ITask> {
    return await this.taskModel.findById(id);
  }

  public async delete(id): Promise<any> {
    return await this.taskModel.findByIdAndDelete(id);
  }

  public async getMyTasks(userId: string): Promise<ITask[]> {
    return await this.taskModel.find({ 'createdBy.id' : userId}).exec();
  }
}
