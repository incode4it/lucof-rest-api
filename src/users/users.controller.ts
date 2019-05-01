import { Controller, Get, Logger, UseGuards, Param, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './intefaces/user.interface';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('api/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get()
  @UseGuards(AuthGuard())
  public async get(): Promise<User[]> {
    Logger.log('fetching users');
    return await this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  public async getUser(
    @Param('id') id: string,
  ) {
    Logger.log('fetching user');
    return await this.usersService.findById(id);
  }

  @Post(':id')
  @UseGuards(AuthGuard())
  public async updateUser(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ) {
    return await this.usersService.updateUser(id, user);
  }

}

export interface ISucess {
  successMessage: string;
}
