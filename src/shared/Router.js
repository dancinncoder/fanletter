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
  },[])


  // const [letters, setLetters] = useState([
  //   {id: 1, userName: "Hamin", createdAt: "23-11-15 10:55", message:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ", wroteTo: "Paul" }
  //   ,
  //   {id: 2, userName: "Rose", createdAt: "23-11-15 10:55", message:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.", wroteTo: "Paul" }
  //   ,
  //   {id: 3, userName: "Guigui", createdAt: "23-11-15 10:55", message:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.", wroteTo: "Elio" }
  // ]);




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