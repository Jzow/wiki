import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  'articles/': [
    {
      text: '算法',
      items: [
        { text: '二分算法', link: '/articles/binary' },
      ],
    },
    {
      text: '比赛',
      items: [
        { text: 'KEN Labs元宇宙黑客松', link: '/articles/ipfs' },
        { text: '西安曲江数字经济大赛', link: '/articles/bp1' },
      ],
    },
  ],
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
  ],
  'books/': [
    {
      text: '卡耐基',
      items: [
        { text: '《人性的优点》读后感言', link: '/books/r1' },
      ],
    },
    {
      text: '凯文凯利',
      collapsed: false,
      items: [
        { text: '《500天后的世界》', link: '' },
      ],
    },
  ]
}

export const enSidebar: DefaultTheme.Config['sidebar'] = {
  'en/bugs/': [
    {
      text: 'Kotlin',
      items: [
        { text: 'On the Variable Problem of Kotlin', link: 'en/bugs/kotlin/variable' },
      ],
    },
    {
      text: 'Java',
      collapsed: false,
      items: [
        { text: 'Type conversion', link: '' },
      ],
    },
  ],
  'en/books/': [
    {
      text: 'Dale Carnegie',
      items: [
        { text: '"How to Stop Worrying and Start Living"', link: 'en/books/r1' },
      ],
    },
    {
      text: 'Kevin Kelly',
      collapsed: false,
      items: [
        { text: '"The World After 500 Days"', link: '' },
      ],
    },
  ]
}

