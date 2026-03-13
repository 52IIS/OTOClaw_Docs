import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OTOClaw一键龙虾',
  description: 'OpenClaw 一键安装整合包 - 点一下，装好整套龙虾 AI - 基于 Tauri 2.0 + Vue 3 + TypeScript + Rust 构建',
  lang: 'zh-CN',
  
  head: [
    ['meta', { name: 'theme-color', content: '#ff6b35' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'keywords', content: 'OTOClaw, OpenClaw, AI助手, Tauri, Vue3, Rust, Telegram Bot, 飞书机器人' }],
    
    ['meta', { name: 'description', content: 'OTOClaw一键龙虾 - OpenClaw一键安装整合包，基于Tauri 2.0 + Vue 3 + TypeScript + Rust构建的跨平台AI助手管理工具' }],
    
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'OTOClaw一键龙虾 - 点一下，装好整套龙虾AI' }],
    ['meta', { property: 'og:description', content: 'OTOClaw一键龙虾 - OpenClaw一键安装整合包，基于Tauri 2.0 + Vue 3 + TypeScript + Rust构建的跨平台AI助手管理工具' }],
    ['meta', { property: 'og:image', content: 'https://otoclaw.com/logo.png' }],
    ['meta', { property: 'og:url', content: 'https://otoclaw.com' }],
    ['meta', { property: 'og:site_name', content: 'OTOClaw一键龙虾' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'OTOClaw一键龙虾 - 点一下，装好整套龙虾AI' }],
    ['meta', { name: 'twitter:description', content: 'OTOClaw一键龙虾 - OpenClaw一键安装整合包，基于Tauri 2.0 + Vue 3 + TypeScript + Rust构建的跨平台AI助手管理工具' }],
    ['meta', { name: 'twitter:image', content: 'https://otoclaw.com/logo.png' }],
    ['meta', { name: 'twitter:site', content: '@OTOClaw' }],
    ['meta', { name: 'twitter:creator', content: '@OTOClaw' }],
    
    ['meta', { name: 'wechat:title', content: 'OTOClaw一键龙虾' }],
    ['meta', { name: 'wechat:description', content: 'OpenClaw一键安装整合包，基于Tauri 2.0 + Vue 3 + TypeScript + Rust构建的跨平台AI助手管理工具' }],
    ['meta', { name: 'wechat:image', content: 'https://otoclaw.com/logo.png' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'OTOClaw一键龙虾',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '功能特性', link: '/guide/features' },
      { text: 'API参考', link: '/api/' },
      { text: '下载', link: '/downloads' },
      { text: '常见问题', link: '/faq/' },
      {
        text: 'GitHub',
        link: 'https://github.com/52IIS/OTOClaw',
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始使用',
          items: [
            { text: '项目介绍', link: '/guide/' },
            { text: '功能特性', link: '/guide/features' },
            { text: '安装指南', link: '/guide/installation' },
            { text: '使用文档', link: '/guide/usage' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API参考',
          items: [
            { text: 'API概览', link: '/api/' },
            { text: '配置API', link: '/api/config' },
            { text: '模块API', link: '/api/modules' },
          ]
        }
      ],
      '/faq/': [
        {
          text: '帮助',
          items: [
            { text: '常见问题', link: '/faq/' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/52IIS/OTOClaw' }
    ],

    footer: {
      message: '基于 MIT 许可证发布 | Made with ❤️ by OTOClaw Team',
      copyright: `Copyright © ${new Date().getFullYear()} OTOClaw Team`
    },

    editLink: {
      pattern: 'https://github.com/52IIS/OTOClaw_Docs/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  }
})
