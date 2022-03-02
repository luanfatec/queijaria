import React from "react";
import { useAuth } from "../../hooks/Login/login";

const PanelHome: React.FC = function () {

    const { logOut } = useAuth();

    return (
        <div>
            <button onClick={() => logOut()}>Sair</button>
        </div>
    );
}

export default PanelHome;