import { getCustomRepository } from "typeorm";
import UserRepositories from "../repositories/UserRepositories";
import { hash } from 'bcrypt';

interface IUserRequest {
    id_user_request: string;
}

export class ResetPasswordUserServices {
    async execute({
        id_user_request
    }) {
        const userRepositories = getCustomRepository(UserRepositories);

        if (!id_user_request) {
            throw new Error(`Não foi encaminhado o id de um usuário para resetar a senha.`);
        }

        /**
        * Encodando o password para salvar no banco de dados. 
        */
        const passwordCode = this.generatedPassword(8);
        const passhash = await hash(passwordCode, 14);

        /**
         * Atualizando a senha.
         */
        const user = await userRepositories.resetPassword({
            password: passhash, id_user_edit: id_user_request
        });

        //
        if (user) {
            return {
                password: passwordCode,
                user: true
            }
        }

        return user;
    }

    /**
     * Gerador de senhas aleatórias.
     * @param lengthPass 
     * @returns 
     */
    private generatedPassword(lengthPass) {
        var passString = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < lengthPass; i++) {
            passString += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return passString;
    }
}