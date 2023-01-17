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

    width: 360px;
    height: 500px;
    background-color: ${props => props.theme.backgroundColorModal};
    backdrop-filter: blur(10px);
    border-radius: 20px;

    z-index: 9999;

    box-shadow: 0px 0px 80px 12px rgba(250, 225, 250, 0.2);
    padding: 24px 24px ;
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
