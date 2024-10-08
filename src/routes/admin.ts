import { Router } from 'express';
import { authenticate, authorize } from '../middlewares/auth';
import { getDashboard } from '../controllers/adminController';

export const adminRouter = Router();

adminRouter.use(authenticate, authorize('admin'));
adminRouter.get('/dashboard', getDashboard);