import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './intefaces/user.interface';
import { AuthGuard } from '@nestjs/passport';
@Controller('users')
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

}

export interface ISucess {
  successMessage: string;
}
