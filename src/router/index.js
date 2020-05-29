import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/home'),
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('@/components/help'),
      redirect: '/help/explanation',
      children: [
        {
          path: 'explanation',   // 产品说明
          name: 'explanation',
          component: () => import('@/components/guide/explanation')
        },
        {
          path: 'problem',       // 问题解答
          name: 'problem',
          component: () => import('@/components/guide/problem'),
          children: [
            {
              path: 'vip',
              name: 'vip',
              component: () => import('@/components/guide/problemList/vip')
            },
            {
              path: 'commonProblem',
              name: 'commonProblem',
              component: () => import('@/components/guide/problemList/commonProblem')
            },
            {
              path: 'other',
              name: 'other',
              component: () => import('@/components/guide/problemList/other')
            },
          ]
        },
        {
          path: 'video',         // 视频教程
          name: 'video',
          component: () => import('@/components/guide/video')
        },
        {
          path: 'manual',        // 操作手册
          name: 'manual',
          component: () => import('@/components/guide/manual')
        },
        {
          path: 'protocal',      // 用户协议
          name: 'protocal',
          component: () => import('@/components/guide/protocal')
        },
        {
          path: 'opinion',       // 反馈意见
          name: 'opinion',
          component: () => import('@/components/guide/opinion')
        }
      ]
    },
    {
      path: '/policySupport',
      name: 'policySupport',
      component: () => import('@/components/policySupport')
    },
    {
      path: '/animationRendering',
      name: 'animationRendering',
      component: () => import('@/components/animationRendering')
    },
    {
      path: '/price',
      name: 'price',
      component: () => import('@/components/price')
    },
  ]
})
