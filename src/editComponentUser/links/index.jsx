import React, { useState, useContext } from 'react';
import { useEffect } from 'react';

//inports components
import InputForm from '../../component/InputForm'

//imports contexts
import { RenderContext } from '../../contexts/render';

//style
import { Bloco, BlocoButton, Container, Preview } from './style';

///
function Links() {

  const [title, setTitle] = useState('');
  const [linkHref, setLinkHref] = useState('');
  const {links, setLinks} = useContext(RenderContext);
  let variavel = []
  
   

  let endArray = links.slice(-1)
  let endNumberArray = (parseInt(endArray.map(i => i.id)))

  const [count, setCount] = useState();
  console.log(endArray)
  console.log(endNumberArray)

  useEffect((()=>{
    console.log(endNumberArray)
    if(!endNumberArray){
      setCount(1);
      //quando o id não tiver atributo o contador inicia com a numero 1
    }else{
      setCount(endNumberArray + 1)
      //mas se o id já tiver atributo o contator passa a receber o atributo somando mais 1
    }

  }),[])
  
  

  function handleAdd(){
    //Adicinando links ao json
    
    setCount(count+1) //essa apenas inicia a variavel quando ela começa com o valor 1, quando o id está sem atributo

    variavel = [
      {
        id: count,
        nameTitle: title,
        link: linkHref,
      }
    ];

    setLinks(links.concat(variavel))//contatena o json anterior com os novos dados que foi adicionado pelo usuario.
    

  }
  function handleDelete(e){
    const id = e.target.id
  
    let encontrar = links.filter(item => item.id != id) //filtra e salva todos os dados diferente do declarado na condicional, deixando-o de fora da list. Removendo

    setLinks(encontrar)
  }

  return (
    <Container>
      <Bloco>
        {links.map(item => <Preview>
            <div>
              <h3>" {item.id} "</h3>
              <h3>{item.nameTitle}</h3>
            </div>
              <button id={item.id} title='deleteForList' onClick={(e) => handleDelete(e)}>Excluir</button>
          </Preview>)}
        <div className='RangeInput'>
          <InputForm 
            placeholder={'Titulo para o botão'}
            value={title}
            onChange={(e)=>{setTitle( e.target.value)}}
          />
        </div>
        <div className='RangeInput'>
          <InputForm 
            placeholder={'Link (http://wwww.exemplo.com/ex)'}
            value={linkHref}
            onChange={(e)=>{setLinkHref(e.target.value)}}
          />
        </div>
        
      </Bloco>
      <BlocoButton>
        <button title='ADD' onClick={handleAdd}>Add</button>
      </BlocoButton>
    </Container>
  )
}

export default Links;