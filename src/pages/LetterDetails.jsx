import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import goHomeBtn2 from '../assets/gohome-icon2.png';
import UserIcon from '../components/UserIcon';

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

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 100px;
  background-color: #272727;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #272727;
`;

const GoHomeBtn = styled.button`
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

function LetterDetails({}) {

  const { id } = useParams();
  const location = useLocation();
  const userName = location.state.userName;
  const createdAt = location.state.createdAt;
  const wroteTo = location.state.wroteTo;
  const message = location.state.message;
  const navigate = useNavigate();



  return (
    <div>
      <GlobalStyle />
      <Header>
        <GoHomeBtn onClick={()=> {navigate(-1)}}>Home</GoHomeBtn>
      </Header>
      <Main>
        <BtnArea>
          <GoHomeBtn2 src={goHomeBtn2} alt="Go Home Button with Timmy Image" onClick={()=> {navigate(-1)}}></GoHomeBtn2>
        </BtnArea>
        <Letter>
          <UserNameAndCreatedAt>
            <UserInfo>
              <UserIcon />
              <p>{userName}</p>
            </UserInfo>
            <CreatedAt>{createdAt}</CreatedAt>
          </UserNameAndCreatedAt>
          <WroteTo>To: {wroteTo}</WroteTo>
          <Message>{message}</Message>
        </Letter>
        <EditBtnArea>
          <Button alt="Edit Button">Edit</Button>
          <Button alt="Delete Button">Delete</Button>
          <Button onClick={()=> {navigate(-1)}} alt="Back Button">Back</Button>
        </EditBtnArea>
      </Main>

    </div>
  );
}

export default LetterDetails