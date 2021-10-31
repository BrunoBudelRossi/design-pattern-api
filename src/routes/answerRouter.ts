import { Router } from 'express';
import AnswerController from '../controllers/UserController';

const userRouter = Router();

userRouter.route('/').get(AnswerController.index).post(AnswerController.store);
userRouter
    .route('/:answerId')
    .put(AnswerController.update)
    .delete(AnswerController.delete);

export default userRouter;
