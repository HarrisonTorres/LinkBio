import React, { useState } from 'react'


import ButtonForm from '../../buttonForm';
import InputForm from '../../InputForm';

import { Container, Form } from './style';
import { AiOutlineUser } from "react-icons/ai";

function CadastroModal ({modalLogin}){

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")


    function handleButton(){
        //função para verificar se está preenchendo corretamente
        if (username === '', email ==='', password==='', confirmPass===''){
            alert("erro")
        }else{
            console.log('certo')
            if (password === confirmPass){
                console.log("Senhas iguais")
                console.log(username)
            }else{
                alert('Senhas incorretas')
            }
        }
    }


    return(
        <Container>
                <h3><AiOutlineUser size={50}/></h3>
                <Form>
                    <InputForm name={'username'} placeholder="Username" type={'text'} value={username} onChange={(event) => setUsername(event.target.value)}/>

                    <InputForm name={'email'} placeholder="Email" type={'text'} value={email} onChange={(event) => setEmail(event.target.value)}/>

                    <InputForm name={'password'} placeholder="Senha" type={'password'} value={password} onChange={(event) => setPassword(event.target.value)}/>

                    <InputForm name={'confirmPassword'} placeholder="Confirmar Senha" type={'password'} value={confirmPass} onChange={(event) => setConfirmPass(event.target.value)}/>

                    <ButtonForm title='Cadastrar' onClick={handleButton}/>
                </Form>
                <a href='#' onClick={modalLogin}>Já tenho uma conta. <span>Entrar</span></a>
        </Container>
    )
};

export default CadastroModal;