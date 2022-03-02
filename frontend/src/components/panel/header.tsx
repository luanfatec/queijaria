import React from 'react';

import {
    Container
} from './css/header';

interface IConfigProps {
    titlePage: string;
    children?: React.ReactNode
}

function HeaderPage({ children, titlePage }: IConfigProps) {
    return (
        <>
            <Container>
                {titlePage}
            </Container>
        </>
    );
}


export default HeaderPage