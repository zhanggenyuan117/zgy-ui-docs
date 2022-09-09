

export default {
  themeConfig: {
    siteTitle: false,
    logo: "/logo/zgy-ui.png",
    title: 'zgy-ui',
    markdown: {
      config: (md) => {
        const { demoBlockPlugin } = require('vitepress-theme-demoblock')
        md.use(demoBlockPlugin)
      }
    },

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
          items: [
            // {
            //   text: "xx",
            //   link: "/xx",
            // },
          ],
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
          ],
        },
      ],
    },
  },
};
