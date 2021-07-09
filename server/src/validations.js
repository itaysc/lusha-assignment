import Joi from "joi";

export const createUserValidation = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    description: Joi.string().required(),
}).unknown(true);


