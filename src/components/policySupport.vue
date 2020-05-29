<template>
  <div class="policySupport-wrapper">
    <!--第一屏-->
    <div class="fir-screen item-screen">
      <img src="@/assets/policy-banner-bgi.png" alt="" class="bgi">
      <img src="@/assets/policy-banner-main.png" alt="" class="mainImg">
    </div>
    <!--第二屏-->
    <div class="sec-screen item-screen">
      <div class="info">
        <img src="@/assets/m.png" alt="">
        <div class="text">
          <span class="b">
            {{ t1 }}
            <span class="r">{{ t3 }}</span>
            {{ t2 }}
          </span>
        </div>
        <div class="m"><span class="k">{{ k }}</span></div>
        <img src="@/assets/n.png" alt="" class="n">
        <img src="@/assets/s.png" alt="" class="s">
        <img src="@/assets/w.png" alt="" class="w">
        <img src="@/assets/e.png" alt="" class="e">
      </div>
    </div>
    <!--第三屏-->
    <div class="thi-screen item-screen">
      <img src="@/assets/bgi-b.png" alt="" class="bgi">
      <div class="money">
        <div class="l">
          <div class="item" v-for="item,index in moneyList" :key="index">
            <div class="tit"><span>{{ item.tit }}</span></div>
            <p>{{ item.dire }}</p>
          </div>
        </div>
        <img src="@/assets/c.png" alt="" class="c">
        <img src="@/assets/gift.png" alt="" class="gift">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'policySupport',
    data(){
      return {
        k: '项目整包的客户，可得到贵宾VIP客户最大价格优惠，可成为中国电影云基地的项目股东，得到该项目使用金8%的现金返还。',
        t1: '现整包入住可成为',
        t2: '分红拿到手软',
        t3: '项目股东',
        moneyList: [
          {
            tit: '税收返还',
            dire: '企业缴税总额的28%给予返还补贴'
          },
          {
            tit: '制片人奖励',
            dire: '影视作品上映最高可得1150万补贴'
          },
          {
            tit: '制片团队补贴',
            dire: '给予拍摄团队最高100万的拍摄补贴'
          },
          {
            tit: '编剧补贴',
            dire: '原创影视剧本被影视机构购买最高可得100万补贴'
          },
          {
            tit: '优秀题材奖励',
            dire: '支持优秀作品创作最高可得50万奖补'
          }

        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .policySupport-wrapper {
    .item-screen {
      position: relative;
    }
    .bgi {
      position: relative;
      width: 100vw;
    }
    .mainImg {
      position: absolute;
      bottom: 0px;
      width: 88vw;
      margin-left: -40px;
    }
    .fir-screen {
      position: relative;
      display: flex;
      justify-content: center;
    }
    .sec-screen {
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      .info {
        position: relative;
        .text {
          position: absolute;
          top: 0px;
          width: 428px;
          padding: 50px 28px;
          box-sizing: border-box;
          .b,
          .r {
            font-size: 30px;
            font-weight: 600;
            color: rgba(28, 36, 47, 1);
            line-height: 34px;
          }
          .r {
            color: RGBA(255, 110, 103, 1);
          }
        }
        .m {
          display: inline-block;
          width: 761px;
          height: 167px;
          border-radius: 14px;
          border: 8px solid rgba(28, 36, 47, 1);
          margin-left: 8px;
          padding: 30px;
          box-sizing: border-box;
          vertical-align: top;
          .k {
            font-size: 24px;
            font-weight: 400;
            color: rgba(28, 36, 47, 1);
            line-height: 42px;
          }
        }
        .n {
          position: absolute;
          left: -20px;
          top: 100px;
        }
        .s {
          position: absolute;
          left: 384px;
          top: 50px;
        }
        .w {
          position: absolute;
          left: 700px;
          top: -20px;
        }
        .e {
          position: absolute;
          right: -34px;
          bottom: -26px;
        }
      }
    }
    .thi-screen {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 600px;
      .money {
        position: relative;
        width: 1600px;
        height: 462px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.2);
        border-radius: 14px;
        overflow: hidden;
        .l {
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          align-content: center;
          .item {
            position: relative;
            width: 33%;
            height: 140px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .tit {
              position: relative;
              width: 220px;
              margin-bottom: 10px;
              background-color: transparent;
              span {
                font-size: 36px;
                font-weight: 600;
                color: rgba(28, 36, 47, 1);
                position: relative;
              }
              &::before {
                position: absolute;
                left: -18px;
                top: -2px;
                z-index: 0;
                content: '';
                width: 36px;
                height: 36px;
                border-radius: 50%;
                background-color: rgba(255, 97, 96, 1);
              }
            }
            p {
              width: 220px;
              font-size: 20px;
              font-weight: 400;
              color: rgba(28, 36, 47, 1);
            }
            &::after {
              position: absolute;
              right: 0px;
              content: '';
              width: 1px;
              height: 60px;
              background-color: rgba(28, 36, 47, 1);
            }
            &:nth-last-of-type(1),
            &:nth-last-of-type(3) {
              &::after {
                opacity: 0;
              }
            }
          }
        }
        .gift,
        .c {
          position: absolute;
          bottom: 0px;
          z-index: 1;
        }
        .gift {
          left: calc(50% - 40px);
          bottom: -6px;
        }
      }
      .bgi {
        position: absolute;
        top: 0px;

      }
    }
  }
  @media screen and (max-width: 1600px) {
    .money {
      width: 96vw!important;
    }
  }
  @media screen and (max-width: 1400px) {
    .info {
      transform: scale(0.9);
    }
  }
  @media screen and (max-width: 1230px) {
    .info {
      transform: scale(0.8);
      .m {
        padding: 30px 20px!important;
        width: 54vw!important;
        .k {
          font-size: 20px!important;
        }
      }
    }
    .money {
      .item .tit span {
        font-size: 30px!important;
      }
      .item p {
        font-size: 16px!important;
      }
    }
  }
  @media screen and (max-width: 1130px) {
    .info {
      .m {
        padding: 20px 20px!important;
        width: 44vw!important;
        .k {
          font-size: 16px!important;
          line-height: 36px!important;
        }
      }
    }
  }
</style>
