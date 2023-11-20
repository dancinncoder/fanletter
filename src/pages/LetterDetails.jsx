import React, { useEffect, useRef } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import goHomeBtn2 from '../assets/gohome-icon2.png';
import UserIcon from '../components/UserIcon';
import Header from 'components/Header';
import { useState } from 'react';
import { LettersContext } from 'context/LettersContext';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  margin: 0 5px 5px 5px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #e49090;
`;

const Message = styled.p`
  align-self: flex-start;
  width: 93%;
  height: 150px;
  padding: 20px 20px 5px 20px;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: #e5e3e3;
  border-radius: 10px;
`;

const Textarea = styled.textarea`
  border: none;
  background-color: #e5e3e3;
  resize: none;
  overflow-y: hidden;
  font-family: 'Apple SD Gothic Neo';
  font-size: 1.2rem;
  font-weight: 400;
  color: #606060;
  height: 128px;
  padding-bottom: 10px;
  width: 100%;
  outline: none;
  padding: 0 0 10px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  height: 175px;
  padding: 0px;
  margin: 0;
`;

function LetterDetails() {

  //redux -----------------------------
  const letters = useSelector((state)=>{
    return state.letters;
  });

  console.log('letters in 상세페이지', letters);

  //redux -----------------------------


  // const { letters, setLetters } = useContext(LettersContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const userName = location.state.userName;
  const createdAt = location.state.createdAt;
  const wroteTo = location.state.wroteTo;
  const message = location.state.message;
  console.log('list에서 가져온객체',location.state);
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);
  const messageRef = useRef(message);
  let filtered = letters?.find((item)=>item.id === id );
  console.log('filtered',filtered);
  const deleteLetterHandler = (id) => {
    if(window.confirm("Are you sure you want to delete the letter?") === true){
      const remainedLetters = letters.filter((letter)=>{
        return letter.id !== filtered.id;
      })
      console.log('remainedLetters',remainedLetters); //확인완료
      setLetters(remainedLetters);
      alert("your letter has been successfully deleted!");
      navigate("../");
    } else {
      return false;
    }
  }

  if(letters.length === 0){
    <h1>데이터가 없습니다.</h1>
  } 

  const editHandler = () => {
    setIsEditing(!isEditing);
    console.log('setIsEditing is...', isEditing);
  }

  useEffect(() => {
    // focus when it is edit mode
    if (isEditing) {
      const messageLength = messageRef.current.value.length;
      messageRef.current.focus();
      //place the location of the cursor to the last
      messageRef.current.setSelectionRange(messageLength, messageLength);
    }
  }, [isEditing]);

  const editedTypeHandler = (event) => {
    const editedSavedMessage = event.target.value;
    setEditedMessage(editedSavedMessage);
    console.log('!!!!!',editedMessage);
    console.log('editedSavedMessage',editedSavedMessage);
  }

  const editedAddHandler = (e) => {
    e.preventDefault();
    // validation check
    if(message === editedMessage){
      alert("There is no any change");
    } else {
      if(window.confirm("Are you sure you want to save the changes?") !== true) {
        return;
      } else {
        const newEditedLetters = letters.map((letter)=>
        letter.id === id ? {...letter, message: editedMessage}
         : letter);
        console.log('newEditedLetters',newEditedLetters);
        setLetters(newEditedLetters);
        alert("Your changes has been successfully updated!");
        setIsEditing(false);
      }
    }

  };

  return (
    <div>
      {console.log("letters in detail page", letters)}
      {/* 데이터 들어오는 것 확인 */}
      <GlobalStyle />
      <Header/>
      <Main>
        <BtnArea>
          <GoHomeBtn2 src={goHomeBtn2} alt="Go Home Button with Timmy Image" onClick={()=> {navigate(-1)}}></GoHomeBtn2>
        </BtnArea>
        {isEditing? (
          <>
            <Letter style={{ justifyContent: 'center' }}>
              <UserNameAndCreatedAt>
                <UserInfo>
                  <UserIcon />
                  <p>{filtered.userName}</p>
                  </UserInfo>
                  <CreatedAt>{filtered.createdAt}</CreatedAt>
              </UserNameAndCreatedAt>
              <WroteTo>To: {filtered.wroteTo}</WroteTo>
              <Form onSubmit={editedAddHandler}>
                <Message><Textarea onChange={editedTypeHandler} ref={messageRef}>{filtered.message}</Textarea></Message>
              </Form>
            </Letter>
            <EditBtnArea>
              <Button type="submit" alt="Save Button" onClick={editedAddHandler} >Save</Button>
              <Button alt="Cancel Button" onClick={editHandler} >Cancel</Button>
            </EditBtnArea>
          </>
        ) : (
          <>
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
              <Button alt="Edit Button" onClick={editHandler}>Edit</Button>
              <Button alt="Delete Button" onClick={deleteLetterHandler}>Delete</Button>
              <Button alt="Back Button" onClick={()=> {navigate(-1)}} >Back</Button>
            </EditBtnArea>
          </>
        )}  
      </Main>

    </div>
  );
}

export default LetterDetails