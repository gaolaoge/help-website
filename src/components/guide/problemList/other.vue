<template>
  <div class="other-wrapper">
    <div class="mainTit">{{ mainTit }}</div>
    <div class="item" v-for="item,index in itemList" :key="index">
      <p class="q"><span>Q：</span>{{ item.q }}</p>
      <p class="a"><span>A：</span>{{ item.a }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'other',
    data(){
      return {
        mainTit: '其它问题',
        itemList: [
            {
              q: '充值已经支付成功了为什么还没有到账？',
              a: '充值完成后，请耐心等待几分钟，然后刷新网页即可。'
            },
            {
              q: '分析失败如何处理？',
              a: '请根据分析失败原因和提示对渲染文件进行修复或重新分析，修复需要新建任务。'
            },
            {
              q: '分析警告如何处理？',
              a: '查看分析警告的原因和提示，确认是否可以忽略警告内容，如果可以忽略，则直接渲染即可。'
            },
            {
              q: '渲染失败怎样处理？',
              a: '渲染失败请联系客服，我们会确认渲染失败原因，并尽快给到你相应的反馈。'
            },
            {
              q: '单帧渲染超时暂停，怎样处理？',
              a: '当任务超时暂停后，请及时联系客服，由客服延长任务的超时暂停时间后进行重新渲染。'
            },
            {
              q: '网页端如何查看上传和下载进度？',
              a: '可以点击右下角“传输列表”查看。'
            }
          ]
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
