<template>
  <div class="home-wrapper">
    <!--第一屏-->
    <div class="fir-screen item-screen">
      <div class="bg"></div>
      <img src="@/assets/home-websiteImg.png" alt="" class="home-websiteImg">
    </div>
    <!--第二屏 【更优质的渲染平台】-->
    <div class="sec-screen item-screen">
      <div class="screen-tit">
        <img src="@/assets/sec-tit.png" alt="">
      </div>
      <img src="@/assets/cc.png" alt="" style="position: absolute;top: -30px;left: 520px;">
      <img src="@/assets/z.png" alt="" style="position: absolute;top: 60px;left: 740px;">
      <img src="@/assets/hh.png" alt="" style="position: absolute;top: 310px;left: -220px;">
      <img src="@/assets/nmn.png" alt="" style="position: absolute;bottom: -130px;right: -400px;z-index: -2">
      <img src="@/assets/hh.png" alt="" style="position: absolute;top: 580px;right: -240px;z-index: -2">
      <div class="platformList">
        <div class="item" v-for="item,index in platformList" :key="index">
          <div class="base"><span>{{ item.text }}</span></div>
          <div class="label"><span>{{ item.label }}</span></div>
        </div>
      </div>
    </div>
    <!--第三屏 【专业团队服务】-->
    <div class="thi-screen item-screen">
      <div class="bg2"></div>
      <div class="screen-tit">
        <img src="@/assets/thi-tit.png" alt="">
      </div>
      <img src="@/assets/u.png" alt="" style="position: absolute;top: 90px;left: 700px;">
      <img src="@/assets/u.png" alt="" style="position: absolute;top: 720px;left: -240px;transform: rotate(-90deg);opacity: 0.6">
      <img src="@/assets/y.png" alt="" style="position: absolute;top: 90px;left: -200px;transform: rotate(130deg)">
      <img src="@/assets/y.png" alt="" style="position: absolute;top: 380px;right: -200px;">
      <div class="serviceList">
        <img src="@/assets/services01.png" alt="">
        <img src="@/assets/service02.png" alt="">
        <img src="@/assets/service03.png" alt="">
        <img src="@/assets/service04.png" alt="">
      </div>
    </div>
    <!--第四屏-->
    <div class="fou-screen item-screen">
      <div class="screen-tit">
        <img src="@/assets/fou-tit.png" alt="">
      </div>
      <img src="@/assets/kl.png" alt="" style="position: absolute;top: 280px;left: -320px">
      <img src="@/assets/sds.png" alt="" style="position: absolute;top: -190px;right: -320px">
      <img src="@/assets/u.png" alt="" style="position: absolute;top: 90px;right: 0px;transform: rotate(40deg)">
      <img src="@/assets/u.png" alt="" style="position: absolute;top: 420px;right: -540px;transform: rotate(-90deg);opacity: 0.6">
      <div class="stepList">
        <img src="@/assets/step.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      platformList: [
        {
          text: '超大渲染集群，可灵活拓展',
          label: '高效'
        },
        {
          text: '中国电影科学技术研究所唯一授权运营单位',
          label: '权威'
        },
        {
          text: '沉浸式+极简设计=1分钟轻松上手',
          label: '便捷'
        },
        {
          text: '满足4K级超清渲染，CPU、GPU双模式',
          label: '顶级配置'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .home-wrapper {
    width: 1250px;
    margin: 0px auto;
    .home-websiteImg {
      margin-top: 30px;
    }
    .item-screen {
      position: relative;
      margin: 120px 0px;
      .screen-tit {
        margin: 57px 0px;
      }
      .bg {
        position: absolute;
        top: -880px;
        z-index: -1;
        width: 130vw;
        height: 1800px;
        background-color:rgba(235, 242, 254, 1);
        margin-left: -28vw;
        transform: skew(0deg, 18deg);
      }
      .bg2 {
        position: absolute;
        z-index: -3;
        top: -100px;
        width: 130vw;
        height: 950px;
        margin-left: -24vw;
        background-color:rgba(235, 242, 254, 1);
      }
      &:nth-of-type(1){
        margin-top: 0px;
      }
    }
    .platformList {
      .item {
        position: relative;
        .base {
          position: relative;
          width: 100%;
          height: 77px;
          text-align: center;
          background: rgba(255, 255, 255, 1);
          border-radius:4px;
          border: 6px solid rgba(39, 95, 239, 1);
          margin-bottom: 87px;
          &::after {
            content: '';
            position: absolute;
            z-index: -1;
            top: 2px;
            left: -14px;
            width: 100%;
            height: 77px;
            border-radius:4px;
            border: 6px solid rgba(39, 95, 239, 1);
            background-color: rgba(256, 256, 256,1);
          }
          span {
            font-size: 30px;
            font-family: BigYoungMediumGB20;
            color: rgba(28, 36, 47, 1);
            line-height:77px;
          }
        }
        .label {
          position: absolute;
          top: -30px;
          height: 79px;
          text-align: center;
          padding: 0px 28px;
          background-color: rgba(255, 127, 127, 1);
          border-radius: 6px;
          border: 5px solid rgba(39, 95, 239, 1);
          transform: skew(-10deg);
          box-shadow: 5px 5px 1px rgba(39, 95, 239, 1);
          span {
            display: inline-block;
            font-size: 40px;
            font-family: BigYoungMediumGB20;
            color: rgba(28, 36, 47, 1);
            line-height:77px;
            -webkit-text-stroke: 1px rgba(28, 36, 47, 1);
            text-stroke: 1px rgba(28, 36, 47, 1);
            transform: skew(10deg);
          }
        }
        &:nth-of-type(even) {
          .label {
            left: 50px;
          }
        }
        &:nth-of-type(odd) {
          .label {
            right: 50px;
          }
        }
      }
    }
    .serviceList {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .stepList {
      img {
        width: 100%;
      }
    }
    .thi-screen {
      margin: 200px 0px;
    }
  }
  @media screen and (max-width: 1300px) {
    .home-wrapper {
      width: 92vw;
      .home-websiteImg {
        width: 100%;
      }
      .screen-tit{
        margin: 40px 0px!important;
        img {
          width: 34vw;
        }
      }
      .serviceList img {
        width: 44vw;
      }
      .thi-screen {
        margin: 8vw 0px;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .home-wrapper .platformList .item .label {
      height: 60px;
      span {
        font-size: 30px;
        line-height: 60px;
      }
    }
    .home-wrapper .platformList .item .base span {
      font-size: 24px;
    }
  }
</style>
