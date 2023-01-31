import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    width: 100%;
    height: 100%;
    gap: 5px;
    button{
        width: 25px;
        height: 25px;
    }
`;
export const Bloco = styled.div`
    background-color: rgba(225,225,225, 0.4);
    padding: 10px;
    border-radius: 8px;

    width: 100%;
    .RangeInput{
        margin-bottom: 4px;
    }
`
export const BlocoButton = styled.div`
    
`
export const Preview = styled.div`
    width:100%;
    
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    div{
        display:flex;
        flex-direction:row;
    }
`

