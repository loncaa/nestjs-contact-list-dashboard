import * as Joi from 'joi';

export const contactNumberSchema = Joi.object({
  type: Joi.string().required(),
  number: Joi.string().required()
})

export const createContactSchema = Joi.object({
  name: Joi.string().max(20).required(),
  email: Joi.string().max(20).optional().allow(null, ''),
  profilePicture: Joi.string().uri().required(),
  isFavorite: Joi.boolean(),
  numbers: Joi.array().items(contactNumberSchema).allow(null),
  address: Joi.string().max(20).optional().allow(null, ''),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().max(20).optional(),
  email: Joi.string().max(20).optional().allow(null, ''),
  numbers: Joi.array().items(contactNumberSchema).allow(null),
  address: Joi.string().max(20).optional().allow(null, ''),
});
