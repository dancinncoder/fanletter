import React from 'react'
import {styled} from "styled-components";


const FooterArea = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  height: 100px;
`;

function Footer() {
  return (
    <FooterArea>
      Footer
    </FooterArea>
  )
}

export default Footer