 import styled from 'styled-components';

 export const Container = styled.div`
    z-index: 998;

 `;

 export const ListIconsSocial = styled.ul`
    display:flex;
    flex-direction:row;

    a{
        text-decoration: none;
        color: #000;
        margin-right:8px;
        margin-left:8px;
    }
    
`

export const ItemIcons = styled.li`
    width: 40px;
    height:40px;

    
    display:flex;
    justify-content:center;
    align-items:center;

    .icon{
        color: ${props => props.theme.Color};
    }
`
export const Null = styled.div`
    display: flex;
    background-color: black;
    width: 0px;
    height: 00px;
`