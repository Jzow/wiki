import { defineConfig } from 'vitepress'

import {enConfig, zhConfig} from './configs'

export default defineConfig({
  outDir: '../dist',
  base: process.env.APP_BASE_PATH || '/',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      ...zhConfig,
    },
    en: {
      label: 'English',
      lang: 'en-US',
      ...enConfig,
    }
  },

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

})
