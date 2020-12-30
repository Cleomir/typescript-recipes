import { Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { LoggerService } from 'src/logger/logger.service';
import { AuthService } from './auth.service';

@Controller('/api/application')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly logger: LoggerService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(200)
  async login(@Request() request: any) {
    try {
      const jwt: string = await this.authService.generateJwt(request.user);
      return { token: jwt };
    } catch (error) {
      this.logger.error(
        'Error:',
        `${AuthController.name}#login`,
        undefined,
        error,
      );
      throw error;
    }
  }
}
