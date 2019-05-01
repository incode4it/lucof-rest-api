import { Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Response } from 'express';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('sign-up')
  public async signUp(
    @Res() res: Response,
    @Body() createUserDto: CreateUserDto,
  ): Promise<Response> {
    await this.authService.signUp(createUserDto);
    return res.status(HttpStatus.OK).json({
      message: 'User registered succesfully',
    });
  }

  @Post('login')
  public async login(
    @Body() loginUserDto: LoginUserDto,
  ) {
    return await this.authService.login(loginUserDto);
  }
}
