import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BaseURL } from '../../../axios/config';
import ButtonForm from '../../buttonForm';
import InputForm from '../../InputForm';


import {AuthContext} from '../../../contexts/auth'


import { Container, Form, RangeInput } from './style';
    
 

function LoginModal({modalSignUp}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {userOn, readerButtonEdit, handleClose} = useContext(AuthContext)
  

  function submitForm(e){
    let token = ''

    if (email ==='', password===''){
      alert("Preencha todos os campos")
    }else{
    
    }
    e.preventDefault()

    axios.post(BaseURL+'/auth/login', {
      email,
      password
    }).then((response)=>{
      console.log(response.data.msg)
      token = response.data.token
      console.log(token)
      console.log(response)

      if(response.status === 200){
        readerButtonEdit();    
        handleClose()    
      }
      
    }).then(()=>{
      
      localStorage.setItem('token', token)

      console.log(userOn)

    }).catch((error)=>{
      console.error(error);
    })
    
  }


  return (
    <Container>
        <h3><AiOutlineUser size={50}/></h3>
        <Form onSubmit={submitForm}>
          <RangeInput><InputForm name={'email'} placeholder="Email" type={'text'} value={email} onChange={(event) => setEmail(event.target.value)}/></RangeInput>
          <RangeInput><InputForm name={'password'} placeholder="Senha" type={'password'} value={password} onChange={(event) => setPassword(event.target.value)}/></RangeInput>
          <ButtonForm type='submit' title='Entrar'/>
        </Form>
        <a href='#' onClick={modalSignUp}>Não tem uma conta ainda?<span> Clique para se cadastrar</span></a>

    </Container>
);
}

export default LoginModal;
