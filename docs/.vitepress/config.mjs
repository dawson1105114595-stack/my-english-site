import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/my-english-site/',
  title: "Dawson's Hub",
  description: "Less is More.",
  
  themeConfig: {
    // 导航栏
    nav: [
      { text: ' Home', link: '/' },
      { text: 'About', link: '/intro' }
    ],

    // 侧边栏：极简风格
    sidebar: [
      {
        text: 'Language',
        items: [
          { text: 'Vocabulary', link: '/vocabulary/index' },
          { text: 'Grammar', link: '/grammar/index' }
        ]
      },
      {
        text: 'Writing',
        items: [
          { text: 'Applied Writing', link: '/writing/index' },
          { text: 'Continuation', link: '/continuation/index' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dawson1105114595-stack/my-english-site' }
    ]
  },

  // 🍎 苹果风深度定制 CSS
  head: [
    ['style', {}, `
      :root {
        /* 苹果标志性的纯净色调 */
        --vp-c-brand: #000000;           /* 主色调为纯黑 */
        --vp-c-brand-light: #424245;
        --vp-c-brand-lighter: #86868b;
        --vp-home-hero-name-background: linear-gradient(135deg, #000000 0%, #434343 100%);
        
        /* 按钮样式：苹果标志性的蓝色 */
        --vp-button-brand-bg: #0071e3;
        --vp-button-brand-hover-bg: #0077ed;
        --vp-button-brand-text: #ffffff;
        
        /* 字体：优先使用苹果系统字体 */
        --vp-font-family-base: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
      }

      /* 磨砂玻璃效果的导航栏 */
      .VPNav {
        backdrop-filter: blur(20px) saturate(180%);
        background-color: rgba(255, 255, 255, 0.7) !important;
      }

      /* 让卡片看起来更有质感 */
      .VPFeature {
        border: none !important;
        background-color: #f5f5f7 !important; /* 苹果官网常用的浅灰背景 */
        border-radius: 18px !important;
        transition: transform 0.3s ease;
      }

      .VPFeature:hover {
        transform: scale(1.02);
      }
    `]
  ]
})