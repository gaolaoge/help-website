<template>
  <div class="animationRender-wrapper" :style="{backgroundImage: 'url(' + url + ')'}">
    <div class="fir-screen item-screen videoBase">
      <video src="@/assets/video.mp4"
             :controls="videoState"
             poster="@/assets/jj.png"
             ref="video"
             class="video" />
      <div class="occlusion" @click="playFun" v-show="!videoState"></div>
      <img src="@/icons/play.png" alt="" class="play" @click="playFun" v-show="!videoState">
    </div>
    <div class="sec-screen item-screen">
      <div class="itemList">
        <div class="item" v-for="item,index in itemList" :key="index">
          <!--索引-->
          <img :src="item.numUrl" alt="" class="numIcon">
          <!--图片-->
          <div class="imgBase"></div>
          <!--简介-->
          <div class="textBase">
            <img :src="item.iconsUrl" alt="" class="icon">
            <h6 class="tit">{{ item.tit }}</h6>
            <span class="dir">{{ item.dir }}</span>
            <div class="button"><span>{{ button }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'animationRendering',
    data(){
      return {
        url: require('../assets/f.png'),
        itemList: [
          {
            iconsUrl: require('@/icons/itemIcon (1).png'),
            tit: '批量新建任务',
            dir: '批量选中多个场景文件上传服务器，省心省力',
            numUrl: require('@/icons/numIcon (1).png')
          },
          {
            iconsUrl: require('@/icons/itemIcon (2).png'),
            tit: '云端自动分析',
            dir: '上传云端，云端服务器自动分析场景文件，保障渲染效果',
            numUrl: require('@/icons/numIcon (4).png')
          },
          {
            iconsUrl: require('@/icons/itemIcon (3).png'),
            tit: '分层多机同时渲染',
            dir: '独立控制场景文件内每个层的渲染，每层都采用多机同时渲染，速度提升10+倍',
            numUrl: require('@/icons/numIcon (3).png')
          },
          {
            iconsUrl: require('@/icons/itemIcon (4).png'),
            tit: '实时预览渲染画面',
            dir: '实时预览画面，随时掌控渲染进度',
            numUrl: require('@/icons/numIcon (2).png')
          },
        ],
        button: '立即体验',
        videoState: false
      }
    },
    methods: {
      playFun(){
        this.$refs.video.play()
        this.videoState = true
      }
    },
    mounted() {
      this.$refs.video.addEventListener('pause', () => {
        this.videoState = false
      })
    }
  }
</script>

<style lang="less" scoped>
  .animationRender-wrapper {
    background-size: 140px;
    background-repeat: repeat;
    min-height: 100vh;
    .videoBase {
      position: relative;
      .play {
        position: absolute;
        z-index: 2;
        top: calc(50% - 62px);
        left: calc(50% - 62px);
        cursor: pointer;
        opacity: 0.8;
      }
      .occlusion {
        position: absolute;
        top: 0px;
        height: calc(100vh - 80px);
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.32);
        cursor: pointer;
      }
      .video {
        background-color: black;
        height: calc(100vh - 80px);
        width: 100vw;
        object-fit: contain;
      }
    }
    .itemList {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 120px;
      .item {
        position: relative;
        margin-top: 100px;
        width: 1400px;
        height: 460px;
        background: rgba(255,255,255,1);
        box-shadow: 0px 2px 12px 0px rgba(39,95,239,0.3);
        border-radius: 8px;
        padding: 40px;
        box-sizing: border-box;
        display: flex;
        .numIcon {
          position: absolute;
        }
        .imgBase {
          width: 620px;
          height: 380px;
          background: rgba(244, 247, 255, 1);
          border-radius: 16px;
          border: 8px solid rgba(39, 95, 239, 1);
        }
        .textBase {
          width: 500px;
          margin: 0px 76px;
          .icon {
            margin-bottom: 40px;
          }
          .tit {
            font-size: 24px;
            font-weight: 600;
            color: rgba(28, 36, 47, 1);
            line-height: 33px;
            letter-spacing: 1px;
            margin-bottom: 13px;
          }
          .dir {
            display: inline-block;
            font-size: 18px;
            font-weight: 500;
            color: rgba(28, 36, 47, 0.6);
            line-height: 28px;
            margin-bottom: 32px;
          }
          .button {
            width: 199px;
            height: 56px;
            border-radius: 28px;
            text-align: center;
            cursor: pointer;
            span {
              font-size: 17px;
              font-weight: 600;
              color: rgba(255, 255, 255, 1);
              line-height: 56px;
              letter-spacing: 1px;
            }
          }
        }
        &:nth-of-type(4) {
          .textBase {
            .button {
              background-color: rgba(243, 119, 109, 1);
            }
          }
        }
        &:nth-of-type(3) {
          .textBase {
            .button {
              background-color: rgba(39, 95, 239, 1);
            }
          }
        }
        &:nth-of-type(2) {
          .textBase {
            .button {
              background-color: rgba(255, 219, 0, 1);
            }
          }
        }
        &:nth-of-type(1) {
          .textBase {
            .button {
              background-color: rgba(162, 227, 93, 1);
            }
          }
        }
        &:nth-of-type(odd) {
          flex-direction: row-reverse;
          margin-left: -60px;
          .numIcon {
            left: 40px;
          }
          .textBase {
            text-align: right;
            .button {
              float: right;
            }
          }
        }
        &:nth-of-type(even) {
          flex-direction: row;
          margin-right: -60px;
          .numIcon {
            right: 40px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1480px) {
    .itemList .item {
      width: 88vw!important;
    }
  }
</style>
