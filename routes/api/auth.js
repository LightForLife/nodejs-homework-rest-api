const express = require("express");

const controllers = require("../../controllers/auth");

const { reqisterSchema, loginSchema } = require("../../models/user");

const { validateBody } = require("../../middlewares");

const router = express.Router();

router.post("/signup", validateBody(reqisterSchema), controllers.reqister);

// router.post("/login", isValidId, controllers.getById);

// router.post("/logout", validateBody(schemaAdd), controllers.add);

// router.get("/current", isValidId, controllers.deleteById);

module.exports = router;
