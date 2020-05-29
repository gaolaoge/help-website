<template>
  <div class="wrapper-footer">
    <footer>
      <nav>
        <span v-for="nav,index in navList"
              :key="index"
              class="nav-li">
          {{ nav.name }}
        </span>
      </nav>
      <div class="info">
        <span class="info-li"
              v-for="info,index in infoList"
              :key="index">
          {{ info.label }}：{{ info.val }}
        </span>
      </div>
      <div class="qr">
        <img src="@/icons/footer-QRCode.png" alt="">
        <span>{{ QRcodeText }}</span>
      </div>
      <div class="s">
        <img src="@/icons/f.png" alt="">{{ ff }}
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'footerDom',
    data(){
      return {
        navList: [
          {
            name: '首页',
            link: ''
          },
          {
            name: '政策支持',
            link: ''
          },
          {
            name: '影视动画渲染',
            link: ''
          },
          {
            name: '帮助',
            link: ''
          }
        ],
        infoList: [
          {
            label: 'QQ客服',
            val: '3181225749'
          },
          {
            label: '客服电话',
            val: '13176527028'
          },
          {
            label: '邮箱',
            val: 'ENJINECG@163.com'
          },
          {
            label: '地址',
            val: '山东省青岛市即墨区龙山街道办事处龙山花园1680-1-1'
          }
        ],
        QRcodeText: '中国电影云公众号',
        ff: '鲁公网安备 33010002000124号'
      }
    }
  }
</script>

<style scoped lang="less">
  .wrapper-footer {
    height: 249px;
    background-color: rgba(7, 66, 162, 1);
    footer {
      margin: 0px auto;
      width: 1250px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      nav,
      .info {
        margin: 30px 0px;
        .nav-li,
        .info-li {
          display: block;
          font-size: 13px;
          color: rgba(142, 170, 242, 1);
          margin-bottom: 20px;
          transition: all 0.2s;
          &:nth-last-of-type(1){
            margin-bottom: 0px;
          }
        }
      }
      nav {
        .nav-li {
          cursor: pointer;
          &:hover { color: rgba(255, 255, 255, 1); }
        }
      }
      .info {
        margin-left: -220px;
      }
      .qr {
        margin-top: 30px;
        span {
          margin-top: 10px;
          display: block;
          font-size:13px;
          color: rgba(142, 170, 242, 1);
        }
      }
      .s {
        width: 100%;
        border-top: 1px solid rgba(23, 79, 169, 1);
        text-align: center;
        color: rgba(180, 186, 201, 1);
        font-size: 12px;
        padding: 19px 0px;
        img {
          vertical-align: text-bottom;
          margin-right: 8px;
        }
      }
    }
  }
  @media screen and (max-width: 1300px) {
    footer {
      width: 94vw!important;
    }
  }
</style>
