import { styled } from 'styled-components';
import React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ButtonI = styled.button`
  width: 100px;
  height: 50px;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid black;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
  background-color: ${(props) => (props.selectedCharacterId === props.buttonId ? 'black' : 'white')};
  color: ${(props) => (props.selectedCharacterId === props.buttonId ? 'white' : 'black')};
`;

function Button({setLetterShown})
{
  const [selectedCharacterId, SetSelectedCharacterId] = useState(1);

  const [buttonText, setButtonText] = useState(
    [
      {id:1, name: "Paul"},
      {id:2, name: "Elio"},
      {id:3, name: "Gatsby"},
      {id:4, name: "Lee"},
    ]
  );

  const buttonByNameClickHandler = (item) => {
    SetSelectedCharacterId(item.id);
    const allFalse = 
    {
      'Paul' : false,
      'Elio' : false,
      'Gatsby' : false,
      'Lee' : false,
    };
    setLetterShown({ ...allFalse, [item.name] : true});
  }


  return (
    <ButtonBox>
      {buttonText.map((item)=>{
        return(
          <ButtonI key={item.id} onClick={()=> buttonByNameClickHandler(item) } selectedCharacterId={selectedCharacterId} buttonId={item.id}>{item.name}</ButtonI>
        );
      })}
    </ButtonBox>
  )
}

export default Button