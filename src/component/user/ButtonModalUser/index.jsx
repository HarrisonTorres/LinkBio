import React, { useState } from 'react';
import { CloseButton, Container, ModalOpen } from './style';
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";
import CadastroModal from '../cadastro';
import LoginModal from '../login';
import ModalUser from '..';


function ButtonModalUser({clickModal}) {
    const [isOpen, setIsOpen] = useState(false)

    function handleOpen(){
        setIsOpen(true)
        console.log('true')
    }

    function handleClose(){
        setIsOpen(false)
        console.log('false ')
    }

    return (
        <Container>
            {isOpen ? 
            <CloseButton onClick={handleClose}>
                <AiOutlineClose size={30}/>
            </CloseButton> 
            : 
            <ModalOpen onClick={handleOpen}>
                <AiOutlineUser size={30}/>
            </ModalOpen>}
            
            {isOpen && <>
                    <ModalUser/>
                </>
                }
        </Container>
    )
}

export default ButtonModalUser;