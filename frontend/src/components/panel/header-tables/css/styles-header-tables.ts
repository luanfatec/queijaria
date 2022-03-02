import styled from 'styled-components';

export const Container = styled.div`
background: #fff;
height: 55px;
box-shadow: 0px 0px 5px rgba(0,0,0,.5);
padding: 10px;
margin-top: -2%;
margin-bottom: 2%;

display: grid;
grid-template-columns: 200px auto;
grid-template-rows: auto auto;
grid-template-areas: "titleHeaderTables contentButtonsActions";

border-radius: 10px;
`;

export const TitleHeaderTables = styled.div`
grid-area: titleHeaderTables;
`;
export const ContentButtonsActions = styled.div`
grid-area: contentButtonsActions;
display: flex;
justify-content: right;
`;