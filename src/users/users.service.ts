import { Model } from 'mongoose';
import { Injectable, Inject, BadRequestException } from '@nestjs/common';

import { User } from './intefaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL_PROVIDER } from 'src/core/constants';
import { UpdateUserDto } from './dto/update-user.dto';

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

  public async findById(id: string): Promise<User> {
    return await this.userModel
      .findById(id)
      .select('-password')
      .select('-__v')
      .exec();
  }

  public async updateUser(id: string, user: Partial<UpdateUserDto>): Promise<User> {
    await this.userModel.findByIdAndUpdate(id, {$set: user});
    return this.findById(id);
  }
}
