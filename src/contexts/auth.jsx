import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children}){

    const [userOn, setUserOn] = useState(false)

    function readerButtonEdit(){
        setUserOn(true)
    }

    const [isOpen, setIsOpen] = useState(false)

    function handleOpen () {
        setIsOpen(true)
        console.log('true')
    }
    
    function handleClose() {
        setIsOpen(false)
        console.log('false ')
    }
    

    return(
        <AuthContext.Provider value={{userOn, isOpen, readerButtonEdit, handleOpen, handleClose}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;