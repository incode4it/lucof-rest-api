import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { usersProvider } from './users.providers';
import { UsersService } from './users.service';

@Module({
  imports: [
    CoreModule,
  ],
  providers: [
    ...usersProvider,
    UsersService,
  ],
})
export class UserModule {}
