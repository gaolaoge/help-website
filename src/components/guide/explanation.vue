<template>
  <div class="explanation-wrapper">
    <div class="mainTit">
      <span>产品说明</span>
    </div>
    <section>
      <p class="p1">{{ p1 }}</p>
      <div class="item" v-for="item,index in itemList" :key="index">
        <label>{{ item.label }}</label>：
        <span>{{ item.val }}</span>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'explanation',
    data(){
      return {
        p1: `中国电影云平台是由中宣部下属中国电影科学技术研究所唯一授权运营的国内第⼀个基于云计算技术、分布式全流程、电影后期制作服务和管理平台。
             渲染农场以“高效、权威、便捷”为优势，面向后期制作人才，致力于为您提供最优质的服务。整个平台涵盖电影制作云桌面、云渲染农场和后期制作流程管理三大系统。`,
        itemList: [
          {
            label: '项目',
            val: '云渲染农场网页端'
          },
          {
            label: '业务',
            val: '影视、广告、特效等视频类业务'
          },
          {
            label: '系统',
            val: 'Windows、Linux 、Mac OS'
          },
          {
            label: '软件',
            val: 'Maya'
          },
          {
            label: '帧数',
            val: '单帧、多帧'
          },
          {
            label: '特点',
            val: '批量新建任务、网页管理资产、云端自动分析、分层多机同时渲染、实时预览渲染画面'
          },
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .p1 {
    text-indent: 2em;
    font-size: 16px;
    font-weight: 400;
    color: rgba(28, 36, 47, 0.79);
    line-height: 30px;
    margin-bottom: 20px;
  }
  .item {
    line-height: 30px;
    color: rgba(28, 36, 47, 0.79);
    margin: 0px;
  }
</style>
