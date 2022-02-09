import { Injectable, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class HTTPLogger {
  private logger = new Logger('HTTP');

  generateLogMessage(req: Request, res: Response) {
    const { ip, method, originalUrl: url } = req;
    const { statusCode } = res;
    const contentLength = res.get('content-length');
    const userAgent = req.get('user-agent') || '';

    return `${method} ${url} ${statusCode} ${
      contentLength ? contentLength : ''
    } - ${userAgent} ${ip}`;
  }

  generateErrorMessage(req: Request, exception) {
    const { method, originalUrl: url } = req;
    const { statusCode, message, error } = exception;
    return `${method} ${url} ${statusCode} ${error} - ${message}`;
  }

  error(req: Request, exception) {
    const message = this.generateErrorMessage(req, exception);
    this.logger.error(message);
  }

  log(req: Request, res: Response) {
    const message = this.generateLogMessage(req, res);

    this.logger.log(message);
  }
}
