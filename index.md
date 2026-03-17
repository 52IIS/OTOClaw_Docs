---
layout: home
title: OTOClaw一键龙虾
titleTemplate: 点一下，装好整套龙虾 AI

hero:
  name: 🦞 OTOClaw
  text: 一键龙虾
  tagline: 点一下，装好整套龙虾 AI - OpenClaw 一键安装整合包
  image:
    src: /logo.svg
    alt: OTOClaw Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: 下载应用
      link: /downloads/
    - theme: alt
      text: 联系我们
      link: /about/#问题反馈渠道
    - theme: alt
      text: GitHub
      link: https://github.com/52IIS/OTOClaw

features:
  - icon: 📊
    title: 仪表盘监控
    details: 实时监控服务状态，一键管理 AI 助手服务。支持端口、进程 ID、内存、运行时间监控，快捷启动/停止/重启/诊断。
  - icon: 🤖
    title: AI 模型配置
    details: 支持 14+ AI 提供商（Anthropic、OpenAI、DeepSeek、Moonshot、Gemini 等），自定义 API 端点，一键切换主模型。
  - icon: 📱
    title: 消息渠道
    details: 连接多种即时通讯平台，支持 Telegram、Discord、Slack、飞书、微信、iMessage、钉钉等全渠道 AI 助手。
  - icon: ⚡
    title: 高性能
    details: 基于 Tauri 2.0 + Rust 构建，极低内存占用，原生应用体验，支持 macOS、Windows、Linux 三大平台。
  - icon: 🎨
    title: 现代 UI
    details: Vue 3 + TailwindCSS 构建的现代界面，暗色主题护眼舒适，毛玻璃效果、流畅动画，响应式设计。
  - icon: 🔧
    title: 测试诊断
    details: 内置系统环境检查、AI 连接测试、渠道连通性测试，快速定位问题，保障服务稳定运行。
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('OTOClaw - One-Touch OpenClaw')
})
</script>

<div class="home-cta">
  <div class="home-cta-content">
    <h2>🦞 为什么选择 OTOClaw？</h2>
    <p>
      <strong>OTOClaw = One-Touch OpenClaw</strong>，寓意"一键部署，开箱即用"。
      高性能跨平台 AI 助手管理工具，基于 <strong>Tauri 2.0 + Vue 3 + TypeScript + Rust</strong> 构建。
      让您轻松管理 OpenClaw AI 助手服务，一键配置、一键启动、一键部署。
    </p>
    <div class="tech-badges">
      <span class="badge">Tauri 2.0</span>
      <span class="badge">Vue 3.5</span>
      <span class="badge">TypeScript</span>
      <span class="badge">Rust</span>
      <span class="badge">TailwindCSS</span>
    </div>
    <div class="home-cta-actions">
      <a href="/guide/" class="action primary">查看文档</a>
      <a href="https://github.com/52IIS/OTOClaw" class="action secondary" target="_blank">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        GitHub
      </a>
    </div>
  </div>
</div>

<div class="platform-support">
  <h3>支持平台</h3>
  <div class="platforms">
    <div class="platform">
      <span class="platform-icon">🍎</span>
      <span class="platform-name">macOS</span>
    </div>
    <div class="platform">
      <span class="platform-icon">🪟</span>
      <span class="platform-name">Windows</span>
    </div>
    <div class="platform">
      <span class="platform-icon">🐧</span>
      <span class="platform-name">Linux</span>
    </div>
  </div>
</div>

<style>
.home-cta {
  padding: 64px 24px;
  text-align: center;
  background: var(--vp-c-bg-soft);
  margin-top: 48px;
}

.home-cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.home-cta h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--vp-c-text-1);
}

.home-cta p {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  line-height: 1.8;
  margin-bottom: 24px;
}

.tech-badges {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.badge {
  display: inline-block;
  padding: 4px 12px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 500;
}

.home-cta-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.home-cta .action {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.home-cta .action.primary {
  background: var(--vp-c-brand-1);
  color: white;
}

.home-cta .action.primary:hover {
  background: var(--vp-c-brand-dark);
}

.home-cta .action.secondary {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.home-cta .action.secondary:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.platform-support {
  padding: 48px 24px;
  text-align: center;
  border-top: 1px solid var(--vp-c-divider);
}

.platform-support h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: var(--vp-c-text-1);
}

.platforms {
  display: flex;
  gap: 32px;
  justify-content: center;
  flex-wrap: wrap;
}

.platform {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.platform-icon {
  font-size: 2.5rem;
}

.platform-name {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
}
</style>
