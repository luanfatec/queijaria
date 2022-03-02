import React from "react";
import FormLogin from "../../components/login";
import { Container } from "./styled";

const Login: React.FC = function () {
    return (
        <Container>
            <FormLogin/>
        </Container>
    );
}

export default Login;