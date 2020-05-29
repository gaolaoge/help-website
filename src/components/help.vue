<template>
  <div class="help-wrapper">
    <img src="@/assets/banner.png" alt="" class="banner">
    <div class="l">
      <div class="ll">
        <span class="basee">帮助中心 > </span><span class="direction">{{ direction }}</span>
      </div>
    </div>
    <div class="base">
      <!--导航-->
      <div class="nav" :style="{ marginTop: marginTopVal + 'px' }">
        <el-row class="tac">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo u"
            unique-opened
            @open="handleOpen"
            @close="handleClose">
            <!--产品说明-->
            <el-menu-item index="1" @click="$router.push('/help/explanation')">
              <span slot="title">产品说明</span>
            </el-menu-item>
            <!--问题解答-->
            <el-submenu index="2">
              <template slot="title">
                <span>问题解答</span>
              </template>
              <!--会员机制-->
              <el-menu-item index="2-1" @click="$router.push('/help/problem/vip')">会员机制</el-menu-item>
              <!--常见问题-->
              <el-menu-item index="2-2" @click="$router.push('/help/problem/commonProblem')">常见问题</el-menu-item>
              <!--其它问题-->
              <el-menu-item index="2-3" @click="$router.push('/help/problem/other')">其它问题</el-menu-item>
            </el-submenu>
            <!--视频教程-->
            <el-submenu index="3">
              <template slot="title">
                <span>视频教程</span>
              </template>
              <el-menu-item index="3-1" @click="$router.push('/help/video')">网页端</el-menu-item>
            </el-submenu>
            <!--操作手册-->
            <el-submenu index="4">
              <template slot="title">
                <span>操作手册</span>
              </template>
              <el-menu-item index="4-1"  @click="$router.push('/help/manual')">登录注册</el-menu-item>
              <el-menu-item index="4-2"  @click="$router.push('/help/manual')">新建任务</el-menu-item>
              <el-menu-item index="4-3"  @click="$router.push('/help/manual')">账号充值</el-menu-item>
              <el-menu-item index="4-4"  @click="$router.push('/help/manual')">账单查询</el-menu-item>
              <el-menu-item index="4-5"  @click="$router.push('/help/manual')">资产管理</el-menu-item>
            </el-submenu>
            <!--用户协议-->
            <el-menu-item index="5" @click="$router.push('/help/protocal')">
              <span slot="title">用户协议</span>
            </el-menu-item>
            <!--反馈建议-->
            <el-menu-item index="6" @click="$router.push('/help/opinion')">
              <span slot="title">反馈建议</span>
            </el-menu-item>
          </el-menu>

        </el-row>
      </div>
      <div class="helpBox u">
        <div class="v">
          <router-view />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'help',
    data(){
      return {
        direction: '',
        marginTopVal: 0
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      // 点击事件
      trigger(group,item){

      },
      scrollFun(){
        if(!!!document.documentElement.scrollTop) return false
        if(document.documentElement.scrollTop > 363) this.marginTopVal = document.documentElement.scrollTop - 363 +  80
        else this.marginTopVal = 0
      }
    },
    watch: {
      '$route': {
        handler: function(val){
          switch(val.path){
            case '/help/explanation':
              this.marginTopVal = 0
              document.documentElement.scrollTop = 0
              this.direction = '产品说明'
              break
            case '/help/problem':
            case '/help/problem/vip':
              this.direction = '问题解答 > 会员机制'
              break
            case '/help/problem/commonProblem':
              this.direction = '问题解答 > 常见问题'
              break
            case '/help/problem/other':
              this.direction = '问题解答 > 其它问题'
              break
            case '/help/problem/video':
              this.marginTopVal = 0
              document.documentElement.scrollTop = 0
              this.direction = '视频教程 > 页面端'
              break
            case '/help/protocal':
              this.marginTopVal = 0
              document.documentElement.scrollTop = 0
              this.direction = '用户协议'
              break
            case '/help/opinion':
              this.marginTopVal = 0
              document.documentElement.scrollTop = 0
              this.direction = '意见反馈'
              break
          }
        },
        immediate: true,
        deep: true
      },

    },
    mounted() {
      window.addEventListener("scroll", this.scrollFun);
    },
  }
</script>

<style scoped lang="less">
  .help-wrapper {
    user-select: none;
    .banner {
      display: block;
      margin: 0px auto;
    }
    .l {
      height: 33px;
      width: 1920px;
      background-color: rgba(243, 246, 255, 1);
      margin: 0px auto 50px;
      .ll {
        margin: 0px auto;
        width: 1240px;
        .basee {
          font-family: PingFangSC-Regular,PingFang SC;
          font-size: 12px;
          color: rgba(28, 36, 47, 0.59);
          line-height: 33px;
          font-weight: 500;
        }
        .direction {
          font-size: 12px;
          font-family: PingFangSC-Regular,PingFang SC;
          font-weight: 500;
          color: rgba(39, 95, 239, 1);
          line-height: 33px;
        }
      }
    }
    .base {
      margin: 0px auto;
      width: 1240px;
      display: flex;
      .nav {
        position: absolute;
        /*width: 200px;*/
        transition: all 0.6s;
        .tac {
          background-color: transparent;
          width: 200px;
          /*margin-right: 80px;*/
          height: calc(100vh - 61px);
          .el-menu-vertical-demo {
            height: 100%;
          }
        }
      }
      .helpBox {
        margin-left: 200px;
        flex-grow: 1;
        .v {
          margin: 0px auto 120px;
          padding: 0px 80px;
          box-sizing: border-box;
          min-height: 852px;
          border: 1px solid rgba(201, 208, 225, 0.59);
        }
      }
    }
  }
  a { text-decoration: none; }
  /deep/.el-menu-vertical-demo > .el-menu-item,
  /deep/.el-menu-vertical-demo > .el-submenu {
    position: relative;
    text-align: center;
    color: rgba(28, 36, 47, 0.7);
    font-size:18px;
    font-weight: 600;
    width: 120px;
    &::after {
      position: absolute;
      left: 8px;
      top: 18px;
      content: '';
      width: 4px;
      height: 20px;
      background-color: rgba(255, 106, 115, 1);
    }
  }
  /deep/.el-menu-vertical-demo > .el-submenu .el-menu-item {
    padding: 0px!important;
    width: 94px;
    min-width: 94px;
    text-align: right;
    font-weight: 400;
  }
  /deep/.el-submenu__title,
  /deep/.el-menu-item:focus,
  /deep/.el-menu-item:hover {
    background-color: transparent;
  }
  /deep/.el-submenu__title {
    span {
      font-size: 18px;
      color: rgba(28, 36, 47, 0.7);
    }
    .el-submenu__icon-arrow {
      right: 0px;
    }
  }
  /deep/.el-menu-item.is-active {
    color: #409EFF;
  }
    // 滚动条
  .u {
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      /*高宽分别对应横竖滚动条的尺寸*/
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(102, 89, 89, 0.2);
      background: #9e9797;
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      -webkit-box-shadow: inset 0 0 5px rgba(138, 129, 129, 0.2);
      border-radius: 10px;
      background: rgba(226, 221, 221, 0.2);
    }
  }
  /deep/.el-menu {
    position: relative;
    border-right: 0px;
    background-color: transparent;
    &.u::before {
      position: absolute;
      top: 0px;
      content: '';
      width: 120px;
      height: 1px;
      background-color: rgba(201, 208, 225, 0.5);
    }
  }

  @media screen and (max-width: 1920px) {
    .help-wrapper .banner {
      margin-left: calc((100vw - 1920px)/2);
    }
    .help-wrapper .l {
      width: 100vw;
    }
  }
  @media screen and (max-width: 1300px) {
    .help-wrapper .l .ll {
      width: 96vw;
    }
    .help-wrapper .base {
      width: calc(100vw - 4px);
      .helpBox .v {
        padding: 0px 4vw;
      }
    }
  }

</style>
