import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/my-english-site/',
  title: "Dawson's Hub",
  description: "English Learning Hub",
  
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '自我介绍', link: '/intro' }
    ],

    // 侧边栏：按照内容类型分类
    sidebar: [
      {
        text: '📖 词汇积累',
        collapsed: false,
        items: [
          { text: '核心词汇', link: '/vocabulary/index' },
          { text: '地道表达', link: '/vocabulary/phrases' }
        ]
      },
      {
        text: '📐 语法专题',
        collapsed: false,
        items: [
          { text: '时态详解', link: '/grammar/index' },
          { text: '长难句分析', link: '/grammar/sentences' }
        ]
      },
      {
        text: '✉️ 写作应用',
        collapsed: false,
        items: [
          { text: '应用文模板', link: '/writing/index' },
          { text: '读后续写素材', link: '/continuation/index' }
        ]
      },
      {
        text: '👤 关于我',
        items: [
          { text: '开发者介绍', link: '/intro' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dawson1105114595-stack/my-english-site' }
    ]
  },

  // 浅蓝色主题自定义
  head: [
    ['style', {}, `
      :root {
        --vp-c-brand: #3b82f6;      /* 浅蓝色主色调 */
        --vp-c-brand-light: #60a5fa;
        --vp-c-brand-lighter: #93c5fd;
        --vp-c-brand-dark: #2563eb;
        --vp-c-brand-darker: #1d4ed8;
      }
    `]
  ]
})