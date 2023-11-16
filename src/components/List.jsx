import React from 'react'
import {styled} from "styled-components";
import uuid from 'react-uuid';
import { Link, useParams } from 'react-router-dom';
import UserIcon from './UserIcon';


const ListArea = styled.div`
  /* border: 1px solid black;
  width: 450px;
  height: 400px;
  margin: 50px 25px 50px 25px; */
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* border-radius: 20px; */
  width: 90%;
  height: 300px;
  margin: 10px;
  background-color: #f2f2f2;
  color: #000000;
  padding: 10px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    padding-right: 20px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.4);
    border: 10px solid white;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const Letter = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: black;
  background-color: #e9e9e9;
  margin: 10px;
  padding: 10px;
  gap: 5px;
  height: 150px;
  width: 90%;
  /* border-radius: 20px; */
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.02);
    background-color: #acacac;
  }
`;

const Message = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;  
`;

// const UserIconImg = styled.img`
//   align-self: start;
//   margin: 20px;
//   width: 50px;
// `;

const LetterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 260px;
`;

const UserName = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 800;
`;

const ListOuterFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border-radius: 20px; */
  width: 90%;
  height: 400px;
  border-radius: 20px;
  margin: 20px;
  background-color: #f2f2f2;
  padding: 10px;
`;

function List({letters, setLetters}) {
  return (
    <ListOuterFrame>
      <ListArea>
      {letters.map((letter)=>{
        return(
          <Letter
            key={uuid()}
            to={`/letter-details/${letter.id}`}
            state={{userName : letter.userName
              , createdAt : letter.createdAt
              , wroteTo : letter.wroteTo
              , message : letter.message
            }}
           >
            <UserIcon />
            <LetterContent>
              <UserName>{letter.userName}</UserName>~
              <p>{letter.createdAt}</p>
              <span>{letter.wroteTo},&nbsp;</span>
              <Message>{letter.message}</Message>
            </LetterContent>
          </Letter>
        );
      })}
      </ListArea>
    </ListOuterFrame>

  )
}

export default List