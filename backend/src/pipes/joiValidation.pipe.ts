import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) { }

  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'body') {
      const response = this.schema.validate(value);
      if (response.error) {
        throw new BadRequestException('Validation failed');
      }
      return value;
    }

    return value;
  }
}
