import { Router } from 'express';
import ProblemController from '../controllers/ProblemController';

const probleRouter = Router({ mergeParams: true });

probleRouter
    .route('/')
    .get(ProblemController.index)
    .post(ProblemController.store);
probleRouter
    .route('/:problemId')
    .put(ProblemController.update)
    .delete(ProblemController.delete);

export default probleRouter;
