import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import LetterDetails from '../pages/LetterDetails';

function Router() {

  const [letters, setLetters] = useState([]);

  // useEffect가 작동하지 않음. 해결해야 함. 세부정보페이지에서 새로고침하면 데이터가 없다고 오류뜸.
  useEffect(()=>{
    const lettersData = require("../database/fakeData.json");
    setLetters(lettersData);
    console.log('letters',letters);
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home letters={letters} setLetters={setLetters}/>}/>
        {/* <Route path="letter-details" element={<LetterDetails />}/> */}
        <Route path="letter-details/:id" element={<LetterDetails letters={letters} setLetters={setLetters}/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default Router