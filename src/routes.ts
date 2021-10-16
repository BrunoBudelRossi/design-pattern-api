import { Router } from 'express';
import { Request, Response } from 'express';

import authMiddleware from './middlewares/authMiddleware';

import authRouter from './routes/authRouter';
import userRouter from './routes/userRouter';

const router = Router();

// problema no build (rodar yarn start para ver), acontece pq estou usando module.exports e export default

// colocar middleware dps de cadastrar primeiro usuario para token
router.use('/users', userRouter);
router.use('/auth', authRouter);

// Request made to non-existent resource
router.use((req: Request, res: Response) => {
    res.status(404).end();
});

export default router;
