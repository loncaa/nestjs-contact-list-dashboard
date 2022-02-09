import * as Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().max(20).required(),
  email: Joi.string().max(20).optional().allow(null, ''),
  phone: Joi.string().max(20).required(),
  address: Joi.string().max(20).optional().allow(null, ''),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().max(20).optional(),
  email: Joi.string().max(20).optional().allow(null, ''),
  phone: Joi.string().max(20).optional(),
  address: Joi.string().max(20).optional().allow(null, ''),
});
