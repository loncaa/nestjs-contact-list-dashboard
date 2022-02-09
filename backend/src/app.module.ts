import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { HTTPLogger } from './logger/httpLogger';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [ContactModule],
  controllers: [AppController],
  providers: [AppService, HTTPLogger],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
