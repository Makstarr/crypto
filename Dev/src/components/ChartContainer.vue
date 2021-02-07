<template>
  <div class="container chart">
    <div class="chart__loding" v-if="loaded==false" >Загрузка...</div>
    <line-chart v-if="loaded" :chartdata="chartdata" :options="options" />
  </div>
</template>

<script>
import LineChart from "./Chart.vue";
import moment from 'moment';
import { mapState } from 'vuex';
//import { mapMutations } from 'vuex';
import { mapActions } from 'vuex'
export default {
  name: "LineChartContainer",
  components: { LineChart },
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
				animation: {
					duration: 800
				},
				scales: {
					xAxes: [{
						type: 'time',
						distribution: 'series',
            offset: true,
            gridLines: {
              color: '#A0A0A0'
                } ,
						ticks: {
							major: {
								enabled: true,
								fontStyle: 'bold'
              },
              
							source: 'data',
							autoSkip: true,
							autoSkipPadding: 75,
							maxRotation: 0,
							sampleSize: 100
						},
						afterBuildTicks: function(scale, ticks) {
							var majorUnit = scale._majorUnit;
							var firstTick = ticks[0];
							var i, ilen, val, tick, currMajor, lastMajor;

							val = moment(ticks[0].value);
							if ((majorUnit === 'minute' && val.second() === 0)
									|| (majorUnit === 'hour' && val.minute() === 0)
									|| (majorUnit === 'day' && val.hour() === 9)
									|| (majorUnit === 'month' && val.date() <= 3 && val.isoWeekday() === 1)
									|| (majorUnit === 'year' && val.month() === 0)) {
								firstTick.major = true;
							} else {
								firstTick.major = false;
							}
							lastMajor = val.get(majorUnit);

							for (i = 1, ilen = ticks.length; i < ilen; i++) {
								tick = ticks[i];
								val = moment(tick.value);
								currMajor = val.get(majorUnit);
								tick.major = currMajor !== lastMajor;
								lastMajor = currMajor;
							}
							return ticks;
						}
					}],
					yAxes: [{
						gridLines: {
              drawBorder: false,
              color: '#A0A0A0'
						},
						scaleLabel: {
							display: true,
							labelString: 'Стоимость ($)'
						}
					}]
        },
				tooltips: {
					intersect: false,
					mode: 'index',
					callbacks: {
						label: function(tooltipItem, myData) {
							var label = myData.datasets[tooltipItem.datasetIndex].label || '';
							if (label) {
								label += ': ';
							}
							label += parseFloat(tooltipItem.value).toFixed(2);
							return label;
						}
					}
				}
			}
  }),
   mounted() {
   this.updateDiagrm("ethereum", "usd")
  },
    computed: {
        ...mapState([
            'chartdata',
            'loaded'
        ])
    },
  methods: {...mapActions(["mutateState"]),
    async updateDiagrm(id_1, name_2){
      this.mutateState({id_1, name_2})
    }
  }
};
</script>

<style  lang="sass">
.container.chart
  padding: 20px
  width: 100%
  max-width: 800px
  height: 450px
  //display: flex
  //align-items: center
  background-color: #313131
  border: 1px solid #494949
  border-radius: 5px
  .chart__loding
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    font-size: 40px
    opacity: .5
</style>