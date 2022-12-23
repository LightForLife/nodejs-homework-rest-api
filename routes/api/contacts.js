const express = require("express");
const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Artur:5090610@cluster0.6jhcm3f.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connection successful"))
  .catch((error) => console.log(error));

const controllers = require("../../controllers/contacts");

const { schemaAdd, schemaUpdate } = require("../../schemas/contacts");

const { validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/", controllers.getAll);

router.get("/:contactId", controllers.getById);

router.post("/", validateBody(schemaAdd), controllers.add);

router.delete("/:contactId", controllers.deleteById);

router.put("/:contactId", validateBody(schemaUpdate), controllers.updateById);

module.exports = router;
