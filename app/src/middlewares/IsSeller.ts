import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import UserRepositories from "../repositories/UserRepositories";

export async function IsSeller(request: Request, response: Response, next: NextFunction) {
    const { id_user } = request;
    const { people_type } = request.body;

    const userRepositories = getCustomRepository(UserRepositories);

    /**
     * Caso o tipo de cliente seja um fornecedor, será necessário verificar se o tipo de usuário cadastro é um vendedor,
     * caso seja um vendedor, não poderá cadastrar um fornecedor. 
     */
    if (people_type === 1) {
        const { type_user } = await userRepositories.findOne({ id_user });

        if (type_user === 1) {
            return response.status(401).json({
                status: "Unauthorized",
                message: "Você não pode cadastrar um fornecedor."
            });
        }
    }

    return next();
}