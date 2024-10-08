import { Router } from 'express';
import { authenticate, authorize } from '../middlewares/auth';
import { getDashboard } from '../controllers/adminController';

export const adminRouter = Router();

adminRouter.use(authenticate as any);
adminRouter.use(authorize('admin') as any);
adminRouter.get('/dashboard', getDashboard);