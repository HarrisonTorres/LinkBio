import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
    gap: 8px;

    position: fixed;
    
    top: 10%;
    left: calc(50% - 180px);

    max-width: 360px;
    width: 100%;
    height: 500px;
    background-color: ${props => props.theme.backgroundColorModal};
    backdrop-filter: blur(10px);
    border-radius: 20px;

    z-index: 9999;

    box-shadow: ${props => props.theme.BoxShadow};
    padding: 4px 4px ;
    span{
        color: #555;
        :hover{
            color: #fff;
        }
    }
    a{
        font-size: 12px;
    }
`;

export const ButtonClose = styled.button`
    position: fixed;
    width: 24px;
    height: 24px;
    top: 8px;
    left: 8px;
    border-radius: 12px;
    border: none;

    display: flex;
    align-items:center;
    justify-content:center;
    z-index: 999;

    :hover{
        color: #555;
        cursor:pointer;
    }
    :active{
        background-color: ${props => props.theme.backgroundColorModal};
        color: ${props => props.theme.Color};
    }

`

export const ButtonSave = styled.button`
    width: 75px;
    height: 30px;
    background-color: #ccc;
`