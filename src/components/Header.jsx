import React from 'react'
import {styled} from "styled-components";

const HeaderArea = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 1px solid black;
`;

function Header() {
  return (
    <HeaderArea>
      <h1>Letters To Your Character</h1>
      <p>Send a letter to one of characters that Timothée Chalamet's played in roles!</p>
      <div>
        To... <select>
          <option>Paul</option>
          <option>Elio</option>
          <option>Gatsby</option>
          <option>Lee</option>
        </select>
        username: <input />
        message: <input />
        <button>Send</button>
      </div>
    </HeaderArea>
  )
}

export default Header