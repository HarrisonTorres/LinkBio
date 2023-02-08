import styled from 'styled-components';

export const Container = styled.div`
    padding: 24px;
    width:100%;
    display:flex;
    flex-direction:column;
    z-index:888;

`;

export const List = styled.ul`
    list-style: none;
    display:flex;
    flex-direction:column;
    justify-content:center;
    z-index:988;
    
`;

export const ItenList = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;


    width: 100%;
    height: 56px;

    background-color: ${props => props.theme.ColorGLoss};
    border: 0px solid rgba(0, 0, 0, 0.5);
    border-color: ${props => props.theme.Color};

    backdrop-filter: blur(4px);
    border-radius: 32px;
    
    z-index:988;

    :hover{
        border-width: 1px;
        border-radius: 12px;
        
    }
    :active{
        border-width: 1px;
        
    }
`;

export const Link = styled.a`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;    
    z-index:988;

    margin-top: 8px;
    margin-bottom:8px;
    :hover{
        font-size: 20px;
    }
`;  

export const Span = styled.span`
    z-index: 999;
`