import { getCustomRepository } from "typeorm";
import UserRepositories from "../repositories/UserRepositories";

interface IUserRequest {
    id_user_delete: string;
}

export class DeleteUserServices {
    async execute({ id_user_delete }: IUserRequest) {
        const userRepositories = getCustomRepository(UserRepositories);

        // Verifica se o id do usuário foi enviado na requisição.
        if (!id_user_delete) {
            throw new Error("Não foi informado nenhum usuário a ser excluído.");
        }

        //
        const user = await userRepositories.deleteUser({
            id_user_edit: id_user_delete
        });

        return await user;
    }
}