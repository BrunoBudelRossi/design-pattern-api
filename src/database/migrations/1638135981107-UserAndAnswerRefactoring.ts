import {MigrationInterface, QueryRunner} from "typeorm";

export class UserRefactoring1638135981107 implements MigrationInterface {
    name = 'UserRefactoring1638135981107'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."answers" DROP COLUMN "used_time"`);
        await queryRunner.query(`ALTER TABLE "public"."answers" DROP COLUMN "number_tips_used"`);
        await queryRunner.query(`ALTER TABLE "public"."answers" DROP COLUMN "is_correct"`);
        await queryRunner.query(`ALTER TABLE "public"."users" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."answers" ADD "usedTime" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."answers" ADD "numberTipsUsed" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."answers" ADD "isCorrect" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."answers" DROP COLUMN "isCorrect"`);
        await queryRunner.query(`ALTER TABLE "public"."answers" DROP COLUMN "numberTipsUsed"`);
        await queryRunner.query(`ALTER TABLE "public"."answers" DROP COLUMN "usedTime"`);
        await queryRunner.query(`ALTER TABLE "public"."users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "public"."answers" ADD "is_correct" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."answers" ADD "number_tips_used" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."answers" ADD "used_time" integer NOT NULL`);
    }

}
