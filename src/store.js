import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  foo: 'This is foo!',
  bar: 'This is bar!'
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  FOOCHANGE (state, foo) {
    state.foo = foo
  },
  BARCHANGE (state, bar) {
    state.bar = bar
  },
  SETSTATE (state, foo, bar) {
    state.foo = foo
    state.bar = bar
  }
}

// A Vuex instance is created by combining the state, the actions,
// and the mutations. Because the actions and mutations are just
// functions that do not depend on the instance itself, they can
// be easily tested or even hot-reloaded (see counter-hot example).
export default new Vuex.Store({
  state,
  mutations
})
