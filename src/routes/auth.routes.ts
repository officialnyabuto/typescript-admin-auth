import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { body } from "express-validator";
import { validate } from "../middleware/validate.middleware";

const router = Router();

router.post(
  "/register",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    body("firstName").notEmpty(),
    body("lastName").notEmpty(),
    validate
  ],
  AuthController.register
);

router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password").notEmpty(),
    validate
  ],
  AuthController.login
);

export default router;