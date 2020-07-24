import App from 'next/app'
import './globalCSS/global.css'
import { CartProvider } from '../CartContext'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </>
    )
  }
}

export default MyApp
