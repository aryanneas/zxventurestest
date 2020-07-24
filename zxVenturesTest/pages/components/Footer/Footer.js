import React from 'react'
import styled from 'styled-components'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <FooterContent>
      <div>
        <CopyRight>
          &copy; 2020 Desenvolvido por Aryanne Silva. Feito com muito amor
          &hearts;
        </CopyRight>
      </div>
    </FooterContent>
  )
}

const FooterContent = styled.footer`
  background-color: #4d54ff;
`
const CopyRight = styled.p`
  margin: 0;
  text-align: center;
  padding: 2% 0;
  color: #fff;
`
export default Footer
