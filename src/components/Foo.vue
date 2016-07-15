<template>
<div id="foo">
  <p>{{ foo }}</p>
  <input v-model="foo" @blur="fooChange(foo)">
</div>
</template>

<script>
import { fooChange } from '../actions'
export default {
  vuex: {
    getters: {
      fooValue: state => state.foo
    },
    actions: { fooChange }
  },
  data () {
    return {
      foo: this.fooValue
    }
  }
}
</script>