import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '薪火研发团队',
  description: '薪火研发团队',
  head: [
    ['link', { rel: 'icon', href: './assets/images/logo.png' }],
    ['meta', { name: 'keywords', content: '薪火研发团队' }],
  ],
  themeConfig: {
    logo: './assets/images/logo.png',
    search: {
      provider: 'local',
    },
    nav: [{ text: '首页', link: '/' }],
    sidebar: [
      {
        text: '目录',
        items: [
          { text: '引言', link: '/front/introduction' },
          {
            text: '开发准备',
            items: [
              {
                text: '环境搭建',
                link: '/front/prepare/environment-setup',
              },
              {
                text: 'VSCode 使用',
                link: '/front/prepare/vscode-use',
              },
            ],
          },
          {
            text: '快速入门',
            items: [
              {
                text: '入门三件套',
                link: '/front/start/web-study',
              },
              {
                text: '实践',
                link: '/front/start/web-practice',
              },
            ],
          },
          { text: '框架学习', link: '/front/frame-study' },
          { text: '附录', link: '/front/appendix' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    outlineTitle: '页面导航',
  },
  titleTemplate: '薪火团队',
})
