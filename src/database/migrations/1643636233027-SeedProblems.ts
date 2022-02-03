import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedProblems1643636233027 implements MigrationInterface {
    ids = [];

    public async up(queryRunner: QueryRunner): Promise<void> {
        this.ids.push(
            await queryRunner.query(
                `INSERT INTO "problems" (description, options, level, tips, "correctAnswer") VALUES ('Bridge, Decorator, Façade (fachada), Proxy  e Flyweight são exemplos de padrões gof:', 'Criacionais|Comportamentais|Estruturais|De persistência', 'Estágiario', 'Este grupo explica como montar objetos e classes em estruturas maiores, mas ainda mantendo essas estruturas flexíveis e eficientes.', 'Estruturais') RETURNING id`
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        this.ids.map(async (curr) => {
            await queryRunner.query(`DELETE FROM problems WHERE id = ${curr}`);
        });
    }
}
