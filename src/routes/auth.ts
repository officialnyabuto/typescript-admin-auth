import { Router } from 'express';
import { register, login, resetPassword } from '../controllers/authController';

export const authRouter = Router();

authRouter.post('/register', register as any);
authRouter.post('/login', login as any);
authRouter.post('/reset-password', resetPassword as any);