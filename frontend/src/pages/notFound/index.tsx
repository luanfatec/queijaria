import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styled';
import BGLogo from './../../assets/login/logo-login-4.png';

const PageNotFound: React.FC = function () {
    return (
        <Container>
            <Content>
                <div className='header'>
                    <img src={BGLogo} />
                </div>
                <h1>Page Not Found</h1>
                <div>
                    <Link to="/">Voltar ao início.</Link>
                </div>
            </Content>
        </Container>
    );
}

export default PageNotFound;