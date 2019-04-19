import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {

  private saltRounds = 10;

  public async getHash(password: string | undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  public compareHash(
    password: string | undefined,
    passwordHash: string | undefined,
    ): Promise<boolean> {
    return bcrypt.compare(password, passwordHash);
  }

}
