import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Problem from './Problem';
import User from './User';

@Entity('answers')
export default class Answer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    used_time: number;

    @Column()
    number_tips_used: number;

    @Column()
    is_correct: boolean;

    @ManyToOne(() => Problem, (answers) => Answer, {
        cascade: true,
        eager: true,
    })
    problem: string;

    @ManyToOne(() => User, (answers) => Answer, {
        cascade: true,
        eager: true,
    })
    user: string;
}
