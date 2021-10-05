import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRouter = Router();

userRouter.route('/').get(UserController.index).post(UserController.store);
userRouter
    .route('/:userId')
    .put(UserController.update)
    .delete(UserController.delete);

export default userRouter;
