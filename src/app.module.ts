import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [CoreModule, UserModule, AuthModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
