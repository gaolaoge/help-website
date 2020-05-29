<template>
  <div class="layout-wrapper">
    <header-dom />
    <section class="main">
      <router-view />
    </section>
    <footer-dom />
  </div>
</template>

<script>
  import {
    headerDom,
    footerDom
  } from './components'
  export default {
    name: 'layout',
    data(){
      return {

      }
    },
    components: {
      headerDom,
      footerDom
    },
    methods: {

    }
  }
</script>

<style scoped lang="less">
  .layout-wrapper {
    .main {
      min-height: calc(100vh - 80px - 249px);
    }
  }
</style>
