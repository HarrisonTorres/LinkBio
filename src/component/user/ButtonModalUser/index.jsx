import React, { useContext, useState } from 'react';
import { CloseButton, Container, ModalOpen } from './style';
import { AiOutlineClose, AiOutlineUser } from "react-icons/ai";

import ModalUser from '..';
import ButtonEdit from '../buttonEdit';

import { AuthContext } from '../../../contexts/auth';

function ButtonModalUser({clickModal}) {
    

    const {userOn, isOpen, handleClose, handleOpen} = useContext(AuthContext)

    

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
            {userOn && <>
                    <ButtonEdit/>
                </>
            }
        </Container>
    )
}

export default ButtonModalUser;