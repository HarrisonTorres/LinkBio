import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BaseURL } from '../../../axios/config';
import ButtonForm from '../../buttonForm';
import InputForm from '../../InputForm';


import {AuthContext} from '../../../contexts/auth'


import { Container, Form, RangeInput } from './style';
import ErroMsg from '../../erroMsg';

function LoginModal({modalSignUp}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {idUserPage,setIdUserPage, userOn, readerButtonEdit, handleClose, token, setToken} = useContext(AuthContext)
  
  const [disabledButton, setDisabledButton] = useState(false); //Desabilita o butão de entrar
  const [msgErro, setMsgErro] = useState(false)


  function submitForm(e){//envia os dados do Formulario
    setDisabledButton(true)

    setToken('')

    if (email === '', password === ''){//confirindo se os inputs estão recebendo textos
      setDisabledButton(false)
      setMsgErro(true)
      
    }
    e.preventDefault()

    axios.post(BaseURL+'/auth/login', {//comunicação com a API
      email,
      password
    }).then((response)=>{
      console.log(response.data.msg)
      console.log(response.data.id)
      setToken(response.data.token)
      
      console.log(response)

      if(response.status === 200){
        readerButtonEdit();    
        handleClose();
        setIdUserPage(response.data.id)
      }
      console.log(idUserPage)
    }).then(()=>{
      console.log(userOn)
    }).catch((error)=>{
      setDisabledButton(false)
      setMsgErro(true)
      console.error(error);
    })
    
  }


  return (
    <Container>
        <h3><AiOutlineUser size={50}/></h3>
        <Form onSubmit={submitForm}>
          <RangeInput>
            <InputForm 
              name={'email'} 
              placeholder="Email" 
              type={'text'} 
              value={email} 
              onChange={
                  (event)=>{
                    setEmail(event.target.value)
                  }
                }/>
          </RangeInput>
          <RangeInput>
            <InputForm 
              name={'password'} 
              placeholder="Senha" 
              type={'password'} 
              value={password} 
              onChange={
                  (event) => setPassword(event.target.value)
                }/>
          </RangeInput>
          {
            msgErro && <ErroMsg msg='Email ou Senha incorreta' />
          }
          <ButtonForm 
            type='submit' 
            title='Entrar' 
            disabled={disabledButton}/>
        </Form>
        <a 
          href='#' 
          onClick={modalSignUp}
          >
            Não tem uma conta ainda?<span> Clique para se cadastrar</span>
        </a>

    </Container>
);
}

export default LoginModal;
