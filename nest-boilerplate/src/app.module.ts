import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import appEnvConfig from './app.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from './logger/logger.module';
import { LoggerService } from './logger/logger.service';
import { RequestLoggerModule } from './request-logger/request-logger.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [appEnvConfig], isGlobal: true }),
    MongooseModule.forRoot('mongodb://localhost:27017/db'),
    LoggerModule,
    RequestLoggerModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
