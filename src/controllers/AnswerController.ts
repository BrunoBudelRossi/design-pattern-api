import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Answer from '../models/Answer';

class AnswerController {
    async index(req: Request, res: Response): Promise<Response> {
        try {
            const repository = getRepository(Answer);

            const answers = await repository.find();

            return res.status(200).json({
                status: 'success',
                message: 'All answers returned successfully',
                payload: answers,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message:
                    (err as Error).message || 'Error while finding all answers',
                payload: [err],
            });
        }
    }

    // problema ao criar resposta, procurar como inserir relacao
    async store(req: Request, res: Response): Promise<Response> {
        try {
            const repository = getRepository(Answer);
            // const userRepository = getRepository(User);
            const { used_time, number_tips_used, is_correct, user, problem } =
                req.body;

            // const userInstance = userRepository.findOne({ id: user.id });

            const answer = repository.create({
                used_time,
                number_tips_used,
                is_correct,
                user,
                problem,
            });

            await repository.save(answer);

            return res.status(201).json({
                status: 'success',
                message: 'Answer created',
                payload: user,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message:
                    (err as Error).message || 'Error while create new answer',
                payload: [err],
            });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const repository = getRepository(Answer);
            const { used_time, number_tips_used, is_correct, user, problem } =
                req.body;
            const { answerId } = req.params;

            await repository.delete({ id: answerId });
            const answer = repository.create({
                id: answerId,
                used_time,
                number_tips_used,
                is_correct,
                user,
                problem,
            });

            await repository.save(answer);

            return res.status(200).json({
                status: 'success',
                message: 'Answer updated',
                payload: user,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: (err as Error).message || 'Error while update answer',
                payload: [err],
            });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const repository = getRepository(Answer);
            const { answerId } = req.params;

            await repository.delete({ id: answerId });

            return res.status(200).json({
                status: 'success',
                message: 'Answer deleted',
                payload: null,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: (err as Error).message || 'Error while delete answer',
                payload: [err],
            });
        }
    }
}

export default new AnswerController();
