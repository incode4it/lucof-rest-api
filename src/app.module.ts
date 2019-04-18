import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [CoreModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
