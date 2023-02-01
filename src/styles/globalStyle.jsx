import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-color: ${(props) => props.theme.borderColor}
    }
    body{
        background-color: ${(props)=> props.theme.backgroundColor};
        border-color: ${(props) => props.theme.borderColor};
        transition: 500ms linear;
    }
    a, ul{
        text-decoration: none;
        list-style: none;
        color: ${(props) => props.theme.Color};
        border-color: ${(props) => props.theme.Color};
        transition: 500ms linear;
        
    }
    a{
        cursor: pointer;
    }
    span{
        color: ${(props) => props.theme.fontColor};
    }
    h1, h2, h3 ,h4 ,h5 ,h6, input, p{
        color: ${props => props.theme.Color};
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        text-decoration: none;
    }

    button {
    cursor: pointer;
    }
`