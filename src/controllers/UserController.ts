import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class UserController {
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

            return res.status(200).json({
                status: 'success',
                message: 'All clients returned successfully',
                payload: user,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message || 'Error while create new user',
                payload: [err],
            });
        }
    }
}

export default new UserController();
