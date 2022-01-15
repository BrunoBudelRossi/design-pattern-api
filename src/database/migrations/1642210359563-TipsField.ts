import {MigrationInterface, QueryRunner} from "typeorm";

export class TipsField1642210359563 implements MigrationInterface {
    name = 'TipsField1642210359563'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."problems" ADD "tips" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."answers" ALTER COLUMN "points" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."answers" ALTER COLUMN "points" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."problems" DROP COLUMN "tips"`);
    }

}
