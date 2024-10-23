import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "薪火研发团队",
  description: "薪火研发团队",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://img.fre123.com/i/2024/10/22/67178075323f7.png",
      },
    ],
    ["meta", { name: "keywords", content: "薪火研发团队" }],
  ],
  themeConfig: {
    logo: "https://img.fre123.com/i/2024/10/22/67178075323f7.png",
    search: {
      provider: "local",
    },
    nav: [{ text: "首页", link: "/" }],
    sidebar: [
      {
        text: "目录",
        items: [
          { text: "引言", link: "/web/01.introduction/README" },
          {
            text: "开发准备",
            items: [
              {
                text: "环境搭建",
                link: "/web/prepare/environment-setup",
              },
              {
                text: "VSCode 使用",
                link: "/web/prepare/vscode-use",
              },
            ],
          },
          {
            text: "快速入门",
            items: [
              {
                text: "入门三件套",
                link: "/web/start/web-study",
              },
              {
                text: "实践",
                link: "/web/start/web-practice",
              },
            ],
          },
          { text: "框架学习", link: "/web/frame-study" },
          { text: "附录", link: "/web/appendix" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/xinhuo-dev" }],
    outlineTitle: "页面导航",
  },
  titleTemplate: "薪火研发团队",
});
