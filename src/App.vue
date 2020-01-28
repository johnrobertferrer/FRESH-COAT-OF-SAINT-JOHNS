<template>
  <div id="app">
    <MainComponent title="Fresh Coat of NW San Antonio" sub-title="Project Budget Versus Actual Expense"/>
    <b-button pill variant="outline-danger" id="clear-button">
      Clear <b-icon-backspace></b-icon-backspace>
    </b-button>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue'

export default {
  name: 'app',
  components: {
    MainComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 2.5vh 0;
  font-family: 'Roboto';
}

#clear-button {
  margin-top: 2.5vh;   
}
</style>
