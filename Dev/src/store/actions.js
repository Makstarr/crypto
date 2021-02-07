var mutateState = ({
    commit
}, payload) => {
    /*let chartdata = {
        labels:[],
         datasets:[{
            label: "Data One",
              pointRadius: 0,
              fill: false,
              borderColor: '#000000',
            //backgroundColor: '#f87979',
           data: []
         }]
    }*/
    async function updateDiagrm(id, vs_currencie) {
        commit("clearChart")
        try {
            let response = null
            let myJson = null
            // если переводим доллары в что-то тогда вместо vs_currencie идет id этого чего-то (пока не прикрутил в стэйты юазу валют)
            if (id === "dollar" && vs_currencie!=="usd") {
                if (id === "dollar" && vs_currencie == "dollar") {
                    response = await fetch(
                        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=btc&days=14`
                    );
                } else {
                console.log(id, vs_currencie)
                    response = await fetch(
                    `https://api.coingecko.com/api/v3/coins/${vs_currencie}/market_chart?vs_currency=usd&days=14`
                );
                    }
                    myJson = await response.json();

                for (let price of myJson["prices"]) {
                    commit("mutate", {
                        labels: price[0],
                        label: `${id} in ${vs_currencie}`,
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
                    commit("mutate", {
                        labels: price[0],
                        label: `${id} in ${vs_currencie}`,
                        data: price[1]
                    })
                }
            }
        } catch (e) {
            console.error(e);
        }

        commit("loadingChart", {
            state: true
        })

        /*
                    console.log(price);
                    chartdata.labels.push( price[0])
                    chartdata.datasets[0].data.push(
                           price[1]
                          )
                    }
                    chartdata.datasets[0].label = "bitcoin in usd"*/

    }
    commit("loadingChart", {
        state: false
    })
    updateDiagrm(payload.id_1, payload.name_2)
}

export default {
    mutateState
}