import { Model } from 'mongoose';
import { Injectable, Inject, Logger, HttpException, BadRequestException } from '@nestjs/common';

import { User } from './intefaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL_PROVIDER } from 'src/core/constants';
import { AuthService } from 'src/core/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User>,
    private readonly authService: AuthService,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<void> {
    if (await this.userModel.findOne({email: createUserDto.email})) {
      throw new BadRequestException('This email already exists');
    }
    const newUser = new this.userModel({
      ...createUserDto,
      password: await this.authService.getHash(createUserDto.password),
    });
    await newUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
