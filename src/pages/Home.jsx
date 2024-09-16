// Hooks
import React from "react";
import { styled } from "styled-components";
import GlobalStyle from "../GlobalStyle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import List from "../components/List";
import Button from "../components/Button";
import FormArea from "../components/FormArea";
import picturePaul from "../assets/dune-Paul.png";
import { useSelector } from "react-redux";

function Home() {
  const letters = useSelector((state) => {
    return state.letters;
  });

  const letterShown = useSelector((state) => {
    return state.character;
  });

  const filteredByName = letters.filter((letter) => {
    return letterShown[letter.wroteTo];
  });

  return (
    <OuterFrame>
      <GlobalStyle />
      <Header />
      <Main>
        <ImgBtnBox>
          <PicturePaul src={picturePaul} alt="Paul picture" />
        </ImgBtnBox>
        <LetterInputOutputArea>
          <h1>Send My Letter</h1>
          <p>
            <i>
              Send a letter to one of characters that Timothée's played in roles
              !
            </i>
          </p>
          <FormArea />
          {/* <List letters={filteredByName}/> */}
          <List />
        </LetterInputOutputArea>
        <Button />
      </Main>
      <Footer />
    </OuterFrame>
  );
}

export default Home;

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
  max-width: 90%;
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
