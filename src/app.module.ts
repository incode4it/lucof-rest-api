import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [CoreModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
