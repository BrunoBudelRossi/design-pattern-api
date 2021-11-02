import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const authRouter = Router();

authRouter.route('/login').post(AuthController.login);
authRouter.route('/logout').post(AuthController.logout);

export default authRouter;
