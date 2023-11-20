import React from 'react'
import { styled } from 'styled-components';
import userIcon from '../assets/user-icon.png';


function UserIcon() {
  return (
      <UserIconImg src={userIcon} alt="User Icon"/>
  )
}

export default UserIcon

const UserIconImg = styled.img`
  margin: 20px;
  width: 55px;
  align-self: start;
`;