<template>
  <ul class="wallet-coins">
    <li 
    v-for="(coin, index) in walletCoins" 
    :key="index" 
    >
        <div class="wallet-coins__symbol">
          {{ coin.symbol }}
        </div>
        <div class="wallet-coins__in-usd">
            {{(coin.price*1).toFixed(2) }} $
            <span class="smallLabel" v-if="coin.symbol != 'usd'"> {{coin.rate}}$ по курсу на {{walletWereUpdatedAt}}</span>
        </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "WalletCoins",
  computed: {
    ...mapState(["walletCoins", "walletWereUpdatedAt"]),
  },
};
</script>
<style lang="sass">
.wallet-coins
  list-style: none
  margin: 0
  padding: 0
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: stretch
  min-height: 60%
  li
    display: flex
  &__symbol
    font-size: 65px
    line-height: 60px
    text-transform: uppercase
    margin: 10px 20px 10px 0
  &__in-usd
    display: flex
    flex-direction: column
    font-size: 35px
    line-height: 40px
    margin-top: 30px
    font-weight: bold
    .smallLabel
      margin-top: 0px
      line-height: 12px
      font-weight: normal
@media screen and (max-width: 1000px) 
  .wallet-coins
    margin: 0 0 0 30px
    &__symbol
      font-size: 55px
      line-height: 40px
      margin: 10px 10px 10px 0
    &__in-usd
      font-size: 30px
      margin-top: 20px
@media screen and (max-width: 860px) 
  .wallet-coins
    margin: 15px 0px
    min-height: 160px
    justify-content: space-between
    width: 50%
    &__symbol
      font-size: 25px
      line-height: 20px
      margin: 10px 5px 
    &__in-usd
      font-size: 24px
      margin-top: 0px
      .smallLabel
        font-size: 10px
        font-weight: normal
@media screen and (max-width: 600px)
  .wallet-coins
    width: 100%
    align-items: center
</style>