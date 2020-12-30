import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(email: string, password: string) {
    // TODO query the user in the database and compare passwords then return the user
    return { name: 'placeholder' };
  }

  async generateJwt(user: { name: string }) {
    const payload = {
      name: user.name,
    };

    const jwt: string = this.jwtService.sign(payload);

    return jwt;
  }
}
