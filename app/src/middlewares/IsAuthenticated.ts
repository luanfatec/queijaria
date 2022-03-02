import 'dotenv/config';
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function IsAuthenticated(request: Request, response: Response, next: NextFunction) {

    // Get Token
    const tokenberer = request.headers.authorization;

    // Validar se está preenchido. 
    if (!tokenberer) {
        return response.status(401).end();
    }

    // Se Token é válido.
    const [, token] = tokenberer.split(" ");
    try {
        const { sub } = verify(token, process.env.APP_JSON_SECRET_KEY) as IPayload;
        request.id_user = sub;
        return next();
    } catch (error) {
        return response.status(401).end();
    }

}