import React from 'react'
import {styled} from "styled-components";
import {useState} from 'react';
import { useEffect } from 'react';
import uuid from 'react-uuid';
import moment from 'moment';


const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const MessageInput = styled.input`
  width: 180px;
`;

const UserNameInput = styled.input`
  width: 110px;
`;

function FormArea({letters, setLetters, createdAt, setCreatedAt, userNameRef}) {

  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [wroteTo, setWroteTo] = useState("");
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

  // SEND THE DEFAULT VALUE OF SELECTION 'PAUL' FOR THE FIRST TIME WHEN LOADING THE INITIAL SCREEN
   useEffect(()=> {
    setFormValue(selectedCharacter);
    console.log('최초 selected name is :',selectedCharacter);
  },[]);

  // SELECTING OPTION SETTING
  const selectHandler = (event) => {
    const selectedValue = event.target.value;

    // Update selectedCharacter state
    setSelectedCharacter(selectedValue);

    // Update formValue with the selected character
    setFormValue((prevFormValue)=> (
      {...prevFormValue, wroteTo: selectedValue,}
      ))
  }

  // NEW LETTER ADD
  const addHandler = (event) => {
    event.preventDefault();
    const newLetter = {id: uuid(), userName: userName, createdAt: moment().format('YY-MM-DD HH:mm'), message: message, wroteTo: selectedCharacter,
    }
    console.log('입력값으로 만들어진 객체',newLetter);
    const userNameLength = userName.trim().length;
    const messageLength = message.trim().length;

    // validation check
    if (userNameLength === 0 || messageLength === 0) {
      alert("Please fill out the blank");
      return;
    } else if (userNameLength > 20) { 
      alert("Please write your usernmae within 20 characters.");
      return;
    } else if (messageLength > 100) {
      alert("Please write your message within 100 characters.");
      return;
    } else if (/^\s*$/.test(userName) || /^\s*$/.test(message)) {
      alert("Only spaces have been entered.");
      return;
    } else {
      setLetters([...letters, newLetter]);
      // input box init
        setUserName("");
        setMessage("");
    }
  }

  return (
    <Form onSubmit={addHandler}>
    To...
    {/* name은 옵션값의 Key 명이 될 이름이다. */}
    <select name="wroteTo" value={letters.wroteTo}  onChange={selectHandler}>
      <option value="Paul">Paul</option>
      <option value="Elio">Elio</option>
      <option value="Gatsby">Gatsby</option>
      <option value="Lee">Lee</option>
    </select>
    username: <UserNameInput type="text" value={userName} onChange={userNameHandler} placeholder='max 20 characters'ref={userNameRef}/>
    message: <MessageInput type="text" value={message} onChange={messageTypeHandler} placeholder='max 100 characters'/>
    <button type="submit">Send</button>
  </Form>
  )
}

export default FormArea