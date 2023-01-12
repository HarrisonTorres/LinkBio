import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    gap: 1rem;
    z-index: 999;
`;
export const Moldura = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;

    width: 112px;
    height: 112px;
    border-radius: 60px;
    background-color: ${props => props.theme.Color};
`
export const Img = styled.div`
    width: 104px;
    height: 104px;
    border-radius: 999px;
    background-color:#ccc;
`

export const User = styled.h2`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;

