import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { HTTPLogger } from 'src/logger/httpLogger';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  readonly logger = new HTTPLogger();

  catch(exception: any, host: ArgumentsHost) {
    const exceptionResponse = exception.getResponse();
    const ctx = host.switchToHttp();

    const response = ctx.getResponse();
    const request = ctx.getRequest();

    this.logger.error(request, exceptionResponse);

    response
      .status(exceptionResponse.statusCode)
      .json({ ...exceptionResponse });
  }
}
