export const calcPercentual = (originalPrice, currentPrice) =>
  Math.round(((originalPrice - currentPrice) * 100) / originalPrice)

export const calcUnityPrice = (unities, packPrice) => {
  return parseFloat(packPrice / unities).toFixed(2)
}
