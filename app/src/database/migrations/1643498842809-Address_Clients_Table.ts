import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddressClientsTable1643498842809 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: `${process.env.APP_TABLE_SUFFIX}address_clients`,
            columns: [
                {
                    name: "id_addru",
                    type: "varchar",
                    isPrimary: true,
                    generationStrategy: "uuid"
                }, {
                    name: "fk_id_client_addr",
                    type: "varchar",
                    isNullable: false
                }, {
                    name: "public_place",
                    type: "varchar"
                }, {
                    name: "cep",
                    type: "varchar"
                }, {
                    name: "state",
                    type: "varchar"
                }, {
                    name: "city",
                    type: "varchar"
                }, {
                    name: "district",
                    type: "varchar"
                }, {
                    name: "complement",
                    type: "varchar"
                }, {
                    name: "number",
                    type: "varchar"
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
                    name: "FKIdClientAddress",
                    referencedTableName: `${process.env.APP_TABLE_SUFFIX}clients`,
                    referencedColumnNames: ["id_people"],
                    columnNames: ["fk_id_client_addr"],
                    onDelete: "CASCADE",
                    onUpdate: "CASCADE"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(`${process.env.APP_TABLE_SUFFIX}address_clients`);
    }

}
