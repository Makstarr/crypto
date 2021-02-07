<template>
  <div class="main-container">
    <div class="main-container__column">
      <div class="smallLabel">Выберите валюту для обмена</div>
      <CoinsButtuns
        v-if="allCoins"
        :clickHandler="coinRate_1"
        :classHandler="coinClass_1"
      />
      <div class="smallLabel">Введите сумму</div>
      <InputField 
      :inputChange="changeInputValue_1" 
      :inputValue="inputValue_1" 
      />
    </div>
    <div class="main-container__column">
      <div class="smallLabel">Курс обновлен в {{ ratesWereUpdatedAt }}</div>
      <CoinsButtuns
        v-if="allCoins"
        :clickHandler="coinRate_2"
        :classHandler="coinClass_2"
      />
      <div class="smallLabel">Сумма после перевода</div>
      <InputField 
      :inputChange="changeInputValue_2" 
      :inputValue="inputValue_2" 
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import CoinsButtuns from "./CoinsButtuns";
import InputField from "./InputField";

export default {
  name: "ConverterCalculator",
  components: {
    CoinsButtuns,
    InputField
  },
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
  mounted() {
    this.getCoins();
  },
  computed: {
    ...mapState(["currenciesIds", "allCoins", "ratesWereUpdatedAt"]),
  },
  methods: {
    ...mapActions(["updateLineChart", "getCoins", "coinClass"]),
    // Классы для активных кнопок валюты
    coinClass_1(id) {
      return id == this.selectedCoin_1 ? "selected" : "";
    },
    coinClass_2(id) {
      return id == this.selectedCoin_2 ? "selected" : "";
    },
    // Смена курсов и активных кнопок
    coinRate_1(coin) {
      this.firstInputSelected = true;
      let vs_currencie = this.allCoins.find((coin) => coin.id == this.selectedCoin_2)
        .symbol;
      this.updateLineChart({ id: coin.id, vs_currencie });
      //
      this.rate_1 = coin.price;
      this.selectedCoin_1 = coin.id;
      this.calculate(this.inputValue_1);
    },
    coinRate_2(coin) {
      this.firstInputSelected = true;
      this.rate_2 = coin.price;
      this.updateLineChart({ id: this.selectedCoin_1, vs_currencie: coin.symbol });
      this.selectedCoin_2 = coin.id;
      this.calculate(this.inputValue_1);
    },
    // Пересчет значений
    changeInputValue_1: function (event) {
      this.firstInputSelected = true;
      this.calculate(event);
    },
    changeInputValue_2: function (event) {
      this.firstInputSelected = false;
      this.calculate(event);
    },
    // Функция пересчета значений
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
        this.inputValue_2 = ((value * this.rate_1) / this.rate_2).toFixed(5);
      } else {
        this.inputValue_2 = value;
        this.inputValue_1 = ((value * this.rate_2) / this.rate_1).toFixed(5);
      }
    },
  },
};
</script>
