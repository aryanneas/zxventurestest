import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../../CartContext'

import { calcPercentual, calcUnityPrice } from '../../utils/index'

const Card = ({ product }) => {
  const [cart, setCart] = useContext(CartContext)
  const [pack, setPack] = useState(product.packs[1])
  const [text, setText] = useState('Adicionar ao carrinho')
  const [disabledValue, setDisabledValue] = useState(false)

  const addToCart = (product) => {
    const productWithPackSelected = { ...product, ...pack }

    setCart([...cart, productWithPackSelected])
    setText('Adicionado')
    setDisabledValue(true)
  }

  return (
    <>
      <CardContent>
        <CardItem>
          <Image src={product.image} alt={product.name} title={product.name} />

          <ProductName>{product.name}</ProductName>
          <Pack>
            {product.packs.map((pack) => (
              <PackUnity onClick={() => setPack(pack)}>
                {pack.unities}
              </PackUnity>
            ))}
          </Pack>
          {pack ? (
            <>
              <TagOff>
                <TextOff>+15 OFF!</TextOff>
              </TagOff>
              <PackPrices>
                <PackOriginalPrice>
                  De:<Price normal>R${pack.original_price}</Price>
                </PackOriginalPrice>
                <PackCurrentyPrice>
                  Por: <Price>R${pack.current_price}</Price>
                </PackCurrentyPrice>
                <PackDiscount>
                  Desconto:
                  <Price desc>
                    {calcPercentual(pack.original_price, pack.current_price)}%
                  </Price>
                </PackDiscount>
              </PackPrices>
              <p>
                A unidade sai por
                <Price big>
                  R$ {calcUnityPrice(pack.unities, pack.current_price)}
                </Price>
              </p>
            </>
          ) : null}

          <AddToCart
            disabled={disabledValue}
            onClick={() => addToCart(product)}
          >
            {text}
          </AddToCart>
        </CardItem>
      </CardContent>
    </>
  )
}

const CardContent = styled.div`
  width: 95%;
  margin: 0 auto;
  min-height: calc(100vh - 625px);
`
const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em;
  color: #474445;
  border-radius: 5px;
  border: 2px solid #e9e8e8;
  box-shadow: 4px 4px 6px 0 #e9e8e8;
  height: 450px;
`
const TagOff = styled.div`
  position: absolute;
  margin-left: 200px;
  background-color: #ff5d3c;
  color: #fff;

  border-radius: 100%;
  width: 60px;
  height: 60px;
  display: flex;
`

const TextOff = styled.p`
  align-self: center;
  font-weight: bolder;
  padding: 20%;
`

const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
`

const ProductName = styled.p`
  font-weight: bold;
  text-align: center;
`
const ProductCategory = styled.p``

const Pack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const PackUnity = styled.span`
  border-radius: 100px;
  border: 1px solid #4d54ff;
  width: 20px;
  height: 20px;
  text-align: center;
  padding: 15px;
  margin: 0 5px;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    background-color: #3c3f80;
    border: #3c3f80;
    color: #fff;
    cursor: pointer;
  }
`
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
  border-bottom: 1px solid rgba(71, 68, 69, 0.1);
`

const PackOriginalPrice = styled.p`
  margin: 7px;
`
const PackCurrentyPrice = styled.p`
  margin: 7px;
`
const PackDiscount = styled.p`
  margin: 7px;
`

const AddToCart = styled.button`
  text-transform: uppercase;
  padding: 15px 30px;
  color: #fff;
  background-color: #4d54ff;
  border-radius: 5px;
  border-style: none;
  transition: 0.3s;
  margin-top: 15px;
  &:hover {
    cursor: pointer;
    background-color: #3c3f80;
  }
`
export default Card
