<template>
  <div class="wallet-form">
    <h2 class="small-title">Пополнить кошелек</h2>
    <div class="smallLabel">Выберите валюту</div>
    <CoinsButtuns
      v-if="allCoins"
      :clickHandler="coinRate_1"
      :classHandler="coinClass_1"
    />
    <div class="smallLabel">Введите сумму</div>
    <InputField :inputChange="changeInputValue_1" :inputValue="inputValue_1" />
    <div class="smallLabel">В USD по курсу на {{ ratesWereUpdatedAt }}</div>
    <InputField :inputChange="changeInputValue_2" :inputValue="inputValue_2" />
    <button type="submit" class="button" v-if="inputValue_2 > 0" @click="makeTransaction">
      Купить
    </button>

    <button class="button" v-if="inputValue_2 <= 0" :disabled="true">
      Введите сумму
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import CoinsButtuns from "./CoinsButtuns";
import InputField from "./InputField";

export default {
  name: "WalletBuy",
  data() {
    return {
      inputValue_1: "",
      inputValue_2: "",
      rate_1: 1,
      rate_2: 1,
      firstInputSelected: true,
      selectedCoin_1: "dollar",
      selectedCoin_2: "dollar",
    };
  },
  components: {
    CoinsButtuns,
    InputField,
  },
  mounted() {
    this.getCoins();
  },
  computed: {
    ...mapState(["allCoins", "ratesWereUpdatedAt"]),
  },
  methods: {
    ...mapActions(["getCoins", "addToWallet", "getWalletCoins"]),
    makeTransaction() {
      this.addToWallet({ id: this.selectedCoin_1, amount: this.inputValue_1 });
      this.inputValue_1 = "";
      this.inputValue_2 = "";
      this.getWalletCoins();
    },
    // Классы для активных кнопок валюты
    coinClass_1(id) {
      return id == this.selectedCoin_1 ? "selected" : "";
    },
    coinRate_1(coin) {
      this.rate_1 = coin.price;
      this.selectedCoin_1 = coin.id;
      this.calculate(this.inputValue_1);
    },
    changeInputValue_1: function (event) {
      this.firstInputSelected = true;
      this.calculate(event);
    },
    changeInputValue_2: function (event) {
      this.firstInputSelected = false;
      this.calculate(event);
    },
    calculate: function (eventOrValue) {
      let value = 0;
      // при изменении полей
      if (eventOrValue.target) {
        value += parseFloat(eventOrValue.target.value);
        // при изменении валют
      } else {
        value += parseFloat(eventOrValue);
      }
      if (isNaN(value)) {
        this.inputValue_2 = "";
        this.inputValue_1 = "";
        return;
      }
      if (this.firstInputSelected) {
        this.inputValue_1 = value;
        this.inputValue_2 = ((value * this.rate_1) / this.rate_2).toFixed(6);
      } else {
        this.inputValue_2 = value;
        this.inputValue_1 = ((value * this.rate_2) / this.rate_1).toFixed(6);
      }
    },
  },
};
</script>

<style lang="sass">

.button, .button:disabled
  border: none
  box-shadow: none
  transition: all .3s
  background-color: #483287
.button
  color: #D7D7D7
  font-size: 20px
  line-height: 35px
  cursor: pointer
  &:hover
    color: #fff
    background-color: #583BAB
  &:disabled
    opacity: .8
  &:disabled:hover
    color: #fff
    background-color: #151515
    cursor: not-allowed

.wallet-form
  padding: 10px 30px
  .input
    font-size: 40px
    line-height: 50px
  .button
    width: 100%
    border-radius: 5px
    margin: 5px 0
</style>
