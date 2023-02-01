import React from 'react';


import { Container, Button } from './style';

function ButtonForm({disabled, title, onClick}) {
  return (
    <Container>
        <Button au disabled={disabled} onClick={onClick}>{title}</Button>
    </Container>
  );
}

export default ButtonForm;