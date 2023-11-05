import type { NavLink } from './components/type'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: 'Tools',
    items: [
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: 'Online image compression tools',
        link: 'https://tinypng.com',
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'Json Parsing',
        desc: 'JSON online parsing and formatting verification',
        link: 'https://www.json.cn',
      },
    ],
  },
]
