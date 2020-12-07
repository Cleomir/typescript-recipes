import { Module } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { RequestLoggerService } from './request-logger.service';

@Module({
  providers: [RequestLoggerService, LoggerService],
})
export class RequestLoggerModule {}
