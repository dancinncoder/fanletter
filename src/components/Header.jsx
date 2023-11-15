import React from 'react'
import {styled} from "styled-components";
// import {useState} from 'react';
// import { useEffect } from 'react';
// import uuid from 'react-uuid';
// import moment from 'moment';
import FormArea from '../components/FormArea';

const HeaderArea = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 1px solid black;
`;

function Header({letters, setLetters, createdAt, setCreatedAt, userNameRef}) {
  return (
    <HeaderArea>
      <h1>Letters To Your Character</h1>
      <p>Send a letter to one of characters that Timothée Chalamet's played in roles!</p>
      <FormArea letters={letters} setLetters={setLetters} userNameRef={userNameRef}/>
    </HeaderArea>
  )
}

export default Header