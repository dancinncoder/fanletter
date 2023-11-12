import React from 'react'
import {styled} from "styled-components";
import uuid from 'react-uuid';

const ListArea = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 450px;
  margin: 30px 25px 5px 25px;
  /* overflow-y: scroll; */
`;

function List({letters, setLetters}) {
  return (
    <ListArea>
      {letters.map((letter)=>{
        return(
          <div key={uuid()}>
            <h3>{letter.userName}</h3>
            <span>{letter.createdAt}</span>
            <span>{letter.time}</span>
            <p>{letter.message}</p>
            <p>{uuid()}</p>
          </div>
        );
      })}
    </ListArea>
  )
}

export default List