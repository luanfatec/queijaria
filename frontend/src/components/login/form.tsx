import React, { useState } from "react";
import { useAuth } from "../../hooks/Login/login";
import {
    ContainerForm, FormLogo, Logo, FormButtonSubmit,
    FormBox, FormLoginGroup, FormInputControl,
} from "./css/styled";


const FormLoginFragment: React.FC = function () {

    const [nickname, setNickname] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { sigIn } = useAuth()

    return (
        <ContainerForm>
            <FormLogo>
                <Logo />
            </FormLogo>

            <FormBox>
                <FormLoginGroup>
                    <FormInputControl placeholder="Usuário" onChange={e => setNickname(e.target.value)} />
                </FormLoginGroup>

                <FormLoginGroup >
                    <FormInputControl placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} />
                </FormLoginGroup>

                <FormLoginGroup>
                    <FormButtonSubmit onClick={() => sigIn(nickname, password)}>Entrar</FormButtonSubmit>
                </FormLoginGroup>
            </FormBox>
        </ContainerForm>
    );
}

export default FormLoginFragment;