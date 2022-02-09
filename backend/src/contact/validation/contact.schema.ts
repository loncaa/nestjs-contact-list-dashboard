import * as Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().max(20).required(),
  email: Joi.string().max(20).optional(),
  phone: Joi.string().max(20).required(),
  address: Joi.string().max(20).optional(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().max(20).optional(),
  email: Joi.string().max(20).optional(),
  phone: Joi.string().max(20).optional(),
  address: Joi.string().max(20).optional(),
});
