import React from 'react'
import {styled} from "styled-components";
import uuid from 'react-uuid';

const ListArea = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 500px;
`;

function List({letters, setLetters}) {
  return (
    <ListArea>
      {letters.map((letter)=>{
        return(
          <div key={uuid()}>
            <h3>{letter.username}</h3>
            <span>{letter.date}</span>
            <span>{letter.time}</span>
            <p>{letter.content}</p>
            <p>{uuid()}</p>
          </div>
        );
      })}
    </ListArea>
  )
}

export default List