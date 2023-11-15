import React from 'react'
import {styled} from "styled-components";
import { useNavigate } from 'react-router-dom';
// import {useState} from 'react';
// import { useEffect } from 'react';
// import uuid from 'react-uuid';
// import moment from 'moment';


const HeaderArea = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  height: 100px;
  width: 1300px;
  color: white;
  margin: 0;
  padding: 0;
`;

// function Header({letters, setLetters, createdAt, setCreatedAt, userNameRef}) {
//   return (
//     <HeaderArea>
//       <h1>Letters To Your Character</h1>
//       <p>Send a letter to one of characters that Timothée Chalamet's played in roles!</p>
//       <FormArea letters={letters} setLetters={setLetters} userNameRef={userNameRef}/>
//     </HeaderArea>
//   )
// }

function Header({letters, setLetters, createdAt, setCreatedAt, userNameRef}) {

  const navigate = useNavigate();

  return (
    <HeaderArea>
      <button onClick={()=> {navigate("../Home")}}>Home</button>
      {/* <h1>Letters To Your Character</h1> */}
      {/* <p><i>Send a letter to one of characters that Timothée Chalamet's played in roles !</i></p> */}
      {/* <FormArea letters={letters} setLetters={setLetters} userNameRef={userNameRef}/> */}
    </HeaderArea>
  )
}

export default Header