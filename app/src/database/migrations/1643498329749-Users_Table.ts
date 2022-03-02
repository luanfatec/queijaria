import 'dotenv/config';
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserTable1643332112347 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: `${process.env.APP_TABLE_SUFFIX}users`,
            columns: [
                {
                    name: "id_user",
                    type: "varchar",
                    isPrimary: true,
                    generationStrategy: "uuid"
                }, {
                    name: "name",
                    type: "varchar",
                }, {
                    name: "nickname",
                    type: "varchar",
                }, {
                    name: "email",
                    type: "varchar",
                }, {
                    name: "password",
                    type: "varchar",
                }, {
                    name: "type_user",
                    type: "int",
                    default: 0
                    /**
                     * 0 -> Super usuário (padrão)
                     * 1 -> Vendedor
                    */
                }, {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }, {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(`${process.env.APP_TABLE_SUFFIX}users`);
    }

}