import { Router } from 'express';
import { Request, Response } from 'express';

import authMiddleware from './middlewares/authMiddleware';

import authRouter from './routes/authRouter';
import userRouter from './routes/userRouter';

const router = Router();

router.use('/users', authMiddleware, userRouter);
router.use('/auth', authRouter);

// Request made to non-existent resource
router.use((req: Request, res: Response) => {
    res.status(404).end();
});

export default router;
