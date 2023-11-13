import React from 'react'
import {styled} from "styled-components";
import {useState} from 'react';
import uuid from 'react-uuid';
import { useEffect } from 'react';

const HeaderArea = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 1px solid black;
`;

// const headerInput = {userName, setUserName, message, setMessage, wroteTo, setWroteTo, createAt, setCreateAt, time, setTime, character, setCharacter };

function Header({letters, setLetters}) {

  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [wroteTo, setWroteTo] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [character, setCharacter] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState("Paul");
  const [formValue, setFormValue] = useState({
    id: uuid(), userName: userName, createdAt, message: message, wroteTo: selectedCharacter, character: selectedCharacter,
  });
  const userNameHandler = (event) => {
    setUserName(event.target.value);
  }
  const messageTypeHandler = (event) => {
    setMessage(event.target.value);
  }

  // 초기화면 로딩 시 최초 1번, select option 'Paul' 디폴트 값 보내기
   useEffect(()=> {
    setFormValue(selectedCharacter);
    console.log('최초 selected name is :',selectedCharacter);
  },[]);

  // SELECTING OPTION SETTING
  const selectHandler = (event) => {
    // setFormValue(event.target.value); // Elio..
    // console.log('selected character name :', event.target.value); 

    const selectedValue = event.target.value;

    // Update selectedCharacter state
    setSelectedCharacter(selectedValue);

    // Update formValue with the selected character
    setFormValue((prevFormValue)=> (
      {...prevFormValue, wroteTo: selectedValue, character: selectedValue,}
      ))
  }

  // NEW LETTER ADD
  const addHandler = (event) => {
    event.preventDefault();
    const newLetter = {id: uuid(), userName: userName, createdAt, message: message, wroteTo: selectedCharacter, character: selectedCharacter,
    }
    console.log('입력값으로 만들어진 객체',newLetter);
    setLetters([...letters, newLetter]);

    // input box init
    setUserName("");
    setMessage("");
  }



 
  

  return (
    <HeaderArea>
      <h1>Letters To Your Character</h1>
      <p>Send a letter to one of characters that Timothée Chalamet's played in roles!</p>
      <form onSubmit={addHandler}>
        To...
        {/* name은 옵션값의 Key 명이 될 이름이다. */}
        <select name="wroteTo" value={letters.wroteTo}  onChange={selectHandler}>
          <option value="Paul">Paul</option>
          <option value="Elio">Elio</option>
          <option value="Gatsby">Gatsby</option>
          <option value="Lee">Lee</option>
        </select>
        username: <input type="text" value={userName} onChange={userNameHandler}/>
        message: <input type="text" value={message} onChange={messageTypeHandler}/>
        <button type="submit">Send</button>
      </form>
    </HeaderArea>
  )
}

export default Header