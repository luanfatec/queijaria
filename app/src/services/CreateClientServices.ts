import { getCustomRepository } from "typeorm";
import ClientsRepositories from "../repositories/ClientsRepositories";


interface IClientsRequest {
    id_user: string;
    name: string;
    sex: number;
    cpf: string;
    rg: string;
    people_type: number;
    birth_date: Date;
}

export class CreateClientServices {
    async execute({
        id_user, name, sex, cpf, rg, people_type, birth_date
    }: IClientsRequest) {
        const clientsRepositories = getCustomRepository(ClientsRepositories);

        // Verificando se foi informado um documento ao cliente.
        if (!cpf) {
            throw new Error("O Documento do cliente não foi informado.");
        }

        // Verificando se o nome do cliente foi informado. 
        if (!name) {
            throw new Error("O nome do cliente não foi informado.");
        }

        // Verificando se a data de nascimento foi informada pelo usuário. 
        if (!birth_date) {
            throw new Error("Data de nascimento não informada.");
        }

        const clienExistsCpf = await clientsRepositories.findOne({ cpf }); // Retorna um modelo se existir, caso não exista, entra no erro. 
        if (clienExistsCpf) {
            throw new Error(`O CPF ${cpf}, já está cadastro no sistema.`);
        }

        const client = await clientsRepositories.create({
            id_user, name, sex, cpf, rg, people_type, birth_date
        }); //Criação de modelo.

        await clientsRepositories.save(client); // Salvando dados.
        return client;
    }
}