<template>
  <div id="app">
    <div>
      <span @click="activeIndex=1" style="margin-right: 20px;">store1</span>
      <span @click="activeIndex=2">store2</span>
    </div>
    <div v-if="activeIndex==1"><store1></store1></div>
    <div v-if="activeIndex==2"><store2></store2></div>
  </div>
</template>

<script>
import store1 from './components/store1.vue'
import store2 from './components/store2.vue'

export default {
  name: 'App',
  components: {
    store1,
    store2
  },
  data:()=>{
    return {
      activeIndex:1
    }
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
</style>
