
// CSS
import { styled } from 'styled-components';
// Hooks
import {useState} from 'react';
import uuid from 'react-uuid';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import Button from './components/Button';


const Display = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ImgBtnBox = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {



  const [letters, setLetters] = useState(
    [
      {id: uuid(), userName: "Hamin", createdAt: "23.11.03 오전 11:07:09", message:"I love you Paul!", wroteTo: "Paul", character:"Paul", }
      ,
      {id: uuid(), userName: "Rose", createdAt: "23.11.03 오전 11:07:09", message:"I like you Paul!", wroteTo: "Paul", character:"Paul"}
      ,
      {id: uuid(), userName: "Guigui", createdAt: "23.11.03 오전 11:07:09", message:"I love you Elio!", wroteTo: "Elio", character:"Elio"}
      ,
      {id: uuid(), userName: "Tom", createdAt: "23.11.03 오전 11:07:09", message:"I like you Elio!", wroteTo: "Elio", character:"Elio"}
      ,
      {id: uuid(), userName: "Mark", createdAt: "23.11.03 오전 11:07:09", message:"I love you Gatsby!", wroteTo: "Gatsby", character:"Gatsby"}
      ,
      {id: uuid(), userName: "Sandra", createdAt: "23.11.03 오전 11:07:09", message:"I like you Gatsby!", wroteTo: "Gatsby", character:"Gatsby"}
      ,
      {id: uuid(), userName: "Yuri", createdAt: "23.11.03 오전 11:07:09", message:"I love you Lee!", wroteTo: "Lee", character:"Lee"}
      ,
      {id: uuid(), userName: "Vik", createdAt: "23.11.03 오전 11:07:09", message:"I like you Lee!", wroteTo: "Lee", character:"Lee", }
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


  const [paulLetterShown, setPaulLetterShown] = useState(true);
  const [elioLetterShown, setElioLetterShown] = useState(true);
  const [gatsbyLetterShown, setGatsbyLetterShown] = useState(true);
  const [leeLetterShown, setLeeLetterShown] = useState(true);


  return (
    <div>
      <Header letters={letters} setLetters={setLetters}/>
      <main>
        <Display>
          <ImgBtnBox>
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbhE6Im%2FbtsAaloxZcy%2FrKQ9RqtzUk3CVSvt7FLP81%2Fimg.jpg"/>
            <Button
              setPaulLetterShown={setPaulLetterShown}
              setElioLetterShown={setElioLetterShown}
              setGatsbyLetterShown={setGatsbyLetterShown}
              setLeeLetterShown={setLeeLetterShown}
              letters={letters}
            />
          </ImgBtnBox>
          {/* 여기서 이름별로 필터링 해야 하는데.. */}
          {paulLetterShown && (
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
          )}
        </Display>
      </main>
      <Footer />
    </div>
  );
}

export default App;