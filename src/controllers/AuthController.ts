import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthController {
    async login(req: Request, res: Response): Promise<Response> {
        try {
            const repository = getRepository(User);
            const { email, password } = req.body;

            const user = await repository.findOne({
                where: { email },
            });

            if (!user) {
                return res.status(401).json({
                    status: 'error',
                    message: 'User does not exist or is invalid',
                    payload: null,
                });
            }

            const isValidPassword = bcrypt.compareSync(password, user.password);

            if (!isValidPassword) {
                return res.status(401).json({
                    status: 'error',
                    message: 'Password invalid',
                    payload: null,
                });
            }

            const token = jwt.sign(
                { userName: user.name, userId: user.id, userEmail: user.email },
                process.env.SECRET as string
            );
            return res.status(201).json({
                status: 'success',
                message: 'User logged',
                payload: [{ auth: true, token }],
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message:
                    (err as Error).message || 'Error while authenticate user',
                payload: [err],
            });
        }
    }

    async logout(req: Request, res: Response): Promise<Response> {
        return res.status(200).json({
            status: 'success',
            message: 'success logout',
            payload: { auth: false, token: null },
        });
    }
}

export default new AuthController();
