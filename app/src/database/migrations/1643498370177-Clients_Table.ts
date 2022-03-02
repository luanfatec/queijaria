import 'dotenv/config';
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ClientTable1643461300527 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: `${process.env.APP_TABLE_SUFFIX}clients`,
            columns: [
                {
                    name: "id_people",
                    type: "varchar",
                    isPrimary: true,
                    generationStrategy: "uuid"
                }, {
                    name: "id_user",
                    type: "varchar",
                    /**
                     * Será apenas uma identificação de quem conquistou o cliente. 
                     * É possível a alteração, caso o vendedor seja alterado por motivos não definidos. 
                     */
                }, {
                    name: "name",
                    type: "varchar"
                }, {
                    name: "sex",
                    type: "int",
                    default: 2
                    /**
                     * 0 -> Feminino
                     * 1 -> Masculino
                     * 2 -> Indefinido
                     */
                }, {
                    name: "cpf",
                    type: "varchar"
                }, {
                    name: "rg",
                    type: "varchar"
                }, {
                    name: "people_type",
                    type: "int"
                    /**
                     * 0 -> Client Consumidor
                     * 1 -> Fornecedor
                     */
                }, {
                    name: "birth_date",
                    type: "date"
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
        await queryRunner.dropTable(`${process.env.APP_TABLE_SUFFIX}clients`);
    }

}