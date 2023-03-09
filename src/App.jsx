import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Router,Route } from "react-router-dom";


import BackgroundApp from "./component/background";

//components
import Footer from "./component/footer";
import ListLinks from "./component/listLinks";
import Profile from "./component/profile";
import RedeSociaisList from "./component/redeSocialList";
import Switch from "./component/switch";
import ButtonModalUser from "./component/user/ButtonModalUser";
import AuthProvider from "./contexts/auth";
import RenderProvider, { RenderContext } from "./contexts/render";

//style
import { Bloco } from "./styles/blocoGlobal";
import { Main } from "./styles/global";
import { GlobalStyle } from "./styles/globalStyle";
import { Dark, Light} from "./styles/theme/themeStyle"



function App(){

    const[theme, setTheme] = useState('')
    const themeMode = theme === 'Light' ? Light : Dark;

    const themeToggler = () => {
        theme === 'Light' ? setMode('Dark') : setMode('Light')
    }
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };


    

    useEffect(() => {

        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
        
    }, []);
    


    return(
        <ThemeProvider theme={themeMode}>
        <GlobalStyle/>
        <RenderProvider>
            <AuthProvider>
                <Main>
                    <BackgroundApp/>
                    <ButtonModalUser/>
                    <Bloco>
                        <Profile/>
                        <Switch clickTheme={themeToggler}/>
                        <ListLinks/>
                        <RedeSociaisList/>
                        <Footer/>
                    </Bloco>
                </Main>
            </AuthProvider>
        </RenderProvider>
        </ThemeProvider>
    )
}

export default App