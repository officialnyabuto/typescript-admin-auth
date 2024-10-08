"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post('/register', authController_1.register);
exports.authRouter.post('/login', authController_1.login);
exports.authRouter.post('/reset-password', authController_1.resetPassword);
