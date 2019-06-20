import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { tasksProvider } from './tasks.provider';
import { CoreModule } from 'src/core/core.module';
import { PassportModule } from '@nestjs/passport';
import { usersProvider } from 'src/users/users.providers';

@Module({
  imports: [
    CoreModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
  ],
  controllers: [TasksController],
  providers: [
    TasksService,
    ...tasksProvider,
    ...usersProvider,
  ],
})
export class TasksModule {}
