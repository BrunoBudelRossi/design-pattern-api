import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeInsert,
    BeforeUpdate,
    OneToMany,
} from 'typeorm';
import bcrypt from 'bcrypt';
import Answer from './Answer';

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        unique: true,
    })
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Answer, (user) => User)
    answers: Answer[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 10);
    }
}
