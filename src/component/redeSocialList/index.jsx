import React from "react";
import { Container, ItemIcons, ListIconsSocial } from "./style";
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

function RedeSociaisList (){
    return(
        <Container>
            <ListIconsSocial>
                <a href="https://github.com/HarrisonTorres" ><ItemIcons><AiFillGithub size={24} className="icon"/></ItemIcons></a>
                <a href="https://instagram.com/dev_harris.s"><ItemIcons><AiOutlineInstagram size={24} className="icon"/></ItemIcons></a>
                <a href="https://www.linkedin.com/in/harrison-s-torres/"><ItemIcons><AiOutlineLinkedin size={24} className="icon"/></ItemIcons></a>
            </ListIconsSocial>
        </Container>
    )
}

export default RedeSociaisList;