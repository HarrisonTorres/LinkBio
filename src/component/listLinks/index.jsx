import React from "react";
import { Container, ItenList, Link, List, Span } from "./style";

function ListLinks(){
    const Alert = () => {
        alert('Calma ai kk jaja boto link descente')
    }

    return(
        <Container>
            <List>
                <Link href='#' onClick={Alert}><ItenList><Span>Inscreva-se Agora</Span></ItenList></Link>
                <Link href="#" onClick={Alert}><ItenList><Span>Inscreva-se Agora</Span></ItenList></Link>
                <Link href="#" onClick={Alert}><ItenList><Span>Inscreva-se Agora</Span></ItenList></Link>
                <Link href="#" onClick={Alert}><ItenList><Span>Inscreva-se Agora</Span></ItenList></Link>
            </List>
        </Container>
    )
};

export default ListLinks;