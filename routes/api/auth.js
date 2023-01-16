const express = require("express");

const controllers = require("../../controllers/auth");

const { reqisterSchema, loginSchema } = require("../../models/user");

const { validateBody, authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.post("/signup", validateBody(reqisterSchema), controllers.reqister);

router.post("/login", validateBody(loginSchema), controllers.login);

router.get("/current", authenticate, controllers.getCurrent);

router.get("/logout", authenticate, controllers.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllers.updateAvatar
);

module.exports = router;
