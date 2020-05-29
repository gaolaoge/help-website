<template>
  <section class="vip-wrapper">
    <div class="mainTit">{{ vip.mainTit }}</div>
    <p class="tit">{{ vip.tit }}</p>
    <p class="miniTit">{{ vip.miniTit1 }}</p>
    <ol>
      <li v-for="item,index in vip.itemList" :key="index">{{ item }}</li>
    </ol>
    <p class="miniTit">{{ vip.miniTit2 }}</p>
    <el-table
      :data="vip.CPUPriceTableData"
      border
      style="width: 100%">
      <el-table-column
        prop="class"
        label="会员等级"
        width="180">
      </el-table-column>
      <el-table-column
        prop="total"
        label="累计充值金额（元）"
        width="180">
      </el-table-column>
      <el-table-column
        prop="unit"
        label="单价（元/线程时）">
      </el-table-column>
      <el-table-column
        prop="capacity"
        label="资产容量">
      </el-table-column>
    </el-table>
    <p class="miniTit">{{ vip.miniTit3 }}</p>
    <el-table
      :data="vip.GPUPriceTableData"
      border>

      <el-table-column
        prop="class"
        label="会员等级"
        width="180" />

      <el-table-column
        prop="total"
        label="累计充值金额（元）"
        width="180" />

      <el-table-column
        prop="unit"
        label="单价（元/机时）"/>

      <el-table-column
        prop="capacity"
        label="资产容量"/>

    </el-table>
  </section>
</template>

<script>
  export default {
    name: 'vip',
    data(){
      return {
        vip: {
          mainTit: '会员机制',
          tit: '一、影视动画会员机制',
          miniTit1: '1.1 价格说明',
          miniTit2: '1.2 CPU价格',
          miniTit3: '1.3 GPU价格',
          itemList: [
            'CPU渲染费用=线程时单价 x 模式线程数 x 渲染时长（小时）， 如一台32线程的电脑运行了一小时,就是32线程*时。',
            'GPU渲染费用=机时单价 x 模式节点机个数 x 渲染时长（小时），如一台电脑运行了一小时,就是1机*时。'
          ],
          CPUPriceTableData: [
            {
              class: '普通用户',
              total: '0≤X<2000',
              unit: '0.120',
              capacity: '50G'
            },
            {
              class: '璀璨白银',
              total: '2000≤X<12000',
              unit: '0.100',
              capacity: '200G'
            },
            {
              class: '荣耀黄金',
              total: '12000≤X<30000',
              unit: '0.085',
              capacity: '1T'
            },
            {
              class: '尊贵铂金',
              total: '30000≤X<50000',
              unit: '0.075',
              capacity: '2T'
            },
            {
              class: '永恒钻石',
              total: '50000≤X',
              unit: '0.065',
              capacity: '5T'
            }
          ],
          GPUPriceTableData: [
            {
              class: '普通用户',
              total: '0≤X<2000',
              unit: '10',
              capacity: '50G'
            },
            {
              class: '璀璨白银',
              total: '2000≤X<12000',
              unit: '9',
              capacity: '200G'
            },
            {
              class: '荣耀黄金',
              total: '12000≤X<30000',
              unit: '7',
              capacity: '1T'
            },
            {
              class: '尊贵铂金',
              total: '30000≤X<50000',
              unit: '6',
              capacity: '2T'
            },
            {
              class: '永恒钻石',
              total: '50000≤X',
              unit: '5',
              capacity: '5T'
            }
          ]
        },
      }
    }
  }
</script>

<style lang="less" scoped>
  .vip-wrapper {
    line-height: 30px;
    .miniTit {
      line-height: 34px;
    }
  }
</style>
