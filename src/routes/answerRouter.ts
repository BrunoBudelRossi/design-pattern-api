import { Router } from 'express';
import AnswerController from '../controllers/AnswerController';

const answerRouter = Router();

answerRouter
    .route('/')
    .get(AnswerController.index)
    .post(AnswerController.store);
answerRouter
    .route('/:answerId')
    .put(AnswerController.update)
    .delete(AnswerController.delete);

export default answerRouter;
