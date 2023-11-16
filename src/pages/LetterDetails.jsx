import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import goHomeBtn2 from '../assets/gohome-icon2.png';
import UserIcon from '../components/UserIcon';
import Header from 'components/Header';
import { useState } from 'react';

const Letter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  width: 33%;
  height: 400px;
  margin: 0 150px 80px 150px;
  background-color: #f2f2f2;
  color: #000000;
  padding: 10px 50px 10px 50px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #272727;
`;

const GoHomeBtn2 = styled.img`
  /* height: 90vh; */
  /* max-height: 90%; */
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  max-width:99%;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
  transform: scale(1.04);
  }
`;

const BtnArea = styled.div`
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30%;
  height: 90%;
  overflow-y: hidden;
  /* z-index: 0; */
`;

const EditBtnArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: end;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 15%;
  height: 100px;
  background-color: black;
  color: white;
  font-size: 1.3rem;
  border: none;
  display: block;
  position: absolute;
  right: 0;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    background-color: #343434;
  }
  &:first-child {
    bottom: 55%;
  }
  &:nth-child(2){
    bottom: 43%;
  }
  &:nth-child(3){
    bottom: 31%;
  }
`;

const UserNameAndCreatedAt = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  justify-self: flex-start;
  padding-right: 15px;
  gap: 20px;
  width: 103%;
  /* border: 1px solid red; */
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 800;
`;

const CreatedAt = styled.p`
  font-weight: 600;
`;

const WroteTo = styled.p`
  align-self: flex-start;
  width: 80%;
  padding: 0 5px 5px 5px;
  /* margin: 0 50px 0 40px; */
  margin: 0 5px 5px 5px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #e49090;
  /* border: 1px solid blue; */
`;

const Message = styled.p`
  align-self: flex-start;
  /* width: 560px; */
  width: 93%;
  height: 150px;
  padding: 20px 20px 5px 20px;
  /* margin: 10px 50px 0 50px; */
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: #e5e3e3;
  border-radius: 10px;
`;

function LetterDetails({letters, setLetters}) {

  const { id } = useParams();
  const location = useLocation();
  // const userName = location.state.userName;
  // const createdAt = location.state.createdAt;
  // const wroteTo = location.state.wroteTo;
  // const message = location.state.message;
  // const letters= location.state;
  // const setLetters = useState(letters);
  // const {letters, letter} = location.state;
  console.log('????',location.state);
  console.log('모음',location);
  const navigate = useNavigate();
  let filtered = letters?.find((item)=>item.id === Number(id));
  // console.log(filtered);
  console.log('letters',letters);
  console.log('usparams',id);

  const deleteLetterHandler = (id) => {
    // const deletedLetter = letters.filter((letter)=> letter.id !== id)
    // setLetters(deletedLetter);
  }
  if(letters.length === 0){
    <h1>데이터가 없습니다.</h1>
  } 
  return (
    <div>
      <GlobalStyle />
      <Header/>
      <Main>
        <BtnArea>
          <GoHomeBtn2 src={goHomeBtn2} alt="Go Home Button with Timmy Image" onClick={()=> {navigate(-1)}}></GoHomeBtn2>
        </BtnArea>
        <Letter>
          <UserNameAndCreatedAt>
            <UserInfo>
              <UserIcon />
              <p>{filtered.userName}</p>
            </UserInfo>
            <CreatedAt>{filtered.createdAt}</CreatedAt>
          </UserNameAndCreatedAt>
          <WroteTo>To: {filtered.wroteTo}</WroteTo>
          <Message>{filtered.message}</Message>
        </Letter>
        <EditBtnArea>
          <Button alt="Edit Button">Edit</Button>
          <Button alt="Delete Button" onClick={deleteLetterHandler}>Delete</Button>
          <Button alt="Back Button" onClick={()=> {navigate(-1)}} >Back</Button>
        </EditBtnArea>
      </Main>

    </div>
  );
}

export default LetterDetails