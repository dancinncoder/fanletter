import React from 'react'
import {styled} from "styled-components";
import uuid from 'react-uuid';

const ListArea = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 450px;
  margin: 30px 5px 5px 5px;
  /* overflow-y: scroll; */
`;

function List({letters, setLetters}) {
  return (
    <ListArea>
      {letters.filter((l)=>{
        const a = l.character; //Elio
        console.log('HERE',l[`to${a}`]); //객체의키이름에서 변수${}로 동적으로 처리하기
        return l[`to${a}`] === true; //toElio === true;
        
      })
      .map((letter)=>{
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