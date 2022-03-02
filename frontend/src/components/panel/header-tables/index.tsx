import React from 'react';

import {
    Container, TitleHeaderTables, ContentButtonsActions
} from "./css/styles-header-tables";

interface IConfigHeaderTables {
    children?: React.ReactNode;
    titleHeader: string;
}

function HeaderActionsTables({ children, titleHeader }: IConfigHeaderTables) {
    return (
        <>
            <Container>
                <TitleHeaderTables>
                    <h2>{titleHeader}</h2>
                </TitleHeaderTables>

                <ContentButtonsActions>
                    {children}
                </ContentButtonsActions>
            </Container>
        </>
    );
}

export default HeaderActionsTables;