const Joi = require("joi");

const addContactValidatin = (req, res, next) => {
  const shema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
      })
      .required(),
    phone: Joi.number().integer().required(),
  });

  const validationResult = shema.validate(req.body);

  if (validationResult.error) {
    return res.status(400).json({ message: "missing required name field" });
  }

  next();
};

const updateContactValidation = (req, res, next) => {
  const shema = Joi.object({
    name: Joi.string().min(3).max(30),
    email: Joi.string().email({
      minDomainSegments: 2,
    }),
    phone: Joi.number().integer(),
  });

  const validationResult = shema.validate(req.body);

  if (validationResult.error) {
    return res.status(400).json({ message: "missing fields" });
  }

  next();
};

module.exports = {
  addContactValidatin,
  updateContactValidation,
};
