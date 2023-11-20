import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import LetterDetails from '../pages/LetterDetails';

function Router() {

  const [letters, setLetters] = useState([]);

  // 세부정보페이지에서 새로고침하면 데이터가 없다고 오류가 뜨는데 해결방법이 궁금합니다
  useEffect(()=>{
    const lettersData = require("../database/fakeData.json");
    setLetters(lettersData);
  },[])

  // useEffect(()=>{
  //   const fetchLettersData = async () => {
  //     try{
  //       const response = await fetch("../database/fakeData.json");
  //       const lettersData = await response.json();
  //       setLetters('lettersData',lettersData);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  //   fetchLettersData();
  // },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home letters={letters} setLetters={setLetters}/>}/>
        <Route path="letter-details/:id" element={<LetterDetails letters={letters} setLetters={setLetters}/>}/>
        <Route path="*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default Router