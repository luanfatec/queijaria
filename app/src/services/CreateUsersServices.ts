import { getCustomRepository } from 'typeorm';
import UserRepositories from "../repositories/UserRepositories";
import { hash } from 'bcrypt';

interface IUserRequest {
    name: string;
    nickname: string;
    email: string;
    password: string;
    type_user: number;
}

export class CreateUsersServices {

    async execute({
        name, nickname, email, password, type_user
    }: IUserRequest) {
        const userRepositories = getCustomRepository(UserRepositories);

        // Caso email seja vazio, será lançado um erro referente.
        if (!nickname) {
            throw new Error("Nickname não informado.");
        }

        // Caso email seja vazio, será lançado um erro referente.
        if (!email) {
            throw new Error("Email não informado.");
        }

        // Buscando se já existe o email e nickname informado. 
        const userEmailExistis = await userRepositories.findOne({
            email
        });

        const userNocknameExistis = await userRepositories.findOne({
            nickname
        });

        // Caso email já exista, será lançado um erro referente.
        if (userEmailExistis) {
            throw new Error("Email já existe.");
        }

        // Caso nickname/user já exista, será lançado um erro referente.
        if (userNocknameExistis) {
            throw new Error("Nickname já existe");
        }

        /**
         * Encodando o password para salvar no banco de dados. 
         */
        const passhash = await hash(password, 14);

        const user = await userRepositories.create({
            name, nickname, email, password: passhash, type_user
        }); //Criação de modelo.

        await userRepositories.save(user); // Savando dados.

        return user;
    }
}