import React from 'react'
import { useParams, useLocation } from 'react-router-dom';


function LetterDetails({}) {

  const { id } = useParams();
  const location = useLocation();
  const userName = location.state.userName;
  const userCreatedAt = location.state.createdAt;
  const wroteTo = location.state.wroteTo;
  const message = location.state.message;

  return (
    <div>
      <div>
        letter details~
        <p>username: {userName}</p>
        <p>date: {userCreatedAt}</p>
        <p>To... {wroteTo}</p>
        <p>message: {message}</p>
        <p>id: {id}</p>
      </div>
    </div>
  );
}

export default LetterDetails