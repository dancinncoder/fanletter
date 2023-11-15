import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import LetterDetails from '../pages/LetterDetails';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Home/" element={<Home />}/>
        {/* <Route path="letter-details" element={<LetterDetails />}/> */}
        <Route path="letter-details/:id" element={<LetterDetails />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default Router