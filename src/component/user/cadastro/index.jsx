import React, { useState } from 'react'
import axios from 'axios';

import { BaseURL } from '../../../axios/config';

import ButtonForm from '../../buttonForm';
import InputForm from '../../InputForm';

import { Container, Form, RangeInput } from './style';
import { AiOutlineUser } from "react-icons/ai";



function CadastroModal ({modalLogin}){

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    const [img,ig,list,idLink,title,link,social,idIconSocial,href] = '';

    /*function handleButton(){

        //função para verificar se está preenchendo corretamente
        if (username === '', email ==='', password==='', confirmPass===''){
            alert("erro")
        }else{
            if (password === confirmPass){
                console.log("Senhas iguais")
            }else{
                alert('Senhas incorretas')
            }
        }
        console.log(username);
    }*/

    function submitForm(e){
        e.preventDefault()

        console.log('foi')
        const signUp = {
            username,
            email,
            password,
            img,
            ig,
            list,
            idLink,
            title,
            link,
            social,
            idIconSocial,
            href
        }

        console.log(signUp);

        axios.post(BaseURL+'/auth/register', {
            username,
            email,
            password,
            img,
            ig,
            list,
            idLink,
            title,
            link,
            social,
            idIconSocial,
            href
        }).then(function(response){
            console.log(response)
            alert(response.data.msg)
        }).catch((error)=>{
            console.error(error)
        })
    }


    return(
        <Container>
                <h3><AiOutlineUser size={50}/></h3>
                <Form onSubmit={submitForm}>
                    <RangeInput><InputForm  name={'username'} placeholder="Username" type={'text'} value={username} onChange={(event) => setUsername(event.target.value)}/></RangeInput>

                    <RangeInput><InputForm  name={'email'} placeholder="Email" type={'text'} value={email} onChange={(event) => setEmail(event.target.value)}/></RangeInput>

                    <RangeInput><InputForm  name={'password'} placeholder="Senha" type={'password'} value={password} onChange={(event) => setPassword(event.target.value)}/></RangeInput>

                    <RangeInput><InputForm  name={'confirmPassword'} placeholder="Confirmar Senha" type={'password'} value={confirmPass} onChange={(event) => setConfirmPass(event.target.value)}/></RangeInput>

                    <ButtonForm  type='submit' title='Cadastrar' />
                </Form>
                <a href='#' onClick={modalLogin}>Já tenho uma conta. <span>Entrar</span></a>
        </Container>
    )
};

export default CadastroModal;