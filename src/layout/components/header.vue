<template>
  <!--<div class="wrapper-header" :style="{top: topVal + 'px'}">-->
  <div class="wrapper-header">
    <div class="g">
      <header>
        <!--logo-->
        <img src="@/assets/header-logo.png" alt="" class="logo" @click="changePath('0')">
        <!--导航-->
        <nav>
          <!--<el-menu :default-active="activeIndex"-->
          <!--class="el-menu-demo"-->
          <!--mode="horizontal"-->
          <!--@select="handleSelect">-->
          <!--<el-menu-item v-for="name,index in navList"-->
          <!--:key="index"-->
          <!--:index="String(index)">-->
          <!--{{ name }}-->
          <!--</el-menu-item>-->
          <!--</el-menu>-->
          <ul>
            <li v-for="name,index in navList"
                :key="index"
                class="nav-li"
                :class="[{'active': activeIndex == index}]"
                @click="changePath(index)">
              <span>{{ name }}</span>
            </li>
          </ul>
          <!--帮助-->
          <span class="helpBtn" :class="[{'active': $route.path == '/help/explanation'}]" @click="getHelp">{{ helpText }}</span>
          <!--去体验-->
          <span class="experience">
          <span>{{ experienceText }}</span>
          <img src="@/icons/header-enter.png" alt="">
        </span>
        </nav>
        <!--联系-->
        <div class="contact">
          <div class="q" @click="qq">
            <img src="@/icons/qq.png" alt="" class="qq">
            <img src="@/icons/qqH.png" alt="" class="qh">
          </div>
          <div class="p" @mouseover="h = true" @mouseout="h = false">
            <img src="@/icons/phone.png" alt="" class="pp">
            <img src="@/icons/phoneH.png" alt="" class="ph">
          </div>
        </div>
        <div class="c" :class="[{'active': h}]" @mouseover="h = true" @mouseout="h = false">
          <span>{{ phone }}</span>
        </div>
        <!--返回首部-->
        <div class="backToHeader" :class="{'hide': hideIcon}" @click="scrollFun('back')">
          <img src="@/icons/backToHeaderIcon.png" alt="" class="backToHeaderIcon">
          <img src="@/icons/backToHeaderIconHover.png" alt="" class="backToHeaderIconHover">
        </div>
      </header>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'headerDom',
    data(){
      return {
        navList: ['首页','政策支持','影视动画渲染','价格'],
        activeIndex: '0',
        helpText: '帮助',
        experienceText: '去体验',
        phone: '13176527028',
        h: false,
        topVal: 0,
        hideIcon: true
      }
    },
    watch: {
      '$route': {
        handler: function (val) {
          this.activeIndex = null
          switch(val.name) {
            case 'home':
              this.activeIndex = '0'
              break
            case 'policySupport':
              this.activeIndex = '1'
              break
            case 'animationRendering':
              this.activeIndex = '2'
              break
            case 'price':
              this.activeIndex = '3'
              break
          }
        },
        immediate: true,
        deep: true
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        if(key == '0') this.$router.push('/')
        if(key == '4') this.$router.push('/help')
      },
      // 跳转
      changePath(index){
        this.activeIndex = index
        if(index == '0') this.$router.push('/')                       // 首页
        if(index == '1') this.$router.push('/policySupport')          // 政策支持
        if(index == '2') this.$router.push('/animationRendering')     // 影视动画渲染
        if(index == '3') this.$router.push('/price')                  // 价格
        // if(key == '4') this.$router.push('/help')
        document.documentElement.scrollTop = 0
        this.topVal = 0
      },
      // 跳转到帮助
      getHelp(){
        this.$router.push('/help')
        this.activeIndex = null
        document.documentElement.scrollTop = 0
        this.topVal = 0
      },
      qq() {
        let a = document.createElement('A')
        a.target = '_blank'
        a.href = 'http://wpa.qq.com/msgrd?v=3&uin=183412808&site=qq&menu=yes'
        a.style.display = 'none'
        document.body.appendChild(a)
        a.click()
          // <!--<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=183412808&site=qq&menu=yes">-->
          // <!--<img border="0" src="http://wpa.qq.com/pa?p=2:183412808:52" alt="点击这里给我发消息" title="点击这里给我发消息"/>-->
          // <!--</a>-->
      },
      scrollFun(val){
        if(document.documentElement.scrollTop == 0) this.hideIcon = true
        else this.hideIcon = false
        if(val == 'back'){
          let speed,
              interValFun = () => {
                speed = document.documentElement.scrollTop / 5
                if(document.documentElement.scrollTop >= 1){ document.documentElement.scrollTop -= speed; window.requestAnimationFrame(interValFun) }
                else{ document.documentElement.scrollTop = 0; window.cancelAnimationFrame(interValFun) }
              }
          window.requestAnimationFrame(interValFun)

          this.topVal = 0
          this.$emit('backToHeader')
          return false
        }
        if(document.documentElement.scrollTop >= 80) this.topVal = document.documentElement.scrollTop
        else this.topVal = 0
      }
    },
    mounted() {
      window.addEventListener("scroll", this.scrollFun)
    }
  }
</script>

<style scoped lang="less">
  .wrapper-header {
    position: relative;
    top: 0px;
    z-index: 9;
    user-select: none;
    height: 80px;
    .g {
      width: 100vw;
      position: fixed;
      top: 0px;
      left: 0px;
      background-color: rgba(256, 256, 256, 1);
      box-shadow: 0px 0px 10px 1px rgba(7, 66, 162, 0.2);
      header {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0px auto;
        width: 1250px;
        .logo {
          cursor: pointer;
        }
        ul {
          display: inline-block;
          .nav-li {
            display: inline-block;
            list-style: none;
            width:108px;
            height:36px;
            border-radius: 20px;
            background-color: rgba(249, 250, 255, 0);
            border: 1px solid rgba(227, 232, 244, 0);
            text-align: center;
            cursor: pointer;
            margin-left: 10px;
            span {
              font-size: 14px;
              color: rgba(7, 66, 162, 1);
              line-height: 36px;
            }
            &.active,
            &:hover {
              background-color: rgba(249, 250, 255, 1);
              border: 1px solid rgba(227, 232, 244, 1);
            }
          }
        }
        .helpBtn {
          font-size: 14px;
          color: rgba(127, 141, 179, 1);
          margin-left: 40px;
          cursor: pointer;
          &.active {
            font-weight: 600;
            color: rgba(57, 72, 112, 1);
          }
        }
        .experience {
          display: inline-block;
          width: 108px;
          height: 36px;
          background-color: rgba(7, 66, 162, 1);
          border-radius: 20px;
          border: 1px solid rgba(7, 66, 162, 1);
          text-align: center;
          cursor: pointer;
          margin-left: 30px;
          span {
            font-size: 14px;
            font-weight: 600;
            color: rgba(255, 255, 255, 1);
            line-height: 36px;
          }
          img {
            vertical-align: text-bottom;
          }
        }
        .contact {
          position: fixed;
          z-index: 2;
          right: 120px;
          top: 60vh;
          width: 36px;
          height: 101px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 1px 8px 0px rgba(7, 66, 162, 0.2);
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          .p {
            position: relative;
            cursor: pointer;
            .ph {
              display: none;
            }
            &:hover {
              .pp {
                display: none;
              }
              .ph {
                display: inline-block;
              }
            }
          }
          .q {
            position: relative;
            cursor: pointer;
            .qh {
              display: none;
            }
            &::after {
              position: absolute;
              bottom: -15px;
              left: calc(50% - 8px);
              content: '';
              width: 16px;
              height: 1px;
              background-color: rgba(227, 232, 244, 1);
            }
            &:hover {
              .qq {
                display: none;
              }
              .qh {
                display: inline-block;
              }
            }
          }
        }
        .c {
          position: fixed;
          z-index: 0;
          right: 124px;
          top: calc(60vh + 50px);
          width: 0px;
          height: 51px;
          background-color: rgba(255, 255, 255, 1);
          box-shadow: 0px 1px 8px 0px rgba(39, 95, 239, 0.2);
          border-radius: 26px;
          padding-left: 25px;
          box-sizing: border-box;
          overflow: hidden;
          transition: width 0.3s 0.2s;
          span {
            font-size: 16px;
            font-weight: 600;
            color: rgba(39, 95, 239, 1);
            line-height: 51px;
          }
          &.active {
            width: 170px;
          }
        }
        .backToHeader {
          position: fixed;
          bottom: 100px;
          right: 110px;
          cursor: pointer;
          .backToHeaderIconHover {
            display: none;
          }
          &.hide {
            display: none;
          }
          &:hover {
            .backToHeaderIcon {
              display: none;
            }
            .backToHeaderIconHover {
              display: inline-block;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1300px){
    header {
      width: 92vw!important;
    }
  }

</style>
