import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid4 } from 'uuid';
import { Clients } from './Clients';

@Entity(`${process.env.APP_TABLE_SUFFIX}contacts`)
export class Contacts {

    @PrimaryColumn()
    readonly id_contact: string;

    @Column()
    fk_id_client: string;

    @JoinColumn({ name: "fk_id_client" })
    @ManyToOne(() => Clients)
    id_client: Clients;

    @Column()
    cell1: number;

    @Column()
    cell2: number;

    @Column()
    tell1: number;

    @Column()
    tell2: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id_contact) {
            this.id_contact = uuid4();
        }
    }
}