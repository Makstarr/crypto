<template>
<div class="wallet-sum">
<h1 class="small-title">Текущая стоимость потфеля</h1>
  <div class="wallet-sum__sum">
{{walletSum.toFixed(2)}} <span>USD</span>
  </div>
  <div class="smallLabel">По курсу на {{walletWereUpdatedAt}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "WalletSum",
  computed: {
    ...mapState(["walletSum", "walletWereUpdatedAt"]),
  }
};
</script>

<style lang="sass">
.wallet-sum
  margin: 80px 0 0px
  &__sum
    font-size: 60px
    line-height: 60px
    font-weight: bold
    span
      font-size: 35px
      font-weight: normal
@media screen and (max-width: 1000px) 
  .wallet-sum
    width: 50%
    margin: 60px 30px 0px
    &__sum
      font-size: 45px
      line-height: 45px
      span
        font-size: 25px
@media screen and (max-width: 860px) 
  .wallet-sum
    margin: 0 10px 0px
    display: flex
    flex-direction: column
    justify-content: center
    &__sum
      font-size: 30px
      line-height: 30px
@media screen and (max-width: 600px)
  .wallet-sum
    width: 100%
    align-items: center
    &__sum
      font-size: 45px
      line-height: 50px
      span
          font-size: 35px
@media screen and (max-width: 480px)
  .wallet-sum
    &__sum
      font-size: 25px
      line-height: 30px
      span
        font-size: 25px
</style>