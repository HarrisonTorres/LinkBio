import React, { createContext, useState } from "react";

export const RenderContext = createContext({});

function RenderProvider({children}){

    //renderiza todas as informaçoes na tela

    const [profile, setProfile] = useState([
        {
            img: 'foto',
            userName: '@devharri.s',
        }])

    const [links, setLinks] = useState([])

    console.log(links)

    const [social, setSocial] = useState([
        {
            id: 1,
            icon: '1',
            href: 'https://github.com/HarrisonTorres'
        },
        {
            id: 2,
            icon: '2',
            href: 'https://github.com/HarrisonTorres'
        },
        {
            id: 3,
            icon: '3',
            href: 'https://github.com/HarrisonTorres'
        }
    ])

    

    return(
        <RenderContext.Provider value={{profile, setProfile, links, setLinks, social, setSocial}}>
            {children}
        </RenderContext.Provider>
    )
}

export default RenderProvider;