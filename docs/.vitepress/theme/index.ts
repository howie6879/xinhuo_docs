import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  NotFound: () => '404',
  enhanceApp({ app, router, siteData }) {},
}
