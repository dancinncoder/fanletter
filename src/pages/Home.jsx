// Hooks
import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
// CSS
import { styled } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import List from '../components/List';
import Button from '../components/Button';
// import Image from '../components/Image';
// Image
import picturePaul from '../assets/dune-Paul.png';
// Data Fetch
// import fakeData from "../database/fakeData.json";



const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

const ImgBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;

const PicturePaul = styled.img`
  width: 430px;
`;


function Home() {
  const [letterShown, setLetterShown] = useState({
    'Paul' : true,
    'Elio' : false,
    'Gatsby' : false,
    'Lee' : false,
  });
  const [createdAt, setCreatedAt] = useState("");

  // fakeData 가져오기
  // const [letters, setLetters] = useState(fakeData);

  const [letters, setLetters] = useState([]);
  useEffect(()=>{
    const lettersData = require("../database/fakeData.json");
    setLetters(lettersData);
  },[])

  const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
  console.log(nowTime);

  useEffect(()=> {
    // GET CURRNET DATE & TIME
    const now = moment();
    // FORMATTING
    const formattedTime = now.format('YY-MM-DD HH:mm:');
    setCreatedAt(formattedTime);
  },[])

  const userNameRef = useRef('');
  useEffect(()=> {
    userNameRef.current.focus();
  })


  return (
    <div>
      <GlobalStyle />
      <Header letters={letters} setLetters={setLetters} userNameRef={userNameRef}/>
      <Main>
        <ImgBtnBox>
          <PicturePaul src={picturePaul} alt="Paul picture"/>
          {/* <Image /> */}
          <Button setLetterShown={setLetterShown} letters={letters}/>
        </ImgBtnBox>
        <List letters={letters.filter((letter)=>{
          return letterShown[letter.wroteTo];  
        })}/>
      </Main>
      <Footer />
    </div>
  );
}

export default Home;