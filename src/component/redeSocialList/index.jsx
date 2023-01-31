import React, { useContext, useState } from "react";
import { Container, ItemIcons, ListIconsSocial, Null } from "./style";
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { RenderContext } from "../../contexts/render";
function RedeSociaisList (){

    const {social} = useContext(RenderContext)


    return(
        <Container>
            <ListIconsSocial>
                {social.map(item => (<>
                    {item !== '' && <a href={item.href} key={item.id} >
                        <ItemIcons>
                            {
                                item.icon === '1' ? <AiFillGithub size={24} className="icon"/> //GitHub Icon
                                : item.icon === '2' ? <AiOutlineInstagram size={24} className="icon"/> //Instagram Icon
                                : item.icon === '3'? <AiOutlineLinkedin size={24} className="icon"/> //Linkedin Icon
                                : item.icon === '4' ? <AiFillGithub size={24} className="icon"/> //Whatsapp Icon
                                : item.icon === '5' ?<AiFillGithub size={24} className="icon"/> //Tiktok Icon
                                : <Null/>
                            }
                        </ItemIcons>
                    </a>
                    }</>
                ))
                }                
                
            </ListIconsSocial>
        </Container>
    )
}

export default RedeSociaisList;