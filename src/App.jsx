
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
      {id: 1, username: "Hamin", createdAt: "23.11.03", time:"오전 11:07:09", content:"I love you Paul!", writedTo: "Paul", character:"Paul", }
      ,
      {id: 2, username: "Rose", createdAt: "23.11.03", time:"오전 11:07:09", content:"I like you Paul!", writedTo: "Paul", character:"Paul"}
      ,
      {id: 3, username: "Guigui", createdAt: "23.11.03", time:"오전 11:07:09", content:"I love you Elio!", writedTo: "Elio", character:"Elio"}
      ,
      {id: 4, username: "Tom", createdAt: "23.11.03", time:"오전 11:07:09", content:"I like you Elio!", writedTo: "Elio", character:"Elio"}
      ,
      {id: 5, username: "Mark", createdAt: "23.11.03", time:"오전 11:07:09", content:"I love you Gatsby!", writedTo: "Gatsby", character:"Gatsby"}
      ,
      {id: 6, username: "Sandra", createdAt: "23.11.03", time:"오전 11:07:09", content:"I like you Gatsby!", writedTo: "Gatsby", character:"Gatsby"}
      ,
      {id: 7, username: "Yuri", createdAt: "23.11.03", time:"오전 11:07:09", content:"I love you Lee!", writedTo: "Lee", character:"Lee"}
      ,
      {id: 8, username: "Vik", createdAt: "23.11.03", time:"오전 11:07:09", content:"I like you Lee!", writedTo: "Lee", character:"Lee", }
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
      <Header />
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
            <List letters={letters.filter((letter) => letter.writedTo === 'Paul')} setLetters={setLetters}/>
          )}
          {elioLetterShown && (
            <List letters={letters.filter((letter) => letter.writedTo === 'Elio')} setLetters={setLetters}/>
          )}
          {gatsbyLetterShown && (
            <List letters={letters.filter((letter) => letter.writedTo === 'Gatsby')} setLetters={setLetters}/>
          )}
          {leeLetterShown && (
            <List letters={letters.filter((letter) => letter.writedTo === 'Lee')} setLetters={setLetters}/>
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