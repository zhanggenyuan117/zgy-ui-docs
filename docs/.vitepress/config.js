/*
 * @Author: zhang_gen_yuan
 * @Date: 2022-09-09 23:24:05
 * @LastEditTime: 2022-09-12 10:23:57
 * @Descripttion:
 */

import { demoBlockPlugin } from "vitepress-theme-demoblock";

export default {
  themeConfig: {
    siteTitle: false,
    logo: "/logo/zgy-ui.png",
    title: "zgy-ui",
    markdown: {
      config: (md) => {
        md.use(demoBlockPlugin)
      },
      lineNumbers: true,
    },
    base:'/docs/',
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/examples/button/" },
    ],
    // socialLinks: [{ icon: "github", link: "https://gitee.com/geeksdidi" }],
    sidebar: {
      "/guild/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guild/installation",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
        {
          text: "进阶",
          items: [],
        },
      ],
      "/examples/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Button按钮",
              link: "/examples/button/",
            },
            {
              text: "Icon图标",
              link: "/examples/icon/",
            },
            {
              text: "Row行布局",
              link: "/examples/row/",
            },
            {
              text: "Col列布局",
              link: "/examples/col/",
            },
          ],
        },
        {
          text:"数据展示",
          items:[{
            text:"Image 图片",
            link:"/examples/image/"
          }]
        },
        {
          text: "反馈组件",
          items:[
            {
              text: "Message消息提示",
              link: "/examples/message/",
            },
            {
              text: "Message消息弹出框",
              link: "/examples/messagebox/",
            },
            {
              text: "Loading加载",
              link: "/examples/loading/",
            },
          ]
        }
      ],
    },
  },
};
