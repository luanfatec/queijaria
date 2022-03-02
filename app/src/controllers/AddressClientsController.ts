import { Request, Response } from "express";
import { CreateAddressClientsServices } from "../services/CreateAddressClientsServices";
import { ListAddressesServices } from "../services/ListAddressesServices";


export class AddressClientsController {
    /**
     * 
     * @param request 
     * @param response 
     * @returns 
     */
    async createAddr(request: Request, response: Response) {
        // Recupera dados do request.
        const { fk_id_client, public_place, cep, state, city, district, complement, number } = request.body;

        const addressClientsRepositories = new CreateAddressClientsServices();

        // Enviando os dados fornecido pelo usuário.
        const address = await addressClientsRepositories.execute({
            fk_id_client, public_place, cep, state, city, district, complement, number
        });

        // Feedback de criação.
        return response.status(200).json(address);
    }

    /**
     * 
     * @param request 
     * @param response 
     * @returns 
     */
    async listAllAddresses(request: Request, response: Response) {
        const listAddressesServices = new ListAddressesServices();

        // Recuperando dados.
        const address = await listAddressesServices.execute();

        return response.json({ address }); // Feedback de retorno.
    }
}