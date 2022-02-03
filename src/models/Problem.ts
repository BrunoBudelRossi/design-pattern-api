import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Answer from './Answer';

export enum ProblemDifficulty {
    TRAINEE = 'Estágiario',
    JUNIOR = 'Junior',
    FULL = 'Pleno',
    SENIOR = 'Sênior',
    MASTER = 'Master',
    SPECIALIST = 'Especialista',
}

@Entity('problems')
export default class Problem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @Column()
    options: string;

    @Column()
    tips: string;

    @Column()
    correctAnswer: string;

    @Column({
        type: 'enum',
        enum: ProblemDifficulty,
        default: ProblemDifficulty.TRAINEE,
    })
    level: ProblemDifficulty;

    @OneToMany(() => Answer, (problem) => Problem)
    answers: Answer[];
}
