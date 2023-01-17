import React from 'react';


import { Container, Input } from './style';

function InputForm({name, placeholder, type, value, onChange,test}) {
  return (
        <Container>
            <Input 
                name={name}
                placeholder= {placeholder}
                type = {type}  
                onChange={onChange}
            />
        </Container>
    );
}

export default InputForm;