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
      {/* {letters.filter((l)=>{
        return l.writedTo === item.name;
        // const a = l.character; //Elio
        // // console.log('HERE',l[`to${a}`]); //객체의키이름에서 변수${}로 동적으로 처리하기
        // return l[`writedTo${a}`] === true; //toElio === true;
        
      }) */}

      {letters.map((letter)=>{
        return(
          <div key={uuid()}>
            <h3>{letter.username}</h3>
            <span>{letter.createdAt}</span>
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