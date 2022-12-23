const express = require("express");

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
