import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { AllExceptionsFilter } from './filter/allExceptions.filter';

import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.use(helmet());

  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(4000);
}
bootstrap();
