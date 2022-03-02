import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid4 } from 'uuid';

@Entity(`${process.env.APP_TABLE_SUFFIX}clients`)
export class Clients {

    @PrimaryColumn()
    readonly id_people: string;

    @Column()
    id_user: string;

    @Column()
    name: string;

    @Column()
    sex: number;

    @Column()
    cpf: string;

    @Column()
    rg: string;

    @Column()
    people_type: number;

    @CreateDateColumn()
    birth_date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id_people) {
            this.id_people = uuid4()
        }

        if (!this.rg) {
            this.rg = "000000000";
        }
    }
}