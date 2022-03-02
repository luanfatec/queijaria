import { Request, Response } from "express";
import { CreateClientServices } from "../services/CreateClientServices";

export class ClientsController {
    async createclient(resquest: Request, response: Response) {
        const { name, sex, cpf, rg, people_type = 0, birth_date } = resquest.body;
        const { id_user } = resquest;

        const createClientServices = new CreateClientServices();

        const client = await createClientServices.execute({
            id_user, name, sex, cpf, rg, people_type, birth_date
        });

        return response.status(200).json(client);
    }
}

// {
// 	"name": "Luan Santos", 
// 	"nickname": "luan2", 
// 	"email": "luan@testes.com", 
// 	"password": "123456", 
// 	"type_user": 1,
// 	"id_user": "d69934cf-210c-44cc-92b4-965a406a2a1c", 
// 	"name": "Julia Silva Godoy", 
// 	"sex": 0, 
// 	"cpf": "875.587.696-88", 
// 	"rg": "78-968-478-9", 
// 	"people_type": 0, 
// 	"birth_date": "10/11/1999"
// }

