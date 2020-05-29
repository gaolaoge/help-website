<template>
  <div id="app">
    <win />
  </div>
</template>

<script>
  import win from '@/layout/index'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    win
  },
  methods: {

  }
}
</script>

<style>
  @import 'assets/commen.less';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    overflow: hidden;
  }
  * {
    margin: 0px;
    padding: 0px;
  }
</style>
