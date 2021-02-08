/*
            Конвертер
 */
let SET_ALL_COINS_TIME = (state) => {
  state.ratesWereUpdatedAt = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
}

var LOADING_LINE_CHART = (state, payload) => {
  state.loaded = payload.state
}
var CLEAR_LINE_CHART = (state) => {
  state.chartdata.labels = []
  state.chartdata.datasets[0].data = []
}
var SET_LINE_CHART = (state, payload) => {
  state.chartdata.labels.push(payload.labels)
  state.chartdata.datasets[0].label = payload.label
  state.chartdata.datasets[0].data.push(payload.data)
}
var ADD_TO_ALL_COINS = (state, payload) => {
  state.allCoins = [
    ...state.allCoins,
    {
      id: payload.id,
      symbol: payload.symbol,
      price: payload.price
    },
  ];
}
var CLEAR_ALL_COINS = (state) => {
  state.allCoins = [{
    id: "dollar",
    symbol: "usd",
    price: 1,
  }, ]
}

/*
            Кошелек
 */
let SET_WALLET_TIME = (state) => {
  state.walletWereUpdatedAt = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
}

var SET_WALLET_PRICE = (state, payload) => {
  let amount = state.walletCoins[payload.id].amount
  state.walletCoins[payload.id].price = amount * payload.price
}

var SET_WALLET_SUM = (state) => {
  state.walletSum = 0
  for (let id of Object.keys(state.walletCoins)) {
    state.walletSum += state.walletCoins[id].price
  }
}
var SET_WALLET_CHART = (state) => {
  state.walletChartData = []
  for (let id of Object.keys(state.walletCoins)) {
    state.walletChartData = [...state.walletChartData,
      {label: state.walletCoins[id].symbol,
        value: state.walletCoins[id].price / state.walletSum * 100}
    ]
  }
}

var ADD_TO_WALLET = (state, payload) => {
  state.walletCoins[payload.id].amount = (state.walletCoins[payload.id].amount*1) + payload.amount
}

export default {
  SET_LINE_CHART,
  LOADING_LINE_CHART,
  CLEAR_LINE_CHART,
  ADD_TO_ALL_COINS,
  CLEAR_ALL_COINS,
  SET_ALL_COINS_TIME,
  SET_WALLET_TIME,
  ADD_TO_WALLET,
  SET_WALLET_SUM,
  SET_WALLET_CHART,
  SET_WALLET_PRICE
}