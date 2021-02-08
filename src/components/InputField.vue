<template>
    <input class="input" @keyup="inputChange" :value="inputValue" />
</template>

<script>
export default {
  name: "InputField",
  props: {
    inputValue: {
      type: [String, Number],
    },
    inputChange: {
      type: Function,
    },
  },
};
</script>

<style lang="sass">
.input
  margin-bottom: 5px
  background-color: #313131
  border: 1px solid #494949
  box-shadow: none
  padding: 0 12px
  font-size: 40px
  line-height: 91px
  width: 100%
  color:#D7D7D7
</style>
