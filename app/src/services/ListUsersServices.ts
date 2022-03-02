import { getCustomRepository } from "typeorm";
import UserRepositories from "../repositories/UserRepositories";


export class ListUsersServices {

    /**
     * 
     * @returns 
     */
    async execute() {
        const userRepositories = getCustomRepository(UserRepositories);

        /**
         * Recuperando os dados de usuário.
         * Não recupera a senha.
         */
        const users = await userRepositories
            .query(`SELECT id_user, name, nickname, type_user, email, created_at, updated_at  FROM ${process.env.APP_TABLE_SUFFIX}users;`);
        const total = await userRepositories.count(); // Contanto o total de usuários registrados.

        return {
            total,
            users
        };
    }
}