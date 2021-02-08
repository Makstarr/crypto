<!--<template>
<canvas class="chartjs-4" ref="uniqueName"></canvas>
</template>-->
<template>
  <div class="wallet-chart">
    <div class="wallet-chart__loading" v-if="walletChartData.length == 0">Обновление...</div>
    <vc-donut
      background="#313131"
      foreground="grey"
      :size="300"
      unit="px"
      :thickness="50"
      has-legend
      legend-placement="top"
      :sections="walletChartData"
      :start-angle="0"
      :auto-adjust-text-size="true"
    >
    </vc-donut>
  </div>
</template>

<script>
//import Chart from "chart.js";
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["walletSum", "walletChartData"]),
  },
  mounted() {
  },
};
</script>

<style lang="sass">
.cdc-legend-item span
  text-transform: uppercase
.cdc-legend-item-color
  width: 25px!important
  height: 15px!important
.wallet-chart
  background-color: #313131
  border-radius: 10px
  padding: 10px 0
  margin: 20px 30px 10px
  &__loading
    text-align: center
    line-height: 40px
  
@media screen and (max-width: 860px) 
  .wallet-chart
    padding: 10px 20px
    margin: 5px
</style>
