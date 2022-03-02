import styled from 'styled-components';

export const WindowConfigUser = styled.div`
height: 65vh;
width: 75vw;
padding: 20px;
`;

export const WindowConfigUserTitle = styled.div`
border-bottom: #ffcd4284 2px solid;
margin-bottom: 10px;
color: #333333;

> h2 {
    margin-left: 10px;
    margin-bottom: 10px;
}

display: flex;
> div {
    position: absolute;
    right: 50px;
}
`;

export const WindowConfigUserContent = styled.div`
padding: 10px;

> div.buttonsActions {
    margin-top: 5%;
    display: flex;
    justify-content: flex-end;
}
`;