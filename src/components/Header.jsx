import React from 'react'
import {styled} from "styled-components";
import {useState} from 'react';
import uuid from 'react-uuid';

const HeaderArea = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 1px solid black;
`;

// const headerInput = {userName, setUserName, message, setMessage, writedTo, setWritedTo, createAt, setCreateAt, time, setTime, character, setCharacter };

function Header({letters, setLetters}) {

  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [writedTo, setWritedTo] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [time, setTime] = useState("");
  const [character, setCharacter] = useState("");
  const [chosenOption,setChosenOption] = useState("Paul");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  }

  const messageTypeHandler = (event) => {
    setMessage(event.target.value);
  }

  const chosenCharacter = (event) => {
// 옵션에 값을 뽑아와서 username과 messge 데이터랑 합하기
// addHandler 에 합하기
  }

  const chosenHandler = (event) => {
    setChosenOption(event.target.value);
    console.log("여기",event.target.value);
  }

  const addHandler = (event) => {
    event.preventDefault();
    const newLetter = {id: uuid(), userName, createdAt, time, message, writedTo: chosenCharacter, character
    }
    setLetters([...letters, newLetter]);
  }
  

  return (
    <HeaderArea>
      <h1>Letters To Your Character</h1>
      <p>Send a letter to one of characters that Timothée Chalamet's played in roles!</p>
      <form onSubmit={addHandler}>
        To...
        <select>
          <option value={"Paul"} onClick={chosenHandler}>Paul</option>
          <option>Elio</option>
          <option>Gatsby</option>
          <option>Lee</option>
        </select>
        username: <input type="text" value={userName} onChange={userNameHandler}/>
        message: <input type="text" value={message} onChange={messageTypeHandler}/>
        <button type="submit">Send</button>
      </form>
    </HeaderArea>
  )
}

export default Header