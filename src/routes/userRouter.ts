import { Router } from 'express';
import UserController from '../controllers/UserController';
import answerRouter from './answerRouter';

const userRouter = Router({ mergeParams: true });

userRouter.use('/:userId/answers', answerRouter);

userRouter.route('/').get(UserController.index);
userRouter
    .route('/:userId')
    .put(UserController.update)
    .delete(UserController.delete);

export default userRouter;
