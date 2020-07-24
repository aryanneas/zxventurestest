import React from 'react'

import Header from '../pages/components/Header/Header'
import Cards from '../pages/components/Cards/Cards'
import Footer from '../pages/components/Footer/Footer'

import { CartProvider } from '../CartContext'

const meuApp = () => {
  return (
    <CartProvider>
      <Header />
      <Cards />
      <Footer />
    </CartProvider>
  )
}
export default meuApp
