<template>
  <div class="problem-wrapper">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'problem',
    data(){
      return {



      }
    }
  }
</script>

<style lang="less">
  ol { margin-left: 40px; }
  .item {
    margin-bottom: 20px;
    p {
      font-size: 16px;
      line-height: 30px;
      &.q {
        color: rgba(28,36,47,1);
        span {
          color: rgba(255, 106, 115, 1);
        }
      }
      &.a {
        color: rgba(28, 36, 47, 0.79);
        span {
          color: rgba(53, 194, 155, 1);
        }
      }
    }
  }
</style>
