import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/users/users.module';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  imports: [
    UserModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
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
