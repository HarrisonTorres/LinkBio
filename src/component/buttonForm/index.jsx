import React from 'react';


import { Container, Button } from './style';

function ButtonForm({title, onClick}) {
  return (
    <Container>
        <Button onClick={onClick}>{title}</Button>
    </Container>
  );
}

export default ButtonForm;