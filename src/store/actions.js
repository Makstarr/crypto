 /*
            Конвертер
 */
 var getCoins = ({
     commit,
     state
 }) => {
     async function updateCoins() {
         commit("CLEAR_ALL_COINS")
         for (let id of state.currenciesIds) {
             try {
                 const response = await fetch(
                     `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
                 );
                 const myJson = await response.json();
                 commit("ADD_TO_ALL_COINS", {
                     id: myJson["id"],
                     symbol: myJson["symbol"],
                     price: +myJson["market_data"]["current_price"]["usd"]
                 })
             } catch (error) {
                 console.error(error);
             }
         }
         commit("SET_ALL_COINS_TIME")
     }

     updateCoins()
 }

 var updateLineChart = ({
     commit,
     state
 }, payload) => {
     async function updateDiagrm(id, vs_currencie) {
         console.log(id, vs_currencie)
         commit("CLEAR_LINE_CHART")
         let id_2 = state.allCoins.find(coin => coin.symbol === vs_currencie).id
         let vs_currencie_1 = state.allCoins.find(coin => coin.id == id).symbol
         try {
             let response = null
             let myJson = null
             if (id === "dollar" && vs_currencie !== "usd") {
                 response = await fetch(
                     `https://api.coingecko.com/api/v3/coins/${id_2}/market_chart?vs_currency=usd&days=14`
                 );
                 myJson = await response.json();
                 for (let price of myJson["prices"]) {
                     commit("SET_LINE_CHART", {
                         labels: price[0],
                         label: `${vs_currencie_1} в ${vs_currencie}`,
                         data: 1 / price[1]
                     })
                 }
             } else {
                 if (id === "dollar" && vs_currencie == "usd") {
                     response = await fetch(
                         `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=btc&days=14`
                     );
                 } else {
                     response = await fetch(
                         `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${vs_currencie}&days=14`
                     );
                 }
                 myJson = await response.json();

                 for (let price of myJson["prices"]) {
                     commit("SET_LINE_CHART", {
                         labels: price[0],
                         label: `${vs_currencie_1} в ${vs_currencie}`,
                         data: price[1]
                     })
                 }
             }
         } catch (e) {
             console.error(e);
         }

         commit("LOADING_LINE_CHART", {
             state: true
         })
     }
     commit("LOADING_LINE_CHART", {
         state: false
     })
     updateDiagrm(payload.id, payload.vs_currencie)
 }

 /*
             Кошелек
  */
var sellFromWallet = ({
    commit
}, payload) => {
    commit("SELL_FROM_WALLET", {
        id: payload.id,
        amount: payload.amount
    })
}
 var addToWallet = ({
     commit
 }, payload) => {
     commit("ADD_TO_WALLET", {
         id: payload.id,
         amount: payload.amount
     })
 }

 var getWalletCoins = ({
     commit,
     state
 }) => {
     async function updateWallet() {
         console.log("update")
         for (let id of Object.keys(state.walletCoins)) {
             try {
                 if (id === "dollar") {
                     commit("SET_WALLET_PRICE", {
                         id: "dollar",
                         price: 1
                     })
                 } else {
                     const response = await fetch(
                         `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
                     );
                     const myJson = await response.json();
                     commit("SET_WALLET_PRICE", {
                         id: myJson["id"],
                         price: +myJson["market_data"]["current_price"]["usd"]
                     })
                 }
             } catch (error) {
                 console.error(error);
             }
         }
         commit("SET_WALLET_TIME")
         commit("SET_WALLET_SUM")
         commit("SET_WALLET_CHART")
     }
     updateWallet()
 }

 export default {
     updateLineChart,
     getCoins,
     addToWallet,
     sellFromWallet,
     getWalletCoins
 }