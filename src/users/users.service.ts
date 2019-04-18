import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { User } from './intefaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL_PROVIDER } from 'src/core/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return new Promise((r) => r({} as User));
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
