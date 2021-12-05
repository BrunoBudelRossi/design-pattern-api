import { MigrationInterface, QueryRunner } from 'typeorm';

export class AnswerRefactoring1638732042176 implements MigrationInterface {
    name = 'AnswerRefactoring1638732042176';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "public"."answers" ADD "points" integer DEFAULT NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "public"."users" ALTER COLUMN "name" SET NOT NULL`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "public"."users" ALTER COLUMN "name" DROP DEFAULT NULL`
        );
        await queryRunner.query(
            `ALTER TABLE "public"."answers" DROP COLUMN "points"`
        );
    }
}
