import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRouter = Router({ mergeParams: true });

userRouter.route('/').post(UserController.store);

export default userRouter;
