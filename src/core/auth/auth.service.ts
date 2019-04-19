import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  private saltRounds = 10;

  public async getHash(password: string | undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  private compareHash(
    password: string | undefined,
    passwordHash: string | undefined,
    ): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }

  public async signIn(
    id: string,
    email: string,
    password: string,
    passwordHash: string,
  ): Promise<string> {
    if (await this.compareHash(password, passwordHash)) {
      const user: JwtPayload = {
        email,
        id,
      };
      return this.jwtService.sign(user);
    }
    throw new BadRequestException('Wrong credintials');
  }

}
