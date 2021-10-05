import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const userRouter = Router();

userRouter.route('/login').post(AuthController.login);
userRouter.route('/logout').post(AuthController.logout);

export default userRouter;
