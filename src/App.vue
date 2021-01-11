<template>
  <div id="app">
    <SmoothImageReveal title="Smooth Image Reveal"/>
    <Vue2Transitions title="Vue2-transitions library"/>
  </div>
</template>

<script>
import Vue2Transitions from './components/Vue2Transitions.vue'
import SmoothImageReveal from './components/SmoothImageReveal.vue'


export default {
  name: 'App',
  components: {
    Vue2Transitions,
    SmoothImageReveal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.section{
  height: 100vh;

}

html, body {
  margin: 0px !important;
  padding: 0px !important;
}

</style>
