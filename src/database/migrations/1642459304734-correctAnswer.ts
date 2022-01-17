import {MigrationInterface, QueryRunner} from "typeorm";

export class correctAnswer1642459304734 implements MigrationInterface {
    name = 'correctAnswer1642459304734'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."problems" ADD "correctOption" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."problems" DROP COLUMN "correctOption"`);
    }

}
