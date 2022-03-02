import styled from "styled-components";
import BGLogin from './../../assets/login/quejaria.jpg';

export const Container = styled.div`
background-image: url(${BGLogin});
background-position: center;
background-attachment: fixed;
background-size: cover;

width: 100vw;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

`;