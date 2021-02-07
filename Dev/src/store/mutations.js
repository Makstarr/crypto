var loadingChart = (state, payload) => {
    state.loaded = payload.state
}
var clearChart = (state) => {
    state.chartdata.labels = []
    state.chartdata.datasets[0].data = []
}
var mutate = (state, payload) =>{
    state.chartdata.labels.push(payload.labels)
    state.chartdata.datasets[0].label = payload.label
    state.chartdata.datasets[0].data.push(payload.data)
/*
  state.chartdata = {
    labels:payload.labels,
    datasets:[{
       label: payload.label,
         pointRadius: 0,
         fill: false,
         borderColor: '#000000',
       //backgroundColor: '#f87979',
      data: payload.data
    }] 
  }
  */
}
export default {
    mutate,
    loadingChart,
    clearChart
}