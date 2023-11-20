import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { LettersContext } from 'context/LettersContext';
import { FormAreaContext } from 'context/FormAreaContext';
import { ButtonLetterContext } from 'context/ButtonLetterContext';
import { FilteredLettersByNameContext } from 'context/FilteredLettersByNameContext';
import { styled } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import List from '../components/List';
import Button from '../components/Button';
import FormArea from '../components/FormArea';
import picturePaul from '../assets/dune-Paul.png';

const OuterFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #272727;
  margin: 0;
  padding: 0;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 60px;
  max-width: 100%;
  height: 100vh;
  margin: 0;
`;

const ImgBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;

const PicturePaul = styled.img`
  display: block;
  position: fixed;
  left: 0;
  bottom: 0;
  max-width:90%;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
  transform: scale(1.04);
  }
`;

const LetterInputOutputArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  width: 100%;
  &:nth-child(2) {
    color: white;
  }
`;

function Home() {
  const {letters, setLetters} = useContext(LettersContext);

  const [letterShown, setLetterShown] = useState({
    'Paul' : true,
    'Elio' : false,
    'Gatsby' : false,
    'Lee' : false,
  });
  const [createdAt, setCreatedAt] = useState("");

  const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');

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

  const filteredByName = letters.filter((letter)=>{
    return letterShown[letter.wroteTo];
  })

  return (
    <OuterFrame>
      <GlobalStyle />
      <Header />
      <Main>
        <ImgBtnBox>
          <PicturePaul src={picturePaul} alt="Paul picture"/>
        </ImgBtnBox>
        <LetterInputOutputArea>
          <h1>Send My Letter</h1>
          <p><i>Send a letter to one of characters that Timothée's played in roles !</i></p>
          <FormAreaContext.Provider value={{createdAt, userNameRef}}>
            <FormArea />
          </FormAreaContext.Provider>
          <FilteredLettersByNameContext.Provider value={{ letters : filteredByName}}>
              <List />
          </FilteredLettersByNameContext.Provider>
        </LetterInputOutputArea>
        <ButtonLetterContext.Provider value={{letterShown, setLetterShown}}>
          <Button />
        </ButtonLetterContext.Provider>
      </Main>
      <Footer />
    </OuterFrame>
  );
}

export default Home;