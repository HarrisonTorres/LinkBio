import React, { useContext, useState } from 'react';
import axios from 'axios';

import {RenderContext} from '../contexts/render';
//components
import Profile from './profile';
import RedeSociais from './redeSociais';

//style
import Links from './links';
import { AiOutlineClose,  } from "react-icons/ai";
import { ButtonClose, Container, ButtonSave } from './style';
import { BaseURL } from '../axios/config';
import { useParams } from 'react-router-dom';
import AuthContext from '../contexts/auth';


function EditComponentUser(props) {

  const idUserPage = useContext(AuthContext);
  const {links} = useContext(RenderContext)
  
  const setEdit = props.setEdit;

  const [close, setClose] = useState(false);

  //Pega o :id da url
  const [idUser, setIdUser] = useState(useParams);
  const idUserConvert = (idUser.idPost) //Desestruturando o dado pego pelo user params
  const id = idUserConvert; // recebe o valor da url

  const handleButtonClose = ()=>{
    setClose(true);
    setEdit(false);
  }
  
  const handleButtonSave = () => {//Salvar Atualização dos links no banco de dados
    console.log(id)
    const arrayLinks = links
    console.log(id)
    axios.put(BaseURL+'/user/update', {id, arrayLinks})
    .then(function(response){
      console.log("Atualizado Com Sucesso")
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
    
  }

  return (
  <>
      {!close && <>
        <Container>
          <ButtonClose><AiOutlineClose size={15} onClick={handleButtonClose}/></ButtonClose>
          <Profile/>
          <Links/>
          <RedeSociais/>
          <ButtonSave title='Salvar' onClick={(e) => {handleButtonSave()}}><span>Salvar</span></ButtonSave>
      </Container>
      </>}
  </>
    )
}

export default EditComponentUser;