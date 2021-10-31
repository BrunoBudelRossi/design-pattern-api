import { Router } from 'express';
import { Request, Response } from 'express';

import authMiddleware from './middlewares/authMiddleware';

import authRouter from './routes/authRouter';
import userRouter from './routes/userRouter';
import problemRouter from './routes/problemRouter';
import answerRouter from './routes/answerRouter';

const router = Router();

router.use('/users', authMiddleware, userRouter);
router.use('/problems', authMiddleware, problemRouter);
router.use('/answers', authMiddleware, answerRouter);
router.use('/auth', authRouter);

// Request made to non-existent resource
router.use((req: Request, res: Response) => {
    res.status(404).end();
});

export default router;
