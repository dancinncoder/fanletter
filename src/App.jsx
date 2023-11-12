
// CSS
import { styled } from 'styled-components';
// Hooks
import {useState} from 'react';
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
      {id: 1, username: "Hamin", date: "23.11.03", time:"오전 11:07:09", content:"I love you Paul!", toPaul: true, character:"Paul"}
      ,
      {id: 2, username: "Rose", date: "23.11.03", time:"오전 11:07:09", content:"I like you Paul!", toPaul: true, character:"Paul"}
      ,
      {id: 3, username: "Guigui", date: "23.11.03", time:"오전 11:07:09", content:"I love you Elio!", toElio: true, character:"Elio"}
      ,
      {id: 4, username: "Tom", date: "23.11.03", time:"오전 11:07:09", content:"I like you Elio!", toElio: true, character:"Elio"}
      ,
      {id: 5, username: "Mark", date: "23.11.03", time:"오전 11:07:09", content:"I love you Gatsby!", toGatsby: true, character:"Gatsby"}
      ,
      {id: 6, username: "Sandra", date: "23.11.03", time:"오전 11:07:09", content:"I like you Gatsby!", toGatsby: true, character:"Gatsby"}
      ,
      {id: 7, username: "Yuri", date: "23.11.03", time:"오전 11:07:09", content:"I love you Lee!", toLee: true, character:"Lee"}
      ,
      {id: 8, username: "Vik", date: "23.11.03", time:"오전 11:07:09", content:"I like you Lee!", toLee: true, character:"Lee"}
      ,
    ]
  );

  const [paulLetterShown, setPaulLetterShown] = useState(true);
  const [elioLetterShown, setElioLetterShown] = useState(true);
  const [gatsbyLetterShown, setGatsbyLetterShown] = useState(true);
  const [leeLetterShown, setLeeLetterShown] = useState(true);

  return (
    <div>
      <Header />
      <main>
        <Display>
          <ImgBtnBox>
            <Button
              paulLetterShown={paulLetterShown}
              setPaulLetterShown={setPaulLetterShown}
              elioLetterShown={elioLetterShown}
              setElioLetterShown={setElioLetterShown}
              gatsbyLetterShown={gatsbyLetterShown}
              setGatsbyLetterShown={setGatsbyLetterShown}
              leeLetterShown={leeLetterShown}
              setLeeLetterShown={setLeeLetterShown}
              letters={letters}
            />
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb2mdiC%2Fbtsz6vZ0AJC%2FMCCSeykgsK4zkmNrF4202k%2Fimg.png"/>
          </ImgBtnBox>
          {/* 여기서 이름별로 필터링 해야 하는데.. */}
          {paulLetterShown && (
            <List letters={letters.filter((letter) => letter.character === 'Paul')} setLetters={setLetters} />
          )}
          {elioLetterShown && (
            <List letters={letters.filter((letter) => letter.character === 'Elio')} setLetters={setLetters} />
          )}
          {gatsbyLetterShown && (
            <List letters={letters.filter((letter) => letter.character === 'Gatsby')} setLetters={setLetters} />
          )}
          {leeLetterShown && (
            <List letters={letters.filter((letter) => letter.character === 'Lee')} setLetters={setLetters} />
          )}
          {/* {paulLetterShown === true ? (
            <List letters={letters} setLetters={setLetters} />
          ) : ("")}
          {elioLetterShown === true ? (
            <List letters={letters} setLetters={setLetters} />
          ) : ("")}
          {gatsbyLetterShown === true ? (
            <List letters={letters} setLetters={setLetters} />
          ) : ("")}
          {leeLetterShown === true ? (
            <List letters={letters} setLetters={setLetters} />
          ) : ("")} */}

        </Display>
      </main>
      <Footer />
    </div>
  );
}

export default App;
