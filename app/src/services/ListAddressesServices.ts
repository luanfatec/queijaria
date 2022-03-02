import { AddressClientsRepositories } from '../repositories/AddressClientsRepositories';
import { getCustomRepository } from 'typeorm';

export class ListAddressesServices {

    /**
     * 
     * @returns 
     */
    async execute() {
        const addressClientsRepositories = getCustomRepository(AddressClientsRepositories);

        const address = await addressClientsRepositories.find(); // Recuperando endereços.
        const total = await addressClientsRepositories.count(); // Contando endereço.

        return {
            total,
            address
        };
    }
}