import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

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
        titleFromFile: true,
        deletePrefix: 'post',
        sideBarResolved(data) {
          if (data['/post/'][0] && data['/post/'][0]?.items) {
            const resultList = data['/post/'][0]?.items?.reduce(
              (acc, nowItem) => {
                const path = `/post/${nowItem.text}/`
                //去掉序号
                const itemsList = nowItem?.items.map((item) => {
                  let newText = item.text
                  if (item.text.includes('.')) {
                    const textList = item.text?.split('.')
                    textList.shift()
                    newText = textList.join('.')
                  }
                  return { ...item, text: newText }
                })
                acc[path] = {
                  ...nowItem,
                  items: itemsList,
                }
                return acc
              },
              {}
            )
            return resultList
          } else return data
        },
      }),
    ],
  },
})
