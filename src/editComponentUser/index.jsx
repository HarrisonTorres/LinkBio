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




function EditComponentUser(props) {

  const {links} = useContext(RenderContext)
  const id = "63d68d2c22fe5c179603d765"
  const setEdit = props.setEdit;

  const [close, setClose] = useState(false);

  const handleButtonClose = ()=>{
    setClose(true);
    setEdit(false);
  }
  
  const handleButtonSave = () => {//Salvar Atualização dos links no banco de dados

    const arrayLinks = links
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