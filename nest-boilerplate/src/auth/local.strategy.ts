import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'email',
    });
  }

  /**
   * Validate a user with email and password
   * @param email User's email
   * @param password User's password
   */
  async validate(email: string, password: string): Promise<any> {
    const user: { name: string } = await this.authService.validateUser(
      email,
      password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
