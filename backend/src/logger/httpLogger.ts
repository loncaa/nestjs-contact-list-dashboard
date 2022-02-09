import { Injectable, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class HTTPLogger {
  private logger = new Logger('HTTP');

  generateLoggerMessage(req: Request, res: Response) {
    const { ip, method, originalUrl: url } = req;
    const { statusCode } = res;
    const contentLength = res.get('content-length');
    const userAgent = req.get('user-agent') || '';

    return `${method} ${url} ${statusCode} ${
      contentLength ? contentLength : ''
    } - ${userAgent} ${ip}`;
  }

  error(request, exception) {
    const { method, originalUrl: url } = request;
    const { statusCode, message, error } = exception;
    const errorMessage = `${method} ${url} ${statusCode} ${error} - ${message}`;

    this.logger.error(errorMessage);
  }

  log(req: Request, res: Response) {
    const message = this.generateLoggerMessage(req, res);

    this.logger.log(message);
  }
}
