
// CSS
import { styled } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
// Hooks
import React from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';
import moment from 'moment';
import { useEffect } from 'react';
import { useRef } from 'react';
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import List from '../components/List';
import Button from '../components/Button';



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



function Home() {
  const [letterShown, setLetterShown] = useState({
    'Paul' : true,
    'Elio' : false,
    'Gatsby' : false,
    'Lee' : false,
  });
  // const [elioLetterShown, setElioLetterShown] = useState(true);
  // const [gatsbyLetterShown, setGatsbyLetterShown] = useState(true);
  // const [leeLetterShown, setLeeLetterShown] = useState(true);
  const [createdAt, setCreatedAt] = useState("");
  const [letters, setLetters] = useState(
    [
      {id: uuid(), userName: "Hamin", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I love you Paul!", wroteTo: "Paul", }
      ,
      {id: uuid(), userName: "Rose", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I like you Paul!", wroteTo: "Paul", }
      ,
      {id: uuid(), userName: "Guigui", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I love you Elio!", wroteTo: "Elio", }
      ,
      {id: uuid(), userName: "Tom", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I like you Elio!", wroteTo: "Elio", }
      ,
      {id: uuid(), userName: "Mark", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I love you Gatsby!", wroteTo: "Gatsby", }
      ,
      {id: uuid(), userName: "Sandra", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I like you Gatsby!", wroteTo: "Gatsby", }
      ,
      {id: uuid(), userName: "Yuri", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I love you Lee!", wroteTo: "Lee", }
      ,
      {id: uuid(), userName: "Vik", createdAt: moment().format('YY-MM-DD HH:mm'), message:"I like you Lee!", wroteTo: "Lee", }
      ,
    ]
  );

  // const [characterImage, setCharacterImage] = useState(
  //   [
  //     {name: "Paul", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb2mdiC%2Fbtsz6vZ0AJC%2FMCCSeykgsK4zkmNrF4202k%2Fimg.png" }
  //     ,
  //     {name: "Elio", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbn60w6%2Fbtsz90x9gn8%2FVoGmwVTKKQjF6G8HXrUmBk%2Fimg.png" }
  //     ,
  //     {name: "Gatsby", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fq7XpO%2FbtsAbaGGZzW%2FEib9Jr6RbEFCVFrKG8cLxK%2Fimg.png" }
  //     ,
  //     {name: "Lee", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeRM5KX%2Fbtsz8sCdh3p%2FgI45Ou0kAMqrkAfDKtt9Z1%2Fimg.png" }
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
  })

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
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbhE6Im%2FbtsAaloxZcy%2FrKQ9RqtzUk3CVSvt7FLP81%2Fimg.jpg"/>
            <Button
              setLetterShown={setLetterShown}
              letters={letters}
            />
          </ImgBtnBox>
          {/* 여기서 이름별로 필터링 해야 하는데.. */}
          <List letters={letters.filter((letter)=>{
            // letterShown 보여지는 것 객체형태 이름을 키값으로 선택되었는지의 유무를 알 수 있다.
            // letter wroteTo 이름으로
            return letterShown[letter.wroteTo];  
          })}/>
          {/* {paulLetterShown && (
            <List letters={letters.filter((letter) => letter.wroteTo === 'Paul')} setLetters={setLetters}/>
          )}
          {elioLetterShown && (
            <List letters={letters.filter((letter) => letter.wroteTo === 'Elio')} setLetters={setLetters}/>
          )}
          {gatsbyLetterShown && (
            <List letters={letters.filter((letter) => letter.wroteTo === 'Gatsby')} setLetters={setLetters}/>
          )}
          {leeLetterShown && (
            <List letters={letters.filter((letter) => letter.wroteTo === 'Lee')} setLetters={setLetters}/>
          )} */}
        </Display>
      </main>
      <Footer />
    </div>
  );
}

export default Home;