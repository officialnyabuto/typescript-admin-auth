import express from 'express';
import { createConnection } from 'typeorm';
import { authRouter } from './routes/auth';
import { adminRouter } from './routes/admin';
import { errorHandler } from './middlewares/errorHandler';
import { config } from './config';

const app = express();

app.use(express.json());
app.use('/auth', authRouter);
app.use('/admin', adminRouter);
app.use(errorHandler);

createConnection(config.database).then(() => {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
});