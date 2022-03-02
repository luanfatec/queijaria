import styled from 'styled-components'

import LogoImg from './../../../assets/login/logo-login-4.png';

export const ContainerLayout = styled.div`
    /* background-color: rgba(254, 253, 239, 0.6); */    
`;

export const Container = styled.div`
`;


export const HeaderForm = styled.div`
height: 18px;
color: white;
background-color: rgb(85 85 83 / .75);
padding: 10px;

border-top-left-radius: 18px;
border-top-right-radius: 18px;
`;

export const ContainerForm = styled.div`
z-index: 100;
color: #ffffff;
text-align: left;
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 14px;
letter-spacing: 0px;
line-height: 1.4;
border-color: #333333;
border-bottom-width: 0px;
border-top-width: 0px;
border-left-width: 0px;
border-right-width: 0px;
padding: 10px;
box-shadow: 0px 0px 13px 5px rgba(0, 0, 0, 0.11);
background-color: rgba(255, 188, 0, 0.61);
width: 340px;
height: 390px;
`;



export const FormLogo = styled.div`
justify-content: center;
display: flex;
flex-direction: row;
`;

export const Logo = styled.div`
border-bottom-color: #333333;
border-top-color: #333333;
border-left-color: #333333;
border-right-color: #333333;
border-bottom-left-radius: 0px;
border-top-left-radius: 0px;
border-bottom-right-radius: 0px;
border-top-right-radius: 0px;
border-bottom-width: 0px;
border-top-width: 0px;
border-left-width: 0px;
border-right-width: 0px;
background-image: url(${LogoImg});
background-size: 100%;
background-position: 0px 0px;
background-repeat: no-repeat;
width: 270px;
height: 200px;
`;

export const FormBox = styled.div`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const FormLoginGroup = styled.div`
justify-content: center;
display: flex;
flex-direction: row;
:nth-child(2) {
    margin-top: 10px;
}
`;


export const FormInputControl = styled.input`
width: 80%;
color: rgba(255, 255, 255, 0.7);
text-align: center;
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 18px;
border-color: #333333;
border-radius: 5px;
border-width: 1px;
padding: 5px;
background-color: rgba(101, 51, 51, 0.32);
:focus {
}

:invalid {
    border-color: #cc0000;
}
::placeholder {
    color: rgba(255, 255, 255, 0.7);
}
`;

export const FormButtonSubmit = styled.button`
margin-top: 25px;
width: 80%;
color: #ffffff;
text-align: center;
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 14px;
letter-spacing: 0px;
line-height: 1;
border-color: #333333;
border-radius: 10px;
border-width: 1px;
padding: 10px;
background-color: #555553;
:hover {
    cursor: pointer;
}
`;


export const FooterForm = styled.div`
height: 16px;
color: white;
background-color: rgb(85 85 83 / .75);
`;