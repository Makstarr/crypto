<template>
  <div class="calculator-wrapper">
    <div class="calculator">
      <ConverterCalculator />
    </div>
    <div class="calculator__chart">
      <ConverterChartContainer />
    </div>
  </div>
</template>

<script>
import ConverterCalculator from "../components/ConverterCalculator.vue";
import ConverterChartContainer from "../components/ConverterChartContainer.vue";

export default {
  name: "App",
  components: {
    ConverterCalculator,
    ConverterChartContainer,
  },
};
</script>
<style lang="sass">
.calculator 
  padding: 30px
.calculator__chart
  margin: 50px auto 0
</style>
