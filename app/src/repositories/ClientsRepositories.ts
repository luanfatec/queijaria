import { EntityRepository, Repository } from "typeorm";
import { Clients } from "../entities/Clients";

@EntityRepository(Clients)
export default class ClientsRepositories extends Repository<Clients> {
}