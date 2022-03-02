import { getCustomRepository } from "typeorm";
import { AddressClientsRepositories } from "../repositories/AddressClientsRepositories";

interface IAddressRequest {
    fk_id_client: string;
    public_place: string;
    cep: string;
    state: string;
    city: string;
    district: string;
    complement: string;
    number: string;
}

export class CreateAddressClientsServices {
    async execute({
        fk_id_client, public_place, cep, state, city, district, complement, number
    }: IAddressRequest) {
        const addressClientsRepositories = getCustomRepository(AddressClientsRepositories);

        /**
         * Checando se CEP foi informado pelo usuário. 
         */
        if (!cep) {
            throw new Error("O Cep não foi informado.");
        }

        /**
         * Checando se Logradouro  foi informado pelo usuário. 
         */
        if (!public_place) {
            throw new Error("O Logradouro não foi informado.");
        }

        /**
         * Checando se Estado foi informado pelo usuário.
         */
        if (!state) {
            throw new Error("O Estado não foi informado.");
        }

        /**
         * Checando se Cidade foi informado pelo usuário. 
         */
        if (!city) {
            throw new Error("A Cidade não foi informada.");
        }

        /**
         * Checando se o numero foi informado pelo usuário. 
         */
        if (!number) {
            throw new Error("O Número não foi informado.");
        }

        const address = await addressClientsRepositories.create({
            fk_id_client, public_place, cep, state, city, district, complement, number
        }); ///Criação de modelo.

        await addressClientsRepositories.save(address); // Salvando modelo.

        return address;
    }
}