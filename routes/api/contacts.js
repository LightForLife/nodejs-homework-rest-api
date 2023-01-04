const express = require("express");

const controllers = require("../../controllers/contacts");

const {
  schemaAdd,
  schemaUpdate,
  schemaUpdateFavorite,
} = require("../../models/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const router = express.Router();

router.get("/", authenticate, controllers.getAll);

router.get("/:contactId", authenticate, isValidId, controllers.getById);

router.post("/", authenticate, validateBody(schemaAdd), controllers.add);

router.delete("/:contactId", authenticate, isValidId, controllers.deleteById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemaUpdate),
  controllers.updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemaUpdateFavorite),
  controllers.updateStatusContact
);

module.exports = router;
