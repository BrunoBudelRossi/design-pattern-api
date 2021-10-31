import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Answer from './Answer';

export enum ProblemDifficulty {
    BEGGINER = 'begginer',
    MEDIUM = 'medium',
    HARD = 'hard',
}

@Entity('problems')
export default class Problem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @Column()
    options: string;

    @Column({
        type: 'enum',
        enum: ProblemDifficulty,
        default: ProblemDifficulty.MEDIUM,
    })
    level: ProblemDifficulty;

    @OneToMany(() => Answer, (problem) => Problem)
    answers: Answer[];
}
