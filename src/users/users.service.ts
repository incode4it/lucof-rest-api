import { Model } from 'mongoose';
import { Injectable, Inject, BadRequestException } from '@nestjs/common';

import { User } from './intefaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL_PROVIDER } from 'src/core/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User>,
  ) { }

  public async create(createUserDto: CreateUserDto): Promise<boolean> {
    if (await this.userModel.findOne({email: createUserDto.email})) {
      throw new BadRequestException('This email already exists');
    }
    const newUser = new this.userModel(createUserDto);
    await newUser.save();
    return true;
  }

  public async findByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({email});
  }

  public async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
