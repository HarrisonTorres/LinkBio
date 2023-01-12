import styled from "styled-components"

export const Text=styled.h5`
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: ${props => props.theme.h5};
        z-index: 999;
        a{
            text-decoration:none;
        }
`