import styled from 'styled-components';

export const Container = styled.div`
padding: 20px;
`;

export const TitleWindow = styled.div`
margin-bottom: 15px;
`;

export const WindowContent = styled.div`
> div.content-text-password{
    color: black;
    margin-bottom: 20px;

    > span {
        color: #333333;
        font-weight: 900;
        background-color: rgba(246,237,186,.6);
        border-radius: 10px;
        padding: 10px 20px;
    }   
}

> div.info-important {
    > small {
        color: #000aff99;
        padding: 10px;
    }
}
`;

