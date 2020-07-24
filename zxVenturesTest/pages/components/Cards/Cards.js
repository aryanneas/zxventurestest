import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import products from '../../../files/products.json'

import Card from './Card'
import Pagination from '../Pagination/Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import cestaImage from '../../../images/cesta.png'

const Cards = () => {
  const productsList = products.items

  const [brand, setBrand] = useState(productsList)
  const [result, setResult] = useState(productsList)

  useEffect(() => {
    setBrand(products.items)
  }, [productsList])

  const filterList = (event) => {
    let value = event.target.value
    let allBrands = brand,
      result = []
    result = allBrands.filter((brandName) => {
      return brandName.name.search(value) != -1
    })
    setResult(result)
  }

  return (
    <>
      <SearchFilter>
        <InputSearch
          name="productSearch"
          type="text"
          placeholder="BUSCAR PRODUTO"
          onChange={(e) => filterList(e)}
        />
        <SearchIcon icon="search" />
      </SearchFilter>
      {result.length ? (
        <Pagination arrayItems={result} itemsPerPage={8}>
          {result.map((product, index) => {
            return (
              <CardsContent>
                <Card product={product} key={index} />
              </CardsContent>
            )
          })}
        </Pagination>
      ) : (
        <NotFound>
          <NotFoundTitle>Produto não encontrado</NotFoundTitle>
          <ImgContainer>
            <img src={cestaImage} />
          </ImgContainer>
        </NotFound>
      )}
    </>
  )
}

const NotFound = styled.div`
  height: 75vh;
`
const NotFoundTitle = styled.h2`
  text-align: center;
  margin: 5% 0;
  font-size: 3em;
`
const ImgContainer = styled.div`
  justify-content: center;
  align-content: center;
  display: flex;
`
const CardsContent = styled.div``

const SearchFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`
const InputSearch = styled.input`
  margin-left: 10px;
  height: 40px;
  width: 350px;
`

const SearchIcon = styled(FontAwesomeIcon)`
  position: relative;
  right: 35px;
  color: #4d54ff;
  font-size: 20px;
`

export default Cards
