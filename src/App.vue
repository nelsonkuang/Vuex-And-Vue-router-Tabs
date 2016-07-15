<template>
  <div id="app">

  <h1>A Simple Vuex And Vue-router Based Example</h1>
  <div class="nav">
    <!-- use v-link to navigate -->
    <a v-link="{ path: '/foo' }">Go to Foo</a>
    <a v-link="{ path: '/bar' }">Go to Bar</a>
  </div>
  <!-- routed by links -->
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
}
h1 {
  color: #00BCD4;
  font-weight: 700;
}
.nav {
  text-align: left;
}
.nav a{
  text-align: center;
  padding: 20px;
  background-color: #ffdf7d;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  border-bottom: 1px solid #fff;
  display: inline-block;
}
.nav a.v-link-active {
  border-bottom: 1px solid #ffdf7d;;
}
#foo, #bar{
  background-color: #ffdf7d;
  padding: 20px;
  text-align: left;
}
</style>