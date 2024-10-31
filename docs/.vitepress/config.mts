import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'
import { generatePath } from '../../utils/index'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '薪火研发团队',
  description: '薪火研发团队',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://img.fre123.com/i/2024/10/22/67178075323f7.png',
      },
    ],
    ['meta', { name: 'keywords', content: '薪火研发团队' }],
  ],
  themeConfig: {
    logo: 'https://img.fre123.com/i/2024/10/22/67178075323f7.png',
    search: {
      provider: 'local',
    },
    nav: [{ text: '首页', link: '/' }],
    sidebar: {},
    socialLinks: [{ icon: 'github', link: 'https://github.com/xinhuo-dev' }],
    outlineTitle: '页面导航',
    footer: {
      copyright: 'Copyright © 2024-present 惠大薪火研发团队',
    },
  },
  titleTemplate: ':title - 薪火研发团队',
  vite: {
    plugins: [
      AutoSidebar({
        ignoreList: ['README.md', 'public'],
        deletePrefix: 'post',
        sideBarResolved(data) {
          return generatePath(data)
        },
      }),
    ],
  },
})
