/*
 * @Author: zhang_gen_yuan
 * @Date: 2022-09-09 23:24:05
 * @LastEditTime: 2023-08-25 09:05:22
 * @Descripttion:
 */

import { demoBlockPlugin } from "vitepress-theme-demoblock";

export default {
  base: "/zgy-ui-docs/",
  head: [
    ['link', { rel: 'icon', href: '/logo/huashui.png' }]
  ],
  themeConfig: {
    siteTitle: "zgy-ui",
    logo: "/logo/zgy-ui.png",
    title: "zgy-ui",
    markdown: {
      config: (md) => {
        md.use(demoBlockPlugin);
      },
      lineNumbers: true,
    },
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/examples/button/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://gitee.com/zhanggenyuan/zgy-ui.git" },
    ],
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
          text: "表单",
          items: [
            {
              text: "Select 选择器",
              link: "/examples/select/",
            },
            {
              text: "Radio 单选框",
              link: "/examples/radio/",
            },
            {
              text: "Input 输入框",
              link: "/examples/input/",
            },
            {
              text: "DatePicker 日期选择器",
              link: "/examples/date-picker/",
            },
            {
              text: "Form 表单",
              link: "/examples/form/",
            },
          ],
        },
        {
          text: "导航",
          items: [
            {
              text: "BackTop 回到顶部",
              link: "/examples/backtop/",
            },
            {
              text: "Breadcrumb 面包屑",
              link: "/examples/breadcrumb/",
            },
            {
              text: "Tabs 标签页",
              link: "/examples/tabs/",
            },
          ],
        },
        {
          text: "数据展示",
          items: [
            {
              text: "Avatar 头像",
              link: "/examples/avatar/",
            },
            {
              text: "Badge 角标",
              link: "/examples/badge/",
            },
            {
              text: "Empty 空状态",
              link: "/examples/empty/",
            },
            {
              text: "Descriptions 描述列表",
              link: "/examples/descriptions/",
            },
            {
              text: "Image 图片",
              link: "/examples/image/",
            },
            {
              text: "Tag 标签",
              link: "/examples/tag/",
            },
            {
              text: "Paging 分页",
              link: "/examples/paging/",
            },
            {
              text: "Table 表格",
              link: "/examples/table/",
            },
          ],
        },
        {
          text: "反馈组件",
          items: [
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
            {
              text: "Dialog 对话框",
              link: "/examples/dialog/",
            },
          ],
        },
      ],
    },
  },
};
