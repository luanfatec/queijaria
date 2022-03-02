import { getCustomRepository } from 'typeorm';
import UserRepositories from '../repositories/UserRepositories';
import { hash } from 'bcrypt';


interface IUserRequest {
    id_user_edit: string;
    name: string;
    nickname: string;
    email: string;
    password: string;
    type_user: number;
}

export class EditUserServices {
    async execute({
        id_user_edit, name, nickname, email, password, type_user
    }: IUserRequest) {
        //
        const userRepositories = getCustomRepository(UserRepositories);

        // Caso nickname não tenha sido informado, será retornado um erro ao usuário, exigindo que informe o nickname.
        if (!nickname) {
            throw new Error("Nickname não informado.");
        }

        // Caso email não tenha sido informado, será retornado um erro ao usuário, exigindo que informe o email.
        if (!email) {
            throw new Error("Email não informado.");
        }

        // Caso password não tenha sido informado, será retornado um erro ao usuário, exigindo que informe o password.
        if (!password) {
            throw new Error("Senha não informado.");
        }

        // Buscando se já existe o email informado. 
        const userEmailExistis = await userRepositories.findEmialDuplicate({
            email, id_user_edit
        });

        if (userEmailExistis) {
            throw new Error("Email já existe.");
        }

        // Buscando se já existe o nickname informado. 
        const userNocknameExistis = await userRepositories.findNickNameDuplicate({
            nickname, id_user_edit
        });

        if (userNocknameExistis) {
            throw new Error("Nickname já existe");
        }

        // Criptografando a password
        const passwordEncrypt = await hash(password, 14);

        // Criando atualização.
        const userUpdate = await userRepositories.updateUserCustom({
            id_user_edit, name, nickname, email, password: passwordEncrypt, type_user
        });

        // Retornando usuário.
        return await userUpdate;
    }
}