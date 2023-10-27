import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wiki",
  description: "James Zow personal blog website",
  base: "/",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jzow' },
      { icon: 'twitter', link: 'https://twitter.com/wansenkegang'},
    ]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '中文',
      lang: 'zh'
    }
  }
})
