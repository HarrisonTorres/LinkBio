import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children}){

    const [userOn, setUserOn] = useState(false)
    const [token, setToken] = useState('');

    function readerButtonEdit(){
        setUserOn(true)
    }

    const [isOpen, setIsOpen] = useState(false)

    function handleOpen () {
        setIsOpen(true)
    }
    
    function handleClose() {
        setIsOpen(false)
    }
    
    const [idUserPage, setIdUserPage] = useState('') //Variavel que recebe o ID do usuario no login e passa esse id para a url.

    return(
        <AuthContext.Provider value={{userOn, isOpen, readerButtonEdit, handleOpen, handleClose, token, setToken, idUserPage, setIdUserPage}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;