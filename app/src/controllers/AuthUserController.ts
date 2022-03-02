import { Request, Response } from "express";
import { AuthUserService } from "../services/AuthUserService";


export class AuthUserController {
    async sigin(request: Request, response: Response) {
        const { nickname, password } = request.body;

        const authUserServices = new AuthUserService();

        const { status, token, isLogged, user } = await authUserServices.execute({
            nickname, password
        });

        return response.status(200).json({ token, status, isLogged, user });
    }
}