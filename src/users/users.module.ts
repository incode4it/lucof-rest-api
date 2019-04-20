import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { usersProvider } from './users.providers';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    CoreModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
  ],
  providers: [
    ...usersProvider,
    UsersService,
  ],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UserModule {}
