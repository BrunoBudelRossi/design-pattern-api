import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Problem from '../models/Problem';

class ProblemController {
    async index(req: Request, res: Response): Promise<Response> {
        try {
            const repository = getRepository(Problem);

            const problems = await repository.find({ order: { level: 'ASC' } });

            const result = problems.map((problem) => {
                const { id, description, options, tips, correctAnswer, level } =
                    problem;
                const arrOptions = options.split('|');
                const arrTips = tips.split('|');

                return {
                    id,
                    description,
                    options: arrOptions,
                    tips: arrTips,
                    correctAnswer,
                    level,
                };
            });

            return res.status(200).json({
                status: 'success',
                message: 'All problems returned successfully',
                payload: result,
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
            const { description, options, tips, correctAnswer, level } =
                req.body;

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

            const problem = repository.create({
                description,
                options,
                tips,
                correctAnswer,
                level,
            });

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
            const { description, options, tips, correctAnswer, level } =
                req.body;
            const { problemId } = req.params;

            await repository.update(
                { id: problemId },
                { description, options, tips, correctAnswer, level }
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
