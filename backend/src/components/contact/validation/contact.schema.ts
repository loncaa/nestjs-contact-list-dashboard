import * as Joi from 'joi';

interface ExtendedStringSchema extends Joi.StringSchema {
  urlSanitize(): this;
}

interface UrlSanitizeJoi extends Joi.Root {
  string(): ExtendedStringSchema;
}

const CustomJoi: UrlSanitizeJoi = Joi.extend((joi) => {
  return {
    type: 'string',
    base: joi.string(),
    rules: {
      urlSanitize: {
        validate(value) {
          return encodeURI(value.trim());
        },
      },
    },
  };
});

export const contactNumberSchema = Joi.object({
  type: Joi.string().required(),
  number: Joi.string().required()
})

export const createContactSchema = Joi.object({
  name: Joi.string().max(20).required(),
  email: Joi.string().email().max(20).optional().allow(null, ''),
  profilePicture: CustomJoi.string().urlSanitize().uri().required(),
  isFavorite: Joi.boolean(),
  numbers: Joi.array().items(contactNumberSchema).allow(null),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().max(20).optional(),
  email: Joi.string().email().max(20).optional().allow(null, ''),
  numbers: Joi.array().items(contactNumberSchema).allow(null),
  profilePicture: CustomJoi.string().urlSanitize().uri(),
  isFavorite: Joi.boolean(),
});