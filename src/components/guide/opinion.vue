<template>
  <div class="opinion-wrapper">
    <div class="mainTit"><span>{{ tit }}</span></div>
    <p class="p1">{{ p1 }}</p>
    <textarea name="" class="textarea" cols="30" rows="10" placeholder="请在此留下您宝贵的意见…"></textarea>
    <div class="item">
      <label for="phone" class="p1">手机号</label>：
      <input type="text" id="phone" class="phone">
      <span class="span1">{{ remark }}</span>
    </div>
    <div class="button"><span>提交</span></div>
  </div>
</template>

<script>
  export default {
    name: 'opinion',
    data(){
      return {
        tit: '意见反馈',
        p1: `我们欢迎每一位用户对我们的服务进行监督，也接受您提出的宝贵意见和建议。
             如果由于我们的疏忽给您带来了不便，或者您对我们的服务有更好的建议，都可以在下面填写，
             并留下您的联系方式，感谢您对我们的支持!`,
        remark: '（请填写您正确的手机号，以便我们能第一时间联系到您。）'
      }
    }
  }
</script>

<style lang="less" scoped>
  .opinion-wrapper {
  }
  .p1 {
    text-indent: 2em;
    font-size: 16px;
    color: rgba(28, 36, 47, 0.79);
    line-height: 30px;
  }
  .textarea {
    height: 150px;
    width: 100%;
    background-color: rgba(247, 249, 255, 1);
    border-radius: 6px;
    border: 1px solid rgba(142, 170, 242, 1);
    margin: 20px 0px;
    resize: none;
    outline: none;
    padding: 15px 25px;
    box-sizing: border-box;
  }
  .span1 {
    font-size: 13px;
    color: rgba(28, 36, 47, 0.5);
    line-height: 30px;
  }
  .phone {
    width: 256px;
    height: 40px;
    background-color: rgba(247, 249, 255, 1);
    border-radius: 6px;
    border: 1px solid rgba(142, 170, 242, 1);
    outline: none;
    padding-left: 12px;
    box-sizing: border-box;
  }
  .button {
    float: right;
    margin-top: 60px;
    width: 94px;
    height: 38px;
    background: rgba(39, 95, 239, 1);
    border-radius: 6px;
    text-align: center;
    cursor: pointer;
    span {
      font-size: 16px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 38px;
      letter-spacing: 1px;
    }
  }
</style>
