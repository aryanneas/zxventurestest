import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../../CartContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logoImage from '../../../images/logo.png'
import Cart from '../Cart/Cart'

const Header = () => {
  const [showCart, setShowCart] = useState(false)
  const [cart] = useContext(CartContext)

  return (
    <NavContent>
      <NavItems>
        <Ul>
          <Li>
            <LinkPage href="/">
              <LogoImage
                src={logoImage}
                alt="Logo Sempre em Casa"
                title="Logo Sempre em Casa"
              />
            </LinkPage>
          </Li>

          <LiCarrinho>
            <LinkPage title="Carrinho" onClick={() => setShowCart(!showCart)}>
              <FontAwesomeIcon icon="shopping-cart" />
            </LinkPage>
            <ProductsUnities>{cart.length}</ProductsUnities>
          </LiCarrinho>
        </Ul>
      </NavItems>

      <ShoppingCart showCart={showCart} setShowCart={setShowCart}>
        <Cart />
      </ShoppingCart>
    </NavContent>
  )
}

const ShoppingCart = styled.div`
  display: ${(props) => (props.showCart ? 'block' : 'none')};
`

const NavContent = styled.div``
const NavItems = styled.div``

const ProductsUnities = styled.span`
  color: #fff;
`

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #e2c2ab;
`

const Li = styled.li`
  float: left;
`
const LiCarrinho = styled.li`
  justify-content: center;
  align-items: center;
  padding: 0;
  display: flex;
  position: absolute;
  right: 40px;
  top: 10px;
  text-align: center;
`

const LinkPage = styled.a`
  display: block;
  color: #fff;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`

const LogoImage = styled.img`
  width: 30%;
`
export default Header
