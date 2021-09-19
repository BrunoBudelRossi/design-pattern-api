import { Router } from 'express';
import { Request, Response } from 'express';

const router = Router();

router.use('/', () => {
    console.log('ok!');
});

// Request made to non-existent resource
router.use((req: Request, res: Response) => {
    res.status(404).end();
});

export default router;
