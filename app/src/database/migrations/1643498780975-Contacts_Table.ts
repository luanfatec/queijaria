import "dotenv/config";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class ContactTable1643461372954 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: `${process.env.APP_TABLE_SUFFIX}contacts`,
            columns: [
                {
                    name: "id_contact",
                    type: "varchar",
                    isPrimary: true,
                    generationStrategy: "uuid"
                }, {
                    name: "fk_id_client",
                    type: "varchar",
                    isNullable: false
                }, {
                    name: "cell1",
                    type: "bigint"
                }, {
                    name: "cell2",
                    type: "bigint"
                }, {
                    name: "tell1",
                    type: "bigint"
                }, {
                    name: "tell2",
                    type: "bigint"
                }, {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                }, {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ], foreignKeys: [
                {
                    name: "FkIdClientContacts",
                    referencedTableName: `${process.env.APP_TABLE_SUFFIX}clients`,
                    referencedColumnNames: ["id_people"],
                    columnNames: ["fk_id_client"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(`${process.env.APP_TABLE_SUFFIX}contacts`);
    }
}