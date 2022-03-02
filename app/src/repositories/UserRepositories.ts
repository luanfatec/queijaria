import "dotenv/config";
import { EntityRepository, Repository } from "typeorm";
import { Users } from "../entities/Users";

interface IConfigUserRepository {
    id_user_edit: string;
    nickname?: string;
    email?: string;
    name?: string;
    password?: string;
    type_user?: number;
}

@EntityRepository(Users)
export default class UserRepositories extends Repository<Users> {

    /**
     * Verifica se já existe o email.
     * @param param0 
     * @returns 
     */
    async findEmialDuplicate({
        email, id_user_edit
    }: IConfigUserRepository) {

        const emailExistis = await this.
            createQueryBuilder(`${process.env.APP_TABLE_SUFFIX}users`)
            .where(
                `${process.env.APP_TABLE_SUFFIX}users.email = :email and ${process.env.APP_TABLE_SUFFIX}users.id_user != :id_user_edit`,
                { email: email, id_user_edit: id_user_edit })
            // .where(`${process.env.APP_TABLE_SUFFIX}users.id_user != :id`, { id: id_user_edit })
            .getOne();

        /**
         * Caso já exista alguém que não seja o Editado, será retornado erro de já existencia no email.
         */
        if (emailExistis) {
            console.log(emailExistis);
            return await true;
        }
        return await false;
    }

    /**
     * Verifica se já existe o nickname.
     * @param param0 
     * @returns 
     */
    async findNickNameDuplicate({
        nickname, id_user_edit
    }: IConfigUserRepository) {
        const nicknameExists = await this.
            createQueryBuilder(`${process.env.APP_TABLE_SUFFIX}users`)
            .where(
                `${process.env.APP_TABLE_SUFFIX}users.nickname = :nickname and ${process.env.APP_TABLE_SUFFIX}users.id_user != :id_user_edit`,
                { nickname: nickname, id_user_edit: id_user_edit })
            .getOne();

        /**
         * Caso já exista alguém que não seja o Editado, será retornado erro de já existencia no nickname.
         */
        if (nicknameExists) {
            return await true;
        }

        return await false;
    }

    /**
     * Atualização de usuário
     * @param param0 
     * @returns 
     */
    async updateUserCustom({ id_user_edit, name, nickname, email, password, type_user }: IConfigUserRepository) {
        const userUpdate = await this.createQueryBuilder(`${process.env.APP_TABLE_SUFFIX}users`)
            .update(Users)
            .set({
                name, nickname, email, password, type_user
            }).where("id_user = :id_user_edit", { id_user_edit: id_user_edit }).execute();

        /**
         * Caso usuário seja atualizado, será retornado true.
         */
        if (userUpdate) {
            return await true;
        }
        return await false;
    }

    /**
     * 
     * @param param0 
     * @returns 
     */
    async resetPassword({ id_user_edit, password }: IConfigUserRepository) {
        const passReset = await this.createQueryBuilder(`${process.env.APP_TABLE_SUFFIX}users`)
            .update()
            .set({
                password
            }).where("id_user = :id_user_edit", { id_user_edit: id_user_edit }).execute();

        /**
         * Caso usuário seja atualizado, será retornado true.
         */
        if (passReset) {
            return await true;
        }
        return await false;
    }

    async deleteUser({ id_user_edit }: IConfigUserRepository) {
        const deleteUser = await this.createQueryBuilder(`${process.env.APP_TABLE_SUFFIX}users`)
            .delete().where("id_user = :id_user_edit", { id_user_edit: id_user_edit }).execute();


        /**
         * Caso o usuário seja excluído com sucesso, será retornado true.
         */
        if (deleteUser) {
            return await true;
        }
        return await false;
        
    }
}