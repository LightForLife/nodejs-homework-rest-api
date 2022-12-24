const express = require("express");

const controllers = require("../../controllers/contacts");

const {
  schemaAdd,
  schemaUpdate,
  schemaUpdateFavorite,
} = require("../../models/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/", controllers.getAll);

router.get("/:contactId", isValidId, controllers.getById);

router.post("/", validateBody(schemaAdd), controllers.add);

router.delete("/:contactId", controllers.deleteById);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemaUpdate),
  controllers.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemaUpdateFavorite),
  controllers.updateStatusContact
);

module.exports = router;
