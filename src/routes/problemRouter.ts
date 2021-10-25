import { Router } from 'express';
import ProblemController from '../controllers/ProblemController';

const userRouter = Router();

userRouter
    .route('/')
    .get(ProblemController.index)
    .post(ProblemController.store);
userRouter
    .route('/:problemId')
    .put(ProblemController.update)
    .delete(ProblemController.delete);

export default userRouter;
