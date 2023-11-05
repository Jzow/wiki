import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  'bugs/': [
    {
      text: 'Kotlin',
      items: [
        { text: '关于kotlin的变量问题', link: '/bugs/kotlin/variable' },
      ],
    },
    {
      text: 'Java',
      collapsed: false,
      items: [
        { text: '类型转换', link: '' },
      ],
    },
  ]
}

export const enSidebar: DefaultTheme.Config['sidebar'] = {
  'bugs/': [
    {
      text: 'Kotlin',
      items: [
        { text: '关于kotlin的变量问题', link: '/bugs/kotlin/variable' },
      ],
    },
    {
      text: 'Java',
      collapsed: false,
      items: [
        { text: '类型转换', link: '' },
      ],
    },
  ]
}

