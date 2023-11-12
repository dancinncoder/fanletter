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

  // 첫화면에 paul 버튼 활성화 세팅
  useEffect(()=> {
      setPaulLetterShown(true);
      setElioLetterShown(false);
      setGatsbyLetterShown(false);
      setLeeLetterShown(false);
    }, []);

  const buttonByNameClickHandler = (item) => {
    switch (item.name) {
      case 'Paul':
        setPaulLetterShown(true);
        setElioLetterShown(false);
        setGatsbyLetterShown(false);
        setLeeLetterShown(false);
        break;
      case 'Elio':
        setElioLetterShown(true);
        setPaulLetterShown(false);
        setGatsbyLetterShown(false);
        setLeeLetterShown(false);
        break;
      case 'Gatsby':
        setGatsbyLetterShown(true);
        setElioLetterShown(false);
        setPaulLetterShown(false);
        setLeeLetterShown(false);
        break;
      case 'Lee':
        setLeeLetterShown(true);
        setGatsbyLetterShown(false);
        setElioLetterShown(false);
        setPaulLetterShown(false);
        break;
      default:
        break;
    }
  }


  return (
    <ButtonBox>
      {buttonText.map((item)=>{
        return(
          <ButtonI key={item.id} onClick={()=> buttonByNameClickHandler(item)}>{item.name}</ButtonI>
        );
      })}
    </ButtonBox>
  )
}

export default Button