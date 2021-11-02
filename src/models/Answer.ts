import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Problem from './Problem';
import User from './User';

@Entity('answers')
export default class Answer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    usedTime: number;

    @Column()
    numberTipsUsed: number;

    @Column()
    isCorrect: boolean;

    @ManyToOne(() => Problem, (answers) => Answer, {
        cascade: true,
        eager: true,
    })
    problem: Problem[];

    @ManyToOne(() => User, (answers) => Answer, {
        cascade: true,
        eager: true,
    })
    user: User[];
}
