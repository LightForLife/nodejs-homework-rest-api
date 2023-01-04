const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },

  { versionKey: false, timestamps: true }
);

const handleErrors = (error, data, next) => {
  const { name, code } = error;
  console.log(name);
  console.log(code);
};

contactSchema.get("save", handleErrors);

const Contact = model("contacts", contactSchema);

const schemaAdd = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
  phone: Joi.number().integer().required(),
  favorite: Joi.bool(),
});

const schemaUpdate = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email({
    minDomainSegments: 2,
  }),
  phone: Joi.number().integer(),
  favorite: Joi.bool(),
}).min(1);

const schemaUpdateFavorite = Joi.object({
  favorite: Joi.bool().required(),
});

module.exports = {
  Contact,
  schemaAdd,
  schemaUpdate,
  schemaUpdateFavorite,
};
