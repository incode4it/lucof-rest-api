import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { JwtPayload } from './interfaces/jwt-payload';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersServices: UsersService,
  ) {}

  private saltRounds = 10;

  private async getHash(password: string | undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  private compareHash(
    password: string | undefined,
    passwordHash: string | undefined,
    ): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }

  public async login(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.usersServices.findByEmail(loginUserDto.email);
    if (user && await this.compareHash(loginUserDto.password, user.password)) {
      const userJwtPayload: JwtPayload = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      };
      return {
        ...userJwtPayload,
        token: this.jwtService.sign(userJwtPayload),
      };
    }
    throw new BadRequestException('wrong credentials');
  }

  public async signUp(createUserDto: CreateUserDto): Promise<boolean> {
    return await this.usersServices.create({
      ...createUserDto,
      password: await this.getHash(createUserDto.password),
    });
  }

}
