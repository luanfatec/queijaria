import { Request, Response } from "express";
import { CreateUsersServices } from "../services/CreateUsersServices";
import { ListUsersServices } from "../services/ListUsersServices";
import { EditUserServices } from '../services/EditUserServices';
import { ResetPasswordUserServices } from "../services/ResetPasswordUserServices";
import { DeleteUserServices } from "../services/DeleteUserServices";


export class UsersController {

    /**
     * 
     * @param resquest 
     * @param response 
     * @returns 
     */
    async createUser(request: Request, response: Response) {
        // 
        const { name, nickname, email, password, type_user = 2 } = request.body;

        const createUsersServices = new CreateUsersServices();

        const user = await createUsersServices.execute({
            name, nickname, email, password, type_user
        });

        return response.status(200).json({
            status: "success",
            message: "Usuário salvo com sucesso",
            user
        });

    }

    /**
     * 
     * @param request 
     * @param response 
     * @returns 
     */
    async getAllUsers(request: Request, response: Response) {
        const listUsersServices = new ListUsersServices();

        // Desestruturando dados do service. 
        const { total, users } = await listUsersServices.execute();

        return response.status(200).json({ users, total });
    }


    async editUser(request: Request, response: Response) {
        // Get Data User
        const { id_user_edit, name, nickname, email, password, type_user = 2 } = request.body;

        const editUserServices = new EditUserServices();

        // Enviar usuário para ser atualizado.
        const user = await editUserServices.execute({
            id_user_edit, email, name, nickname, password, type_user
        });

        // Feedback de execução.
        return response.status(200).json({
            message: user ? "Usuário atualizado com sucesso." : "Usuário não pode ser atualizado.",
            user
        });
    }

    async resetPassword(request: Request, response: Response) {
        const { id_user_edit } = request.body;

        const resetPasswordUserServices = new ResetPasswordUserServices();

        // Enviando ação de atualização para services.
        const user = await resetPasswordUserServices.execute({ id_user_request: id_user_edit });

        return response.status(200).json({
            message: user ? "Senha resetada com sucesso." : "A senha não pode ser resetada.",
            user
        });
    }


    async deleteUser(request: Request, response: Response) {
        const { id_user_delete } = request.body;

        // 
        const userRepositories = new DeleteUserServices();

        //
        const user = await userRepositories.execute({
            id_user_delete
        })

        return response.status(200).json({
            status: "success",
            message: user? "Usuário excluído com sucesso." : "Usuário não pode ser excluído."
        });
    }
}