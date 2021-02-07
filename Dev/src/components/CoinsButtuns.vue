<template>
  <div class="coins-buttons">
    <ul>
      <li
        v-for="(coin, index) in allCoins"
        :key="index"
        @click="clickHandler(coin)"
        :class="[classHandler(coin.id)]"
      >
        {{ coin.symbol }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CoinsButtuns",
  props: {
    clickHandler: {
      type: Function,
    },
    classHandler: {
      type: Function,
    },
  },
  computed: {
    ...mapState(["allCoins"]),
  },
};
</script>
<style lang="sass">
.coins-buttons ul
  margin-bottom: 5px
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
</style>
