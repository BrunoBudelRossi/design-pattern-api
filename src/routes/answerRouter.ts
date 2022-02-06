import { Router } from 'express';
import AnswerController from '../controllers/AnswerController';

const answerRouter = Router({ mergeParams: true });

answerRouter
    .route('/deleteAnswersFromUser')
    .delete(AnswerController.deleteAnswersFromUser);

answerRouter
    .route('/')
    .get(AnswerController.index)
    .post(AnswerController.store);
answerRouter
    .route('/:answerId')
    .put(AnswerController.update)
    .delete(AnswerController.delete);
answerRouter
    .route('/answerFromUser')
    .get(AnswerController.findAllAnswerFromUser);

export default answerRouter;
