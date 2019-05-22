import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { tasksProvider } from './tasks.provider';
import { CoreModule } from 'src/core/core.module';

@Module({
  imports: [CoreModule],
  controllers: [TasksController],
  providers: [
    TasksService,
    ...tasksProvider,
  ]
})
export class TasksModule {}
