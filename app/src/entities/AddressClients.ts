import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid4 } from 'uuid';
import { Clients } from "./Clients";

@Entity(`${process.env.APP_TABLE_SUFFIX}address_clients`)
export class AddressClients {
    @PrimaryColumn()
    readonly id_addru: string;

    @Column()
    fk_id_client: string;

    @JoinColumn({ name: "fk_id_client" })
    @ManyToOne(() => Clients)
    id_client: Clients;

    @Column()
    public_place: string;

    @Column()
    cep: string;

    @Column()
    state: string;

    @Column()
    city: string;

    @Column()
    district: string;

    @Column()
    complement: string;

    @Column()
    number: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id_addru) {
            this.id_addru = uuid4();
        }
    }

}