import { Router } from 'express';
import { register, login, resetPassword } from '../controllers/authController';

export const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/reset-password', resetPassword);