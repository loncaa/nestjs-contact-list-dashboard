import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { HTTPLogger } from 'src/logger/httpLogger';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  readonly logger = new HTTPLogger();

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse();
    const request = ctx.getRequest();

    this.logger.error(request, exception);

    const { status, message } = exception;
    response.status(exception.status).json({ status, message });
  }
}
