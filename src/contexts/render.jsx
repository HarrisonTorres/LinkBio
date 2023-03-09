import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseURL } from "../axios/config";

export const RenderContext = createContext({});

function RenderProvider({children}){

    //renderiza todas as informaçoes na tela

    const [profile, setProfile] = useState([
        {
            img: 'foto',
            userName: '@devharri.s',
        }])

    const [links, setLinks] = useState([])

    const [social, setSocial] = useState([
        //icon 1 = Github / icon 2 = instagram / icon 3 = linkedin / icon 4 = Youtube / icon 5 = Email
        {
            id: 1,
            icon: '1',
            href: 'https://github.com/HarrisonTorres'
        },
        {
            id: 2,
            icon: '2',
            href: 'https://www.instagram.com/devharri.s'
        },
        {
            id: 3,
            icon: '3',
            href: 'https://www.linkedin.com/in/harrison-s-torres/'
        },
        {
            id: 4,
            icon: '4',
            href: 'https://www.youtube.com/channel/UCkwp7H6u6uaWNDcsfwpZwog'
        },
        {
            id: 5,
            icon: '5',
            href: '#'
        }
    ])


    return(
        <RenderContext.Provider value={{profile, setProfile, links, setLinks, social, setSocial}}>
            {children}
        </RenderContext.Provider>
    )
}

export default RenderProvider;