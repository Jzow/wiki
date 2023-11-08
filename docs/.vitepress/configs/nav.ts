import type {DefaultTheme, LocaleSpecificConfig} from 'vitepress'
import {enSidebar, sidebar} from "./sidebar";

export const zhNav: DefaultTheme.Config['nav'] = [
  { text: '导航栏', link: '/nav/' },
  { text: '读书笔记',
    items: [
      { text: '卡耐基', link: '/books/r1' },
      { text: '凯文凯利', link: '/books/' },
    ],
    activeMatch: '^/books',
  },
  {
    text: 'Bug记录',
    items: [
      { text: 'Kotlin', link: '/bugs/kotlin/variable' },
      { text: 'Java', link: '/bugs/java/' },
    ],
    activeMatch: '^/bugs',
  },
  {
    text: '模板引用',
    link: 'https://github.com/maomao1996/vitepress-nav-template',
  },
]

export const enNav: DefaultTheme.Config['nav'] = [
  { text: 'Navigation bar', link: '/en/nav/' },
  {
    text: 'Book notes',
    items: [
      { text: 'Dale Carnegie', link: '/en/books/r1' },
      { text: 'Kevin Kelly', link: '/en/books/' },
    ],
    activeMatch: '^/en/books',
  },
  {
    text: 'Bug Records',
    items: [
      { text: 'Kotlin', link: '/en/bugs/kotlin/variable' },
      { text: 'Java', link: '/en/bugs/java/' },
    ],
    activeMatch: '^/en/bugs',
  },
  {
    text: 'Template reference',
    link: 'https://github.com/maomao1996/vitepress-nav-template',
  },
]

export const enConfig: LocaleSpecificConfig = {
  lang: 'en-US',
  title: 'James Zow',
  description: 'My Personal Blog',
  themeConfig: {
    i18nRouting: true,
    /* logo: '/logo.png',*/
    nav: enNav,
    enSidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: 'Table of contents for this page',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/jzow' }],

    footer: {
      copyright: 'Copyright © 2023-2033 James Zow',
    },

    darkModeSwitchLabel: 'Appearance',
    returnToTopLabel: 'Top',

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
  },
}

export const zhConfig: LocaleSpecificConfig = {
  lang: 'zh-CN',
  title: 'James Zow',
  description: '个人博客 琐事记录',

  /* 主题配置 */
  themeConfig: {
    i18nRouting: true,
    /* logo: '/logo.png',*/
    nav: zhNav,
    langMenuLabel: 'zh-CN',
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/jzow' }],

    footer: {
      copyright: 'Copyright © 2023-2033 James Zow',
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },
}
