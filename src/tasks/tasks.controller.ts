import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './interfaces/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('api/tasks')
export class TasksController {

  constructor(private tasksService: TasksService) {}

  @Get()
  public async getAll(): Promise<ITask[]> {
    return await this.tasksService.getAll();
  }

  @Get(':id')
  public async get(
    @Param() prams: any,
  ): Promise<ITask> {
    return await this.tasksService.get(prams.id);
  }

  @Post()
  public async createTask(
    @Body() createTaskDto: CreateTaskDto,
  ): Promise<ITask> {
    return await this.tasksService.createTask(createTaskDto);
  }

}
