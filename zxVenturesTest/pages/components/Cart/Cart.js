import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../../CartContext'

import { calcPercentual } from '../../utils/index'

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext)

  const total = cart.reduce(
    (accumulatedTotal, cartItem) => accumulatedTotal + cartItem.current_price,
    0
  )

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return cart.length ? (
    <Content>
      <CartTitle>
        <H2>Itens no carrinho:</H2>
      </CartTitle>
      {cart.map((product, index) => {
        return (
          <ShoppingCart>
            <Item key={index}>
              <ProductImage
                src={product.image}
                alt={product.name}
                title={product.name}
              />

              <Description>
                <ProductName>{product.name}</ProductName>
                <DescriptionContent>
                  Quantidade: <Unity>1</Unity>
                </DescriptionContent>

                <DescriptionContent>
                  Pack escolhido:
                  <PackUnities>{product.unities} unidades</PackUnities>
                </DescriptionContent>
                <PackPrices>
                  <PackCurrentyPrice>
                    Por: <Price>R${product.current_price}</Price>
                  </PackCurrentyPrice>
                  <PackDiscount>
                    Desconto:
                    <Price desc>
                      {calcPercentual(
                        product.original_price,
                        product.current_price
                      )}
                      %
                    </Price>
                  </PackDiscount>
                </PackPrices>
              </Description>
            </Item>
          </ShoppingCart>
        )
      })}
      <CartTotal>
        <H2>
          Total: <span>R${parseFloat(total).toFixed(2)}</span>
        </H2>
      </CartTotal>
    </Content>
  ) : (
    <Content>
      <CartTitle>
        <H2>Carrinho vazio!</H2>
      </CartTitle>
    </Content>
  )
}

const Price = styled.span`
  font-size: ${(props) => (props.big ? '25px' : 'normal')};
  color: ${(props) =>
    props.desc ? '#ff5d3c' : props.normal ? '#000' : '#4d54ff'};
  margin-left: 2px;
  font-weight: bold;
`

const PackPrices = styled.div`
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 15px;
`

const PackCurrentyPrice = styled.p`
  margin: 7px 7px 7px 0;
`
const PackDiscount = styled.p`
  margin: 7px 7px 0px 7px;
`
const PackUnities = styled.span`
  color: #000;
  font-weight: bold;
`

const Unity = styled.span`
  font-weight: bold;
`

const Content = styled.div`
  z-index: 99;
  position: absolute;
  right: 0;
  min-width: 40%;
  background-color: #d3d3d3;
  box-shadow: 4px 4px 6px 0 #e9e8e8;
  height: auto;
  overflow: scroll;
  max-height: 60vh;
`

const ShoppingCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const CartTitle = styled.div`
  background: #4d54ff;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const H2 = styled.h2`
  padding: 3%;
  margin: 0;
`

const CartTotal = styled.div`
  background-color: #aaa;
  color: #fff;
  text-align: center;

  bottom: 0;
`

const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 85%;
  justify-content: space-evenly;
  border: 1px solid #fff;
  margin: 3% auto;
  padding: 3%;
  border-radius: 5px;
  background-color: #fff;
`

const ProductImage = styled.img`
  height: 150px;
  width: 150px;
`
const ProductName = styled.p`
  font-weight: bold;
`
const Description = styled.div``
const DescriptionContent = styled.p`
  display: block;
  font-size: 14px;
  color: #43484d;
  font-weight: 400;
  &:first-child {
    margin-bottom: 5px;
  }
  &:last-child {
    font-weight: 300;
    margin-top: 8px;
    color: #86939e;
  }
`

export default Cart
