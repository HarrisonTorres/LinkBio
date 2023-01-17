import React, { useState } from 'react';
import LoginModal from './login/index';
import CadastroModal from './cadastro';


function ModalUser() {
    
    const [isLogin, setIsLogin] = useState(true)

    function ModalSignUp(){
        setIsLogin(false)
    }
    function ModalLogin(){
        setIsLogin(true);
    }
    return (
        <div>
            {isLogin ? <LoginModal modalSignUp={ModalSignUp}/> : <CadastroModal modalLogin={ModalLogin}/>}
            
        </div>
    );
}

export default ModalUser;