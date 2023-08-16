import * as Joi from "joi";


export const VALIDATOR = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'staging')
    .default('development'),
  PORT: Joi.number(),
  DB_HOST: Joi.string(),
  DB_PORT: Joi.number(),
  DB_USERNAME: Joi.string().allow(''),
  DB_PASSWORD: Joi.string(),
  DB_SCHEMA: Joi.string(),
})
