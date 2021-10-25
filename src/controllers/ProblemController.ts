import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Problem from '../models/Problem';

class ProblemController {
    async index(req: Request, res: Response): Promise<Response> {
        try {
            const repository = getRepository(Problem);
            console.log(repository);

            const problems = await repository.find();

            return res.status(200).json({
                status: 'success',
                message: 'All problems returned successfully',
                payload: problems,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message:
                    (err as Error).message ||
                    'Error while finding all problems',
                payload: [err],
            });
        }
    }

    async store(req: Request, res: Response): Promise<Response> {
        try {
            const repository = getRepository(Problem);
            const { description, options, level } = req.body;

            const existsProblem = await repository.findOne({
                where: { description },
            });
            if (existsProblem) {
                return res.status(409).json({
                    status: 'error',
                    message: 'Duplicate problem',
                    payload: null,
                });
            }

            const problem = repository.create({ description, options, level });

            await repository.save(problem);

            return res.status(201).json({
                status: 'success',
                message: 'Problem created',
                payload: problem,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message:
                    (err as Error).message || 'Error while create new problem',
                payload: [err],
            });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const repository = getRepository(Problem);
            const { description, options, level } = req.body;
            const { problemId } = req.params;

            await repository.update(
                { id: problemId },
                { description, options, level }
            );

            const problem = await repository.findOne({
                where: { id: problemId },
            });

            await repository.save(problem);

            return res.status(200).json({
                status: 'success',
                message: 'Problem updated',
                payload: problem,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: (err as Error).message || 'Error while update problem',
                payload: [err],
            });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const repository = getRepository(Problem);
            const { problemId } = req.params;

            await repository.delete({ id: problemId });

            return res.status(200).json({
                status: 'success',
                message: 'Problem deleted',
                payload: null,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: (err as Error).message || 'Error while delete problem',
                payload: [err],
            });
        }
    }
}

export default new ProblemController();
