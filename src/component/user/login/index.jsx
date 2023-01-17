import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import ButtonForm from '../../buttonForm';
import InputForm from '../../InputForm';

import { Container } from './style';
    

function LoginModal({modalSignUp}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[signUpModal, setSignUpModal] = useState(false)


  function handleButton(){
    //função para verificar se está preenchendo corretamente
    if (email ==='', password===''){
        alert("Preencha todos os campos")
    }else{
      
    }
  }


  return (
    <Container>
        <h3><AiOutlineUser size={50}/></h3>
        <InputForm name={'email'} placeholder="Email" type={'text'} value={email} onChange={(event) => setEmail(event.target.value)}/>
        <InputForm name={'password'} placeholder="Senha" type={'password'} value={password} onChange={(event) => setPassword(event.target.value)}/>
        <ButtonForm title='Entrar' onClick={handleButton} />
        <a href='#' onClick={modalSignUp}>Não tem uma conta ainda?<span> Clique para se cadastrar</span></a>
        
    </Container>
);
}

export default LoginModal;
