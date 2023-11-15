
// CSS
import { styled } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
// Hooks
import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import { useEffect } from 'react';
import { useRef } from 'react';
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import List from '../components/List';
import Button from '../components/Button';
// import Image from '../components/Image';
// img
import picturePaul from '../assets/dune-Paul.png';
// Data fetch
import fakeData from "../database/fakeData.json";



const Display = styled.div`
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
  const [letters, setLetters] = useState(
    fakeData
  );

  // useEffect(()=>{
  //   const fakeData = require("fakeData");
  //   setLetters([...fakeData]);
  // },[])


  // const [letters, setLetters] = useState(
  //   [
  //     {id: uuid(), userName: "Hamin", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I love you Paul!", wroteTo: "Paul", }
  //     ,
  //     {id: uuid(), userName: "Rose", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I like you Paul!", wroteTo: "Paul", }
  //     ,
  //     {id: uuid(), userName: "Guigui", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I love you Elio!", wroteTo: "Elio", }
  //     ,
  //     {id: uuid(), userName: "Tom", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I like you Elio!", wroteTo: "Elio", }
  //     ,
  //     {id: uuid(), userName: "Mark", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I love you Gatsby!", wroteTo: "Gatsby", }
  //     ,
  //     {id: uuid(), userName: "Sandra", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I like you Gatsby!", wroteTo: "Gatsby", }
  //     ,
  //     {id: uuid(), userName: "Yuri", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I love you Lee!", wroteTo: "Lee", }
  //     ,
  //     {id: uuid(), userName: "Vik", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I like you Lee!", wroteTo: "Lee", }
  //     ,
  //   ]
  // );

 




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
      <main>
        <Display>
          <ImgBtnBox>
            <PicturePaul src={picturePaul} alt="Paul picture"/>
            {/* <Image /> */}
            <Button
              setLetterShown={setLetterShown}
              letters={letters}
            />
          </ImgBtnBox>
          <List letters={letters.filter((letter)=>{
            return letterShown[letter.wroteTo];  
          })}/>
        </Display>
      </main>
      <Footer />
    </div>
  );
}

export default Home;