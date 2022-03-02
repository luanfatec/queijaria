import 'dotenv/config';
import { getCustomRepository } from "typeorm";
import UserRepositories from "../repositories/UserRepositories";
import { sign } from 'jsonwebtoken';
import { compare } from 'bcrypt';

interface IAuthUserRequest {
    nickname: string;
    password: string;
}

export class AuthUserService {
    async execute({ nickname, password }: IAuthUserRequest) {
        const userRepositories = getCustomRepository(UserRepositories);

        // Se Email existe. 
        const userExists = await userRepositories.findOne({
            nickname
        });

        if (!userExists) {
            throw new Error("E-mail ou senha estão incorreto!");
        }

        // Se a senha está correta. 
        const passwdTrueOrFalse = await compare(password, userExists.password);

        if (!passwdTrueOrFalse) {
            throw new Error("E-mail ou senha estão incorreto!");
        }

        // Gerar Token.
        const token = sign({
            email: userExists.email
        }, process.env.APP_JSON_SECRET_KEY, {
            subject: userExists.id_user, expiresIn: "1d"
        });

        /** 
         * Retornando os dados do usuário logado para tratamento em linterface.
         */
        return {
            status: "success",
            token,
            isLogged: true,
            user: {
                name: userExists.name,
                email: userExists.email,
                nickname: userExists.nickname
            }
        };
    }
}