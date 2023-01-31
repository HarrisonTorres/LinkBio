import React, { useState } from "react";
import { Container, User, Moldura, Img } from "./style";
import foto from '../../assets/FotoDoRosto3x4.jpg'
import { useContext } from "react";
import {RenderContext} from '../../contexts/render'

function Profile(){
    
    const {profile} = useContext(RenderContext);


    return(
        <Container>
            <Moldura>
                <Img><img src={foto} alt="Foto de perfil"  width={'100%'} height={'100%'}/></Img>
            </Moldura>
            {profile.map(item => (<h2>{item.userName}</h2>))}
        </Container>
    )
}

export default Profile;