import { Controller, Get, Post, Body, Param, UseGuards, Req, Logger, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './interfaces/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/tasks')
export class TasksController {

  constructor(private tasksService: TasksService) {}

  @Get()
  public async getAll(): Promise<ITask[]> {
    return await this.tasksService.getAll();
  }

  @Get('my_tasks')
  @UseGuards(AuthGuard())
  public async getMyTasks(
    @Req() request: any,
  ): Promise<ITask[]> {
    // return new Promise(() => ({} as any));
    return await this.tasksService.getMyTasks(request.user.id);
  }

  @Get(':id')
  public async get(
    @Param() prams: any,
  ): Promise<ITask> {
    return await this.tasksService.get(prams.id);
  }

  @Delete(':id')
  public async delete(
    @Param() params: any,
  ): Promise<any> {
    await this.tasksService.delete(params.id);
    return {
      status: true,
    };
  }

  @Post()
  @UseGuards(AuthGuard())
  public async createTask(
    @Req() request: any,
    @Body() createTaskDto: CreateTaskDto,
  ): Promise<ITask> {
    return await this.tasksService.createTask(createTaskDto, request.user.id);
  }
}
