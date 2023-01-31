import React, { useState } from 'react';
import EditComponentUser from '../../../editComponentUser';
import { Button } from './style';

// import { Container } from './styles';

function ButtonEdit() {

  const [edit, setEdit] = useState(false)

  function handleButton(){
    setEdit(true)
  }
  return (
    <div>
        {!edit &&<Button onClick={handleButton}/>}
        {edit && <><EditComponentUser setEdit={setEdit}/></>}
    </div>
  );
}

export default ButtonEdit;