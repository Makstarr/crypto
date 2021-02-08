
let currenciesIds = ["bitcoin", "ethereum"]
let allCoins = [
  {
    id: "dollar",
    symbol: "usd",
    price: 1,
  },
]
let ratesWereUpdatedAt = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

/*
            Конвертер
 */
var chartdata = {
  labels:[],
   datasets:[{
      label: "Загрузка",
        pointRadius: 0,
        borderWidth: 2,
        borderColor: '#7eb6ea',
       backgroundColor: '#3f3289', //'#483287',
     data: []
   }] 
}
var loaded = false

 /*
            Кошелек
 */
let walletWereUpdatedAt = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
let walletSum = 0
let walletChartData = [] 
let walletCoins = {
  "dollar":{
    symbol: "usd",
    amount: "100",
    price: "Загрузка..."
  },
  "bitcoin":{
    symbol: "btc",
    amount: "10",
    price: "Загрузка..."

  },
  "ethereum":{
    symbol: "eth",
    amount: "5",
    price: "Загрузка..."
  }
}




export default {
  chartdata,
  loaded,
  ratesWereUpdatedAt,
  allCoins,
  currenciesIds,

  walletCoins,
  walletChartData,
  walletSum,
  walletWereUpdatedAt
}