import React from "react";
import FooterFormLogin from "./footer";
import FormLoginFragment from "./form";
import HeaderFormLogin from "./header";
import {ContainerLayout} from './css/styled';



const LayoutFormLogin: React.FC = function () {
    return (
        <ContainerLayout>
            {/* Component Header Form Login... */}
            <HeaderFormLogin />
            {/* Component de Formulario com inputs... */}
            <FormLoginFragment />
            {/* Components Footer Form Login... */}
            <FooterFormLogin />
        </ContainerLayout>
    );
}

export default LayoutFormLogin;