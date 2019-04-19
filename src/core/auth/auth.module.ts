import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      secretOrPrivateKey: 'devPlainString',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
