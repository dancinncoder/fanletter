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
  background-color: white;
`;

// background-color: ${setPaulButtonActivated ? 'black' : 'white'};
// color: ${props => props.ButtonActivated ? 'white' : 'black'};

function Button({setPaulLetterShown,setElioLetterShown,  setGatsbyLetterShown, setLeeLetterShown})
{

  // const [paulButtonActivated, setPaulButtonActivated] = useState(true);
  // const [elioButtonActivated, setElioButtonActivated] = useState(false);
  // const [gatsbyButtonActivated, setGatsbyButtonActivated] = useState(false);
  // const [leeButtonActivated, setLeeButtonActivated] = useState(false);

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
    switch (item.name) {
      case 'Paul':
        // setPaulButtonActivated(true);
        // setElioButtonActivated(false);
        // setGatsbyButtonActivated(false);
        // setLeeButtonActivated(false);

        setPaulLetterShown(true);
        setElioLetterShown(false);
        setGatsbyLetterShown(false);
        setLeeLetterShown(false);
        break;
      case 'Elio':
        // setPaulButtonActivated(false);
        // setElioButtonActivated(true);
        // setGatsbyButtonActivated(false);
        // setLeeButtonActivated(false);

        setElioLetterShown(true);
        setPaulLetterShown(false);
        setGatsbyLetterShown(false);
        setLeeLetterShown(false);
        break;
      case 'Gatsby':
        // setPaulButtonActivated(false);
        // setElioButtonActivated(false);
        // setGatsbyButtonActivated(true);
        // setLeeButtonActivated(false);

        setGatsbyLetterShown(true);
        setElioLetterShown(false);
        setPaulLetterShown(false);
        setLeeLetterShown(false);
        break;
      case 'Lee':
        // setPaulButtonActivated(false);
        // setElioButtonActivated(false);
        // setGatsbyButtonActivated(false);
        // setLeeButtonActivated(true);

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