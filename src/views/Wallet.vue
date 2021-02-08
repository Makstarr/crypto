<template>
  <div class="main-container">
    <div class="main-container__column wallet-numbers-column">
      <WalletSum />
      <WalletCoins />
    </div>
    <div class="main-container__column">
      <WalletChart />
      <WalletBuy />
    </div>
  </div>
</template>

<script>
import WalletSum from "../components/WalletSum.vue";
import WalletChart from "../components/WalletChart.vue";
import WalletCoins from "../components/WalletCoins.vue";
import WalletBuy from "../components/WalletBuy.vue";

import { mapActions } from "vuex";

export default {
  name: "Wallet",
  components: {
    WalletSum,
    WalletChart,
    WalletCoins,
    WalletBuy,
  },
  mounted(){
    this.getWallet()
  },
  methods: {
    ...mapActions(["getWalletCoins"]),
    getWallet(){
      console.log("SET_WALLET_PRICE")
      this.getWalletCoins()
    }
  }
  
  
};
</script>
<style lang="sass">
@media screen and (max-width: 860px)
    .main-container__column.wallet-numbers-column
        flex-direction: row
@media screen and (max-width: 600px)
    .main-container__column.wallet-numbers-column
        flex-direction: column
        align-items: center
        padding-top: 30px
</style>
