import { EntityRepository, Repository } from "typeorm";
import { AddressClients } from "../entities/AddressClients";

@EntityRepository(AddressClients)
export class AddressClientsRepositories extends Repository<AddressClients>{
}