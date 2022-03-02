import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import UserRepositories from "../repositories/UserRepositories";

export async function IsAdministrator(request: Request, response: Response, next: NextFunction) {
    const { id_user } = request; // Buscando o id do usuário logado;

    const userRepositories = getCustomRepository(UserRepositories);
    const user = await userRepositories.findOne({ id_user }); // Verificando se o usuário existe e retornando ele;

    // Checar user is Admin
    const { type_user } = user;

    // Caso o tipo de usuário seja 0, é considerado como administrador.
    if (type_user === 0) {
        return next();
    }

    return response.status(401).json({
        status: "Unauthorized",
        message: "Você não tem autorização para realizar essa operação."
    });
}