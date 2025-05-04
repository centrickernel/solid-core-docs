import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'site-title-before': () => {
        return h('a', { href: '/guide/installation' }, 'Solid Core')
      }
    })
  }
}