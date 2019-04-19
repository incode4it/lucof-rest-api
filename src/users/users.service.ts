import { Model } from 'mongoose';
import { Injectable, Inject, Logger, HttpException, BadRequestException } from '@nestjs/common';

import { User } from './intefaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL_PROVIDER } from 'src/core/constants';
import { AuthService } from 'src/core/auth/auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User>,
    private readonly authService: AuthService,
  ) { }

  public async create(createUserDto: CreateUserDto): Promise<void> {
    if (await this.userModel.findOne({email: createUserDto.email})) {
      throw new BadRequestException('This email already exists');
    }
    const newUser = new this.userModel({
      ...createUserDto,
      password: await this.authService.getHash(createUserDto.password),
    });
    await newUser.save();
  }

  public async login(loginUserDto: LoginUserDto): Promise<string> {
    const user = await this.findByEmail(loginUserDto.email);
    if (user) {
      return await this.authService.signIn(
        user.id,
        user.email,
        loginUserDto.password,
        user.password, // hashed password
      );
    }
    throw new BadRequestException('Wrong credintials');
  }

  public async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({email});
  }

  public async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
