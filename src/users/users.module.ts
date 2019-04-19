import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { usersProvider } from './users.providers';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    CoreModule,
  ],
  providers: [
    ...usersProvider,
    UsersService,
  ],
  controllers: [UsersController],
})
export class UserModule {}
