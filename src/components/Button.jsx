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
`;
// background-color: ${selectedCharacterId === buttonText.id ? 'black' : 'white'};
// background-color: ${setPaulButtonActivated ? 'black' : 'white'};
// color: ${props => props.ButtonActivated ? 'white' : 'black'};

function Button({setPaulLetterShown,setElioLetterShown,  setGatsbyLetterShown, setLeeLetterShown})
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

  // 첫화면에 paul 버튼 활성화 세팅
  useEffect(()=> {
      // setPaulButtonActivated(true);
      // setElioButtonActivated(false);
      // setGatsbyButtonActivated(false);
      // setLeeButtonActivated(false);

      setPaulLetterShown(true);
      setElioLetterShown(false);
      setGatsbyLetterShown(false);
      setLeeLetterShown(false);
    }, []);

  const buttonByNameClickHandler = (item) => {
    SetSelectedCharacterId(item.id);
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
          <ButtonI key={item.id} onClick={()=> buttonByNameClickHandler(item) } style={{
            backgroundColor: selectedCharacterId === item.id ? "black" : "white",
            color: selectedCharacterId === item.id ? "white" : "black",
          }}>{item.name}</ButtonI>
        );
      })}
    </ButtonBox>
  )
}

export default Button