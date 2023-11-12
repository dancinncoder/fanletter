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

  const [characterImage, setCharacterImage] = useState(
    [
      {name: "Paul", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb2mdiC%2Fbtsz6vZ0AJC%2FMCCSeykgsK4zkmNrF4202k%2Fimg.png" }
      ,
      {name: "Elio", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbn60w6%2Fbtsz90x9gn8%2FVoGmwVTKKQjF6G8HXrUmBk%2Fimg.png" }
      ,
      {name: "Gatsby", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fq7XpO%2FbtsAbaGGZzW%2FEib9Jr6RbEFCVFrKG8cLxK%2Fimg.png" }
      ,
      {name: "Lee", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeRM5KX%2Fbtsz8sCdh3p%2FgI45Ou0kAMqrkAfDKtt9Z1%2Fimg.png" }
    ]
  );


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