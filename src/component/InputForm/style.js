import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100%;
`;

export const Input = styled.input`
    padding: 12px;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.InputColor};
    border-color: ${props => props.theme.InputColor};
    border: 1px solid #32C0FD;
    border-radius: 8px 8px;
    box-shadow: 0 0 0 0;
    outline: 0px;
    color: #000;
    :focus{
      border: 1px solid #FF00B8 ;
      box-shadow: 0 0 0 0;
      outline: 0px;
    }
    
`