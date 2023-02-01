import React, { useState } from 'react'
import axios from 'axios';

import { BaseURL } from '../../../axios/config';

import ButtonForm from '../../buttonForm';
import InputForm from '../../InputForm';

import { Container, Form, RangeInput } from './style';
import { AiOutlineUser } from "react-icons/ai";
import ErroMsg from '../../erroMsg';



function CadastroModal ({modalLogin}){

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    const [img,ig,list,idLink,title,link,social,idIconSocial,href] = '';

    const [msgErro, setMsgErro] = useState(false)//define se a messagem de erro deve aparecer ou não
    const [msg, setMsg] = useState('') //Aqui fica amargenado a mensagem que deve ser exibida de forma dinamica para os erros expecificamente
    const [disableButton, setDisableButton] = useState(false)

    function handleButton(){
        

        
    }

    function submitForm(e){
        setDisableButton(true)
        //função para verificar se está preenchendo corretamente
        if (username == '', email =='', password =='', confirmPass ==''){
            setMsgErro(true)
            setMsg("Digite todos os campos obrigatorios")

            setDisableButton(false)
            
        }else{
            if (password != confirmPass){
                setMsgErro(true)
                setMsg("Senhos não estão iguais")
                setDisableButton(false)
                
            }
        }

        e.preventDefault()

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
            setMsgErro(false)
            console.log(response)
            modalLogin();
            alert('Use seu novo Email e Senha para entrar')
        }).catch((error)=>{

            setMsgErro(true)
            setMsg("'Não foi possivel realizar o cadastro. Email já existe'")

            setDisableButton(false)
            console.error(error)
        })
    }


    return(
        <Container>
                <h3><AiOutlineUser size={50}/></h3>
                <Form >
                    <RangeInput><InputForm  name={'username'} placeholder="Username" type={'text'} value={username} onChange={(event) => setUsername(event.target.value)}/></RangeInput>

                    <RangeInput><InputForm  name={'email'} placeholder="Email" type={'text'} value={email} onChange={(event) => setEmail(event.target.value)}/></RangeInput>

                    <RangeInput><InputForm  name={'password'} placeholder="Senha" type={'password'} value={password} onChange={(event) => setPassword(event.target.value)}/></RangeInput>

                    <RangeInput><InputForm  name={'confirmPassword'} placeholder="Confirmar Senha" type={'password'} value={confirmPass} onChange={(event) => setConfirmPass(event.target.value)}/></RangeInput>

                    {msgErro && <ErroMsg msg={msg} />}

                    <ButtonForm disabled={disableButton} type='submit' title='Cadastrar' onClick={submitForm}/>
                </Form>
                <a href='#' onClick={modalLogin}>Já tenho uma conta. <span>Entrar</span></a>
        </Container>
    )
};

export default CadastroModal;