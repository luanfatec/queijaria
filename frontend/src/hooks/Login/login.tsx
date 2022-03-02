import React, { useState, useContext, createContext } from "react";
import { api } from "../../services/api";
import { encode, decode } from 'js-base64';
import { MessagesLoginHook } from '../messages';

interface IAuthContext {
    isLogged: boolean;
    user: object;
    token: string;
    sigIn(nickname: string, password: string): void;
    logOut(): void;
}

interface IAuthDataUser {
    name: string;
    email: string;
    nickname: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = function ({ children }) {
    /**
     * Estado do usuário. 
     * Status de ativo para true.
     * Status de inativo para false.
     */
    const [isLogged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@loggedSystem:logged');
        return !!isLogged;
    });

    /**
     * Iniciando estado do objeto de dados do usuário logado.
     */
    const [user, setUser] = useState<IAuthDataUser>(() => {
        const dataUser = localStorage.getItem("@configUserLogged:data");
        return dataUser ? JSON.parse(decode(dataUser)) : "";
    });

    const [token, setToken] = useState<string>(() => {
        const dataToken = localStorage.getItem("@configUserLogged:token");
        return !dataToken ? "" : dataToken;
    });

    /**
     * Configuração da ação de login.
     * @param nickname 
     * @param password 
     * @returns 
     */
    const sigIn = (nickname: string, password: string) => {

        if (!nickname) {
            alert(MessagesLoginHook.errors.errorNicknameInvalid);
            return false;
        }

        if (!password) {
            alert(MessagesLoginHook.errors.errorPasswordInvalid);
            return false;
        }

        // Recuperando dados da api para validação.
        api.post("/auth/login", { nickname, password }).then(function (response) {

            const { data } = response;

            /**
             * Verificando se o statuss seria de erro;
             */
            if (data.status && data.status === "error") {
                alert(data.message);
                return false;
            }

            /**
             * Verificando se a resposta seria de autorização de login.
             */
            if (data.isLogged) {

                if (data.status && data.status === "success") {
                    const datacode = encode(JSON.stringify(data.user)); // Separando os dados do usuário.
                    localStorage.setItem('@loggedSystem:logged', 'true');
                    localStorage.setItem('@configUserLogged:data', datacode);
                    localStorage.setItem('@configUserLogged:token', data.token);
                    setLogged(true);
                    setUser(data.user);
                } else {
                    alert(MessagesLoginHook.errors.errorPasswordAndUserIncorrects);
                    setLogged(false);
                    return false;
                }
            } else {
                alert(MessagesLoginHook.errors.errorPasswordAndUserIncorrects);
            }

        }).catch(function (response) {
            console.log(response);
            alert(MessagesLoginHook.errors.errorExecLogin);
        });
    }

    const logOut = () => {
        localStorage.removeItem('@loggedSystem:logged');
        localStorage.removeItem('@configUserLogged:data');
        localStorage.removeItem('@configUserLogged:token');
        setLogged(false);
        window.location.href = "/";
    }

    return (
        <AuthContext.Provider value={{ user, isLogged, sigIn, logOut, token }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthContext, useAuth, AuthProvider };