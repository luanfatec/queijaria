import 'dotenv/config';
import { Router } from 'express';
import { AddressClientsController } from '../controllers/AddressClientsController';
import { AuthUserController } from '../controllers/AuthUserController';
import { ClientsController } from '../controllers/ClientsController';
import { UsersController } from '../controllers/UsersController';
import { IsAdministrator } from '../middlewares/IsAdministrator';
import { IsAuthenticated } from '../middlewares/IsAuthenticated';
import { IsSeller } from '../middlewares/IsSeller';


const controllers = {
    userController: new UsersController(),
    clientController: new ClientsController(),
    addressClientsController: new AddressClientsController(),
    authUserController: new AuthUserController()
}

const route = Router(); // Instancia de rotas.

/**
 * Rotas permitidas a qualquer usuário.
 */
route.post("/auth/login", controllers.authUserController.sigin);

/**
 * Rotas permitidas a usuários no nivel vendedor. 
 * Outros usuário tem acesso total para cadastrar. 
*/
route.post("/create-new-client", IsAuthenticated, IsSeller, controllers.clientController.createclient);
route.post("/create-new-address", IsAuthenticated, IsSeller, controllers.addressClientsController.createAddr);
route.post("/list-all-users", IsAuthenticated, IsSeller, controllers.userController.getAllUsers);
route.post("/list-all-addresses", IsAuthenticated, IsSeller, controllers.addressClientsController.listAllAddresses);

/**
 * Rotas permitidas a nível de administrador.
 * Outros usuários não pode acessar. 
 * 
 */
route.post("/create-new-user", IsAuthenticated, IsAdministrator, controllers.userController.createUser);
route.post("/edit-user", IsAuthenticated, IsAdministrator, controllers.userController.editUser);
route.post("/reset-password-user", IsAuthenticated, IsAdministrator, controllers.userController.resetPassword);
route.post("/delete-user", IsAuthenticated, IsAdministrator, controllers.userController.deleteUser);


export { route };