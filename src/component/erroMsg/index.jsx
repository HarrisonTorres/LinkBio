import React from 'react';

import { Container } from './style';

function ErroMsg({msg}) {
  return (
    <Container>
        <p>{msg}</p>
    </Container>

    )
}

export default ErroMsg;