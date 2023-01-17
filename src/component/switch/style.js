import styled from 'styled-components';

export const Container = styled.div`
    width: 48px;
    height: 24px;
    z-index: 998;
`;
export const Bloco =styled.button`
    display:flex;
    
    justify-content: space-between;
    text-decoration: none;

    width: 100%;
    height: 100%;

    background-color: ${props => props.theme.ColorGLoss};
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-color: ${props => props.theme.Color};
    border-radius: 999px;
    backdrop-filter: blur(4px);
    :hover{
        border: 1px solid rgba(0, 0, 0, 0.8);
        border-color: ${props => props.theme.Color};
    }
    
`;

export const SvgSun = styled.div`
    display: ${props => props.theme.DisplayIconLight};
    justify-content: center;
    align-items: center;

    width: 32px;    
    height: 32px;
    background-color:#ccc;
    border-radius: 999px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    position: fixed;
    right: -3px;
    top: -5px;
`;

export const SvgMoon = styled.div`
    display: ${props => props.theme.DisplayIconDark};
    justify-content: center;
    align-items: center;

    width: 32px;    
    height: 32px;
    background-color:#ccc;
    border-radius: 999px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    position: fixed;
    left: -3px;
    top: -5px;
`;