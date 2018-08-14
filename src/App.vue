<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <div class="emit">
      <com-a></com-a>
    </div>
    <div class="vuex-wrapper">
      <comx-a></comx-a>
    </div>
  </div>
</template>

<script>
import comA from './components/comA'
import comxA from './components/comxA'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your VueX.js App'
    }
  },
  components: {
    comA,
    comxA
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vuex-wrapper {
  position: absolute;
  top: 400px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  border-top: 1px solid orange;
}
</style>
