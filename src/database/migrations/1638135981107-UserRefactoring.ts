import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRefactoring1638135981107 implements MigrationInterface {
    name = 'UserRefactoring1638135981107';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "public"."users" ADD "name" character varying DEFAULT NULL`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "public"."users" DROP COLUMN "name"`
        );
    }
}
