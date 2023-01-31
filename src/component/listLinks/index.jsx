import React, { useContext, useState } from "react";
import { Container, ItenList, Link, List, Span } from "./style";
import { RenderContext } from "../../contexts/render";
import { useEffect } from "react";
import axios from "axios";
import { BaseURL } from "../../axios/config";
function ListLinks(){

    const [data, setData] = useState()
    const [dataLinks, setDataLinks] = useState()

    const {links} = useContext(RenderContext);
    const {setLinks} = useContext(RenderContext);

    const Alert = () => {
        alert('Calma ai kk jaja boto link descente')
    }

    useEffect(() => {

        axios.get(BaseURL+'/user/63d68d2c22fe5c179603d765')
        .then((response) => {
            setData(response.data.data);
            setLinks(response.data.data.arrayLinks);
        }).catch(error => {
            console.error(error)
        })

        
    },[])

    return(
        <Container>
            <List>
                {links.map(item => item.id &&(
                        <Link 
                        key={item.id} 
                        href={item.link}
                        onClick={Alert}>
                            <ItenList>
                                <Span>
                                    {item.nameTitle}
                                </Span>
                            </ItenList>
                        </Link>
                        )
                    )
                }
                
            </List>
        </Container>
    )
};

export default ListLinks;