import { Router } from 'express';
import { Request, Response } from 'express';
import userRouter from './routes/userRouter';

const router = Router();

// bug na execução da rota
router.use('/users', userRouter);

// Request made to non-existent resource
router.use((req: Request, res: Response) => {
    res.status(404).end();
});

export default router;
