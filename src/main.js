import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

Vue.config.debug = true
/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: {
    App
  },
  render: h => h(App)
})

// install router
Vue.use(VueRouter)

// routing
const router = new VueRouter()

router.map({
  '/foo': {
    component: Foo
  },
  '/bar': {
    component: Bar
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/foo'
})

router.start({
  store,
  components: { App }
}, 'body')
