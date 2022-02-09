import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { HTTPLogger } from 'src/logger/httpLogger';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: HTTPLogger) {}

  use(request: Request, response: Response, next: NextFunction): void {
    response.on('close', () => {
      this.logger.log(request, response);
    });

    next();
  }
}
