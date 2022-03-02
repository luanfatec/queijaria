import React from "react";


import SideBar from '../../components/panel/sidebar';
import Content from "../../components/panel/content";
import { Container } from "./css/layout";
import MiniDrawer from "../../components/panel/drower";
const PanelLayout: React.FC = function ({ children }) {

    return (
        <Container>
            <MiniDrawer>
                {children}
            </MiniDrawer>
        </Container>
    );
}

export default PanelLayout;