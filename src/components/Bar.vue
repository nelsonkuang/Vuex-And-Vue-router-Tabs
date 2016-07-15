<template>
<div id="bar">
  <p>{{ bar }}</p>
  <input v-model="bar" @blur="barChange(bar)">
</div>
</template>


<script>
import { barChange } from '../actions'
export default {
  vuex: {
    getters: {
      barValue: state => state.bar
    },
    actions: { barChange }
  },
  data () {
    return {
      bar: this.barValue
    }
  }
}
</script>