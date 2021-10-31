import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationUserProblem1635655939830 implements MigrationInterface {
    name = 'RelationUserProblem1635655939830'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "answers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "used_time" integer NOT NULL, "number_tips_used" integer NOT NULL, "is_correct" boolean NOT NULL, "problemId" uuid, "userId" uuid, CONSTRAINT "PK_9c32cec6c71e06da0254f2226c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."problems" DROP CONSTRAINT "UQ_abedb6c57245ef09c052a901801"`);
        await queryRunner.query(`ALTER TABLE "public"."problems" ALTER COLUMN "level" SET DEFAULT 'medium'`);
        await queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_2e92564784fe26766b01040997f" FOREIGN KEY ("problemId") REFERENCES "problems"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_1bd66b7e0599333e61d2e3e1678" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_1bd66b7e0599333e61d2e3e1678"`);
        await queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_2e92564784fe26766b01040997f"`);
        await queryRunner.query(`ALTER TABLE "public"."problems" ALTER COLUMN "level" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "public"."problems" ADD CONSTRAINT "UQ_abedb6c57245ef09c052a901801" UNIQUE ("description")`);
        await queryRunner.query(`DROP TABLE "answers"`);
    }

}
