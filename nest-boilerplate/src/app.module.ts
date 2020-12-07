import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import appEnvConfig from './app.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import { RequestLoggerModule } from './request-logger/request-logger.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [appEnvConfig], isGlobal: true }),
    LoggerModule,
    RequestLoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
