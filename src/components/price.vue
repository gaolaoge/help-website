<template>
  <div class="price-wrapper">
    <!--第一屏-->
    <div class="fir-screen item-screen" :style="{backgroundImage: 'url(' + url + ')'}">
      <img src="@/assets/m (4).png" alt="" class="lt">
      <img src="@/assets/m (3).png" alt="" class="rt">
      <img src="@/assets/m (2).png" alt="" class="lb">
      <img src="@/assets/m (1).png" alt="" class="rb">
      <img src="@/assets/sd.png" alt="" class="sd">
      <img src="@/assets/bu.png" alt="" class="bu">
    </div>
    <!--第二屏-->
    <div class="sec-screen item-screen">
      <div class="list">
        <div class="bt"><span>{{ bt }}</span></div>
        <div class="x">
          <div class="item" v-for="item,index in cpuItemList" :key="index">
            <h6>{{ item.tit }}</h6>
            <p class="dir">{{ item.dir }}</p>
            <div class="unit">￥<span class="num">{{ item.unitNum }}</span>/核时</div>
            <div class="f">
              <p>相当于32线程节点机</p>
              <p>每小时收费<span class="v">{{item.price}}</span>元</p>
              <p>包含<span class="v">{{item.RAM}}</span>存储空间</p>
            </div>
          </div>
        </div>
        <div class="vt"><span>{{ vt }}</span></div>
        <img src="@/assets/h (1).png" alt="" class="h1">
      </div>
    </div>
    <div class="bg"></div>
    <div class="fff"></div>
    <!--第三屏-->
    <div class="thi-screen item-screen">
      <div class="list">
        <div class="bt"><span>{{ bb }}</span></div>
        <div class="x">
          <div class="item" v-for="item,index in gpuItemList" :key="index">
            <h6>{{ item.tit }}</h6>
            <p class="dir">{{ item.dir }}</p>
            <div class="unit">￥<span class="num">{{ item.unitNum }}</span>/机时</div>
            <div class="f">
              <p>相当于2张M10卡</p>
              <p>每小时收费<span class="v">{{item.unitNum}}</span>元</p>
              <p>包含<span class="v">{{item.RAM}}</span>存储空间</p>
            </div>
          </div>
        </div>
        <div class="vt"><span>{{ vt }}</span></div>
        <img src="@/assets/h (2).png" alt="" class="h2">
      </div>
    </div>
    <!--第四屏-->
    <div class="fou-screen item-screen">
      <div class="priceDescription">
        <h6>{{ desc.tit }}</h6>
        <ol>
          <li v-for="item,index in desc.list" :key="index" class="descLi">
            <span>{{ item }}</span>
          </li>
        </ol>
        <span class="add">{{ desc.add }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'price',
    data(){
      return {
        cpuItemList: [
          {
            tit: '普通用户',
            dir: '累计充值0元',
            unitNum: '0.190',
            price: '3.04',
            RAM: '50G'
          },
          {
            tit: '璀璨白银',
            dir: '累计充值2000元',
            unitNum: '0.175',
            price: '2.80',
            RAM: '500G'
          },
          {
            tit: '荣耀黄金',
            dir: '累计充值12000元',
            unitNum: '0.150',
            price: '2.40',
            RAM: '1T'
          },
          {
            tit: '尊贵铂金',
            dir: '累计充值30000元',
            unitNum: '0.125',
            price: '2',
            RAM: '2T'
          },
          {
            tit: '永恒钻石',
            dir: '累计充值60000元',
            unitNum: '0.100',
            price: '1.60',
            RAM: '5T'
          }
        ],
        gpuItemList: [
          {
            tit: '普通用户',
            dir: '累计充值0元',
            unitNum: '9',
            RAM: '50G'
          },
          {
            tit: '璀璨白银',
            dir: '累计充值2000元',
            unitNum: '7',
            RAM: '500G'
          },
          {
            tit: '荣耀黄金',
            dir: '累计充值12000元',
            unitNum: '6',
            RAM: '1T'
          },
          {
            tit: '尊贵铂金',
            dir: '累计充值30000元',
            unitNum: '5',
            RAM: '2T'
          },
          {
            tit: '永恒钻石',
            dir: '累计充值60000元',
            unitNum: '4',
            RAM: '5T'
          }
        ],
        bt: 'CPU渲染价格',
        bb: 'GPU渲染价格',
        vt: '立即体验',
        desc: {
          tit: '价格说明',
          list: [
            'CPU渲染费用 = 线程时单价 x 模式线程数 x 渲染时长（小时）， 如一台32线程的电脑运行了一小时,就是32线程*时。',
            'GPU渲染费用 = 机时单价 x 模式电脑个数 x 渲染时长（小时）， 如一台电脑运行了一小时,就是1机*时。'
          ],
          add: '您有任何疑问，欢迎来电咨询。电话：13176527028'
        },
        url: require('@/assets/b.png')
      }
    }
  }
</script>

<style lang="less" scoped>
  .price-wrapper {
    position: relative;
    .item-screen {
      position: relative;
    }
    .fir-screen {
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100vh - 80px);
      max-height: 80vw;
      .lt {
        position: absolute;
        left: 0px;
        top: 0px;
      }
      .rt {
        position: absolute;
        right: 0px;
        top: 0px;
      }
      .lb {
        position: absolute;
        left: 0px;
        bottom: 0px;
      }
      .rb {
        position: absolute;
        right: 0px;
        bottom: 0px;
      }
      .bu {
        position: absolute;
        cursor: pointer;
        bottom: 6vh;
        left: calc(50% - 7vw);
        max-width: 14vw;
      }
      .sd {
        margin-top: -12vh;
        max-width: 50vw;
      }
    }
    .sec-screen,
    .thi-screen {
      width: 1400px;
      margin: 144px auto 120px;
      .list {
        width: 100%;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 16px 0px rgba(142, 170, 242, 0.3);
        border-radius: 10px;
        .x {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 465px;
          .item {
            position: relative;
            text-align: center;
            width: 140px;
            h6 {
              font-size: 30px;
              color: rgba(28, 36, 47, 1);
              line-height: 33px;
              margin-bottom: 10px;
            }
            .dir,
            .unit,
            .f p{
              font-size: 14px;
              font-weight: 600;
              color: rgba(28, 36, 47, 0.6);
              line-height: 20px;
            }
            .num {
              margin: 50px 0px 29px;
              display: inline-block;
              font-size: 30px;
              font-family: Arial-Black,Arial;
              font-weight: 900;
              color: rgba(243, 119, 109, 1);
              line-height: 42px;
            }
            .v {
              color: rgba(28, 36, 47, 1);
            }
            &::after {
              position: absolute;
              right: -70px;
              top: calc(50% - 95px);
              content: '';
              width: 1px;
              height: 190px;
              background-color: rgba(28, 36, 47, 0.6);
            }
            &:nth-last-of-type(1) {
              &::after {
                opacity: 0;
              }
            }
          }
        }
      }
      .bt {
        position: absolute;
        top: -40px;
        left: calc(50% - 122px);
        width: 244px;
        height: 82px;
        border-radius: 5px;
        text-align: center;
        background-color: rgba(162, 227, 93, 1);
        box-shadow: 4px 4px 1px 1px rgba(162, 227, 93, 0.3);
        span {
          font-size: 30px;
          font-weight: 600;
          color: rgba(28, 36, 47, 1);
          line-height: 82px;
        }
      }
      .vt {
        position: absolute;
        bottom: -29px;
        left: calc(50% - 80px);
        width: 160px;
        height: 58px;
        border-radius: 41px;
        text-align: center;
        background-color: rgba(243, 119, 109, 1);
        box-shadow: 4px 4px 1px 1px rgba(243, 119, 109, 0.3);
        cursor: pointer;
        span {
          font-size: 20px;
          font-weight: 600;
          color: rgba(255, 255, 255, 1);
          line-height: 58px;
        }
      }
    }
    .h1 {
      position: absolute;
      right: -56px;
      bottom: -238px;
    }
    .h2 {
      position: absolute;
      left: -100px;
      bottom: -0px;
    }
    .priceDescription {
      height: 248px;
      width: 1400px;
      margin: 100px auto;
      background-color: rgba(255, 255, 255, 1);
      border-radius: 10px;
      border: 2px dashed rgba(39, 95, 239, 1);
      padding: 60px 100px;
      box-sizing: border-box;
      h6,
      li,
      .add {
        font-size: 16px;
        font-weight: 400;
        color: rgba(28, 36, 47, 0.79);
        line-height: 32px;
      }
      li {
        margin-left: 16px;
      }
    }
    .bg {
      position: absolute;
      top: 140vh;
      z-index: -1;
      width: 130vw;
      height: 800px;
      background-color: rgba(39, 95, 239, 0.79);
      margin-left: -30vw;
      transform: skew(0deg, -4deg);
    }
    .fff {
      width: 100vw;
      height: 217px;
      background-color: rgba(256, 256, 256, 1);
    }
  }
  @media screen and (max-width: 1480px) {
    .price-wrapper {
      .fir-screen {
        img.sd {
          max-width: 66vw;
        }
        img.lt,
        img.rt,
        img.lb,
        img.rb {
          width: 36vw;
        }
      }
      .sec-screen,
      .thi-screen {
        width: 96vw!important;
        .list .x .item::after {
          right: calc((700px - 96vw)/10);
        }
      }
      .priceDescription {
        width: 96vw;
        padding: 60px 2vw;
        h6, li, .add {
          font-size: 15px;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .price-wrapper {
      .fir-screen {
        img.sd {
          max-width: 76vw;
        }
      }
      .sec-screen,
      .thi-screen {
        width: 96vw!important;
        .list .x .item h6 {
          font-size: 24px;
        }
        .dir,
        .unit,
        .f p {
          font-size: 13px!important;
        }
        .num {
          font-size: 26px!important;
        }
      }
    }
  }
</style>
