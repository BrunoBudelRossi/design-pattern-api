import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class UserController {
    async index(req: Request, res: Response): Promise<Response> {
        try {
            const repository = getRepository(User);

            const users = await repository.find({ select: ['id', 'email'] });

            return res.status(200).json({
                status: 'success',
                message: 'All clients returned successfully',
                payload: users,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message:
                    (err as Error).message || 'Error while finding all users',
                payload: [err],
            });
        }
    }

    async store(req: Request, res: Response): Promise<Response> {
        try {
            const repository = getRepository(User);
            const { email, password } = req.body;

            const existsUser = await repository.findOne({
                where: { email },
            });
            if (existsUser) {
                return res.status(409).json({
                    status: 'error',
                    message: 'Duplicate user',
                    payload: null,
                });
            }

            const user = repository.create({ email, password });

            await repository.save(user);

            return res.status(201).json({
                status: 'success',
                message: 'User created',
                payload: user,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message:
                    (err as Error).message || 'Error while create new user',
                payload: [err],
            });
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const repository = getRepository(User);
            const { email, password } = req.body;
            const { userId } = req.params;

            await repository.update({ id: userId }, { email, password });

            const user = await repository.findOne({
                where: { id: userId },
            });

            await repository.save(user);

            return res.status(200).json({
                status: 'success',
                message: 'User updated',
                payload: user,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: (err as Error).message || 'Error while update user',
                payload: [err],
            });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const repository = getRepository(User);
            const { userId } = req.params;

            await repository.delete({ id: userId });

            return res.status(200).json({
                status: 'success',
                message: 'User deleted',
                payload: null,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: (err as Error).message || 'Error while delete user',
                payload: [err],
            });
        }
    }
}

export default new UserController();
