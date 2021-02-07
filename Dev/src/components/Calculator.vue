<template>
  <div class="calculator">
    <div class="calculator__inputs">
      <div class="calculator__inputs-column">
        <div class="calculator__list-of-coins">
          <ul v-if="allCoins">
            <li
              v-for="(coin, index) in allCoins"
              :key="index"
              @click="changeRate_1(coin)"
              :class="[coinClass_1(coin.id)]"
            >
              {{ coin.symbol }}
            </li>
          </ul>
        </div>
        <div class="calculator__input">
          <input id="currencyInput" @keyup="calcInput_1" :value="calc1" />
        </div>
      </div>
      <div class="calculator__inputs-column">
        <div class="calculator__list-of-coins">
          <ul v-if="allCoins">
            <li
              @click="changeRate_2(coin)"
              v-for="(coin, index) in allCoins"
              :key="index"
              :class="[coinClass_2(coin.id)]"
            >
              {{ coin.symbol }}
            </li>
          </ul>
        </div>
        <div class="calculator__input">
          <input @keyup="calcInput_2" :value="calc2" />
        </div>
      </div>
    </div>
    <div class="calculator__chart">
    <ChartContainer />
    </div>
  </div>
</template>

<script>
import ChartContainer from "./ChartContainer.vue";
//import { mapState } from "vuex";
//import { mapMutations } from 'vuex'
import { mapActions } from "vuex";

export default {
  name: "Calculator",
  components: {
    ChartContainer,
  },
  data() {
    return {
      //dataHistory: [],
      calc1: "",
      calc2: "",
      rate_1: 1,
      rate_2: 1,
      firstInputSelected: true,
      // input: document.getElementById("currencyInput"),
      currenciesIds: ["bitcoin", "ethereum"],
      allCoins: [
        {
          id: "dollar",
          symbol: "usd",
          price: 1,
        },
      ],
      selectedCoin_1: "dollar",
      selectedCoin_2: "dollar",
    };
  },
  mounted() {
    this.fetchData();
  },

  methods: {
    ...mapActions(["mutateState"]),
    async updateDiagram(id_1, name_2) {
      this.mutateState({ id_1, name_2 });
    },
    coinClass_1(id) {
      return id == this.selectedCoin_1 ? "selected" : "";
    },
    coinClass_2(id) {
      return id == this.selectedCoin_2 ? "selected" : "";
    },
    changeRate_1(coin) {
      this.firstInputSelected = true;

      if (coin.id === "dollar") {
        let name_2 = this.allCoins.find((coin) => coin.id == this.selectedCoin_2).id;
        this.updateDiagram(coin.id, name_2);
      } else {
        let name_2 = this.allCoins.find((coin) => coin.id == this.selectedCoin_2).symbol;
        this.updateDiagram(coin.id, name_2);
      }
      this.rate_1 = coin.price;
      this.selectedCoin_1 = coin.id;
      this.calculate(this.calc1);
    },
    changeRate_2(coin) {
      this.firstInputSelected = true;
      this.rate_2 = coin.price;
      if (this.selectedCoin_1 === "dollar") {
        this.updateDiagram(this.selectedCoin_1, coin.id);
      } else {
        this.updateDiagram(this.selectedCoin_1, coin.symbol);
      }

      this.selectedCoin_2 = coin.id;
      this.calculate(this.calc1);
    },

    async fetchData() {
      let self = this;
      for (let id of this.currenciesIds) {
        try {
          const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
          );
          const myJson = await response.json();
          self.allCoins = [
            ...self.allCoins,
            {
              id: myJson["id"],
              symbol: myJson["symbol"],
              price: +myJson["market_data"]["current_price"]["usd"],
            },
          ];
        } catch (error) {
          console.error(error);
        }
      }
    },

    calcInput_1: function (event) {
      this.firstInputSelected = true;
      this.calculate(event);
    },
    calcInput_2: function (event) {
      this.firstInputSelected = false;
      this.calculate(event);
    },
    calculate: function (eventOrValue) {
      let value = 0;
      if (eventOrValue.target) {
        value += parseFloat(eventOrValue.target.value);
      } else {
        value += parseFloat(eventOrValue);
      }

      if (isNaN(value)) {
        this.calc2 = "";
        this.calc1 = "";
        return;
      }

      if (this.firstInputSelected) {
        this.calc1 = value;
        this.calc2 = ((value * this.rate_1) / this.rate_2).toFixed(5);
      } else {
        this.calc2 = value;
        this.calc1 = ((value * this.rate_2) / this.rate_1).toFixed(5);
      }
    },
  },
};
</script>

<style lang="sass">

.calculator
    padding: 30px
    
    &__inputs
        max-width: 800px
        margin: auto

        display: flex
        justify-content: space-between
        &-column
            display: flex
            flex-direction: column
            width: 45%
    &__list-of-coins ul
        display: flex
        border-radius: 5px
        overflow: hidden
        background-color: #313131
        border: 1px solid #494949
        padding: 0
        li
            transition: all .3s
            display: block
            padding: 5px 20px
            width: calc(100% / 3)
            text-align: center
            font-size: 20px
            line-height: 23px
            text-transform: uppercase
            cursor: pointer
        li:hover
            color: #fff
        li.selected
            background-color: #483287
    .calculator__input
        input
            background-color: #313131
            border: 1px solid #494949
            box-shadow: none
            padding: 0 12px
            font-size: 40px
            line-height: 91px
            width: 100%
            color:#D7D7D7
    .calculator__chart
        margin: 50px auto 0
</style>
