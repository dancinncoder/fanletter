import React from 'react'
import {styled} from "styled-components";


const FooterArea = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  height: 150px;
  margin: 0 0 0 0;
`;

function Footer() {
  return (
    <FooterArea>
      Footer
    </FooterArea>
  )
}

export default Footer