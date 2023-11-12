import { styled } from 'styled-components';
import React from 'react';
import {useState} from 'react';

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ButtonI = styled.button`
  width: 100px;
  height: 50px;
  background-color: white;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid black;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;


function Button({paulLetterShown, setPaulLetterShown, elioLetterShown, setElioLetterShown, gatsbyLetterShown, setGatsbyLetterShown, leeLetterShown, setLeeLetterShown, letters })
{

  const [buttonText, setButtonText] = useState(
    [
      {id:1, name: "Paul"},
      {id:2, name: "Elio"},
      {id:3, name: "Gatsby"},
      {id:4, name: "Lee"},
    ]
  );

  return (
    <ButtonBox>
      {buttonText.map((item)=>{
        return(
          <ButtonI key={item.id} onClick={()=>{
            if (item.name === letters.character){
              const setLetterShown = `set${letters.character}LetterShown`;
              this[setLetterShown](true);
            }
          }}>{item.name}</ButtonI>
        );
      })}
    </ButtonBox>
  )
}

export default Button