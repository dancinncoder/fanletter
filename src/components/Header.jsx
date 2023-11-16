import React from 'react'
import {styled} from "styled-components";
import { useNavigate } from 'react-router-dom';
// import {useState} from 'react';
// import { useEffect } from 'react';
// import uuid from 'react-uuid';
// import moment from 'moment';


const HeaderArea = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #272727;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const GoHomeBtn = styled.button`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  color: #ffffff;
  background-color: #272727;
  width: 130px;
  height: 70px;
  font-size: 1.2rem;
  margin: 10px;
  border: none;
  cursor: pointer;
  transition: 0.1s ease-in;
  &:hover {
    transform: scale(1.03);
    color: #e49090;
  }
`;

function Header({letters, setLetters, createdAt, setCreatedAt, userNameRef}) {

  const navigate = useNavigate();

  return (
    <HeaderArea>
      <GoHomeBtn onClick={()=> {navigate("../")}}>Home</GoHomeBtn>
    </HeaderArea>
  )
}

export default Header