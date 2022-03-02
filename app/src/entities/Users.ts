import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid4 } from 'uuid';

@Entity(`${process.env.APP_TABLE_SUFFIX}users`)
export class Users {
    @PrimaryColumn()
    readonly id_user: string;

    @Column()
    name: string;

    @Column()
    nickname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    type_user: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id_user) {
            this.id_user = uuid4();
        }
    }
}