import styled from 'styled-components';

export const Container = styled.div`
grid-area: SIDEBAR;
height: 100vh;

color: #ffffff;
text-align: left;
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 14px;
letter-spacing: 0px;
line-height: 1.4;
border-color: #333333;
border-radius: 0;
border-width: 0;
padding: 0px;
background-color: rgba(255, 188, 0, 0.41);

box-shadow: 0px 2px 5px rgba(0,0,0,.5);
z-index: 100;
`;

export const LogoContent = styled.div`
border-color: #333333;
border-radius: 0px;
border-width: 0px;

& .dvr-separator {
    color: red ;
}
`;

export const LogoImg = styled.img`
width: 100%;
`;

export const UsernameLogin = styled.div`
color: #333333;
text-align: left;
font-family: "Lucida Sans Unicode", " Lucida Grande", " sans-serif";
font-size: 14px;
letter-spacing: 0px;
line-height: 1;
margin-left: 5px;
span.icon-logged {
    color: #00A000;
    margin-right: 3px;
}
`;


export const LinkComponent = styled.a`
    text-decoration: none;
    color:  #333333;
`;