import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { ProblemDifficulty } from '../../models/Problem';

export class CreateProblemsTable1635122227887 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: 'problems',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'options',
                        type: 'varchar',
                    },
                    {
                        name: 'level',
                        type: 'enum',
                        enum: [
                            ProblemDifficulty.BEGGINER,
                            ProblemDifficulty.MEDIUM,
                            ProblemDifficulty.HARD,
                        ],
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('problems');
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }
}
