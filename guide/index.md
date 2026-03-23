# 项目介绍

## 🦞 什么是 OTOClaw？

**OTOClaw一键龙虾** 是一个 **OpenClaw 一键安装整合包**，高性能跨平台 AI 助手管理工具。

> **"点一下，装好整套龙虾 AI"**

### 项目名称由来

- **OTOClaw** = **O**ne-**T**ouch **O**pen**Claw**
- 寓意：**一键部署，开箱即用**
- 中文名称：**一键龙虾**

## 📖 项目背景

项目在设计之初参考了 OpenClaw Manager 的产品思路，但现已发展为独立架构：采用 Rust 原生后端实现高性能系统调用，前端使用 Vue 3 Composition API + Pinia 状态管理打造现代化响应式 UI，并扩展了智能体管理、内置聊天界面、技能系统等创新功能。

## 🛠️ 技术栈

| 层级 | 技术 | 说明 |
|------|------|------|
| 前端框架 | Vue 3.5 | 用户界面 |
| 状态管理 | Pinia | Vue 官方状态管理 |
| 样式 | TailwindCSS | 原子化 CSS |
| 动画 | @vueuse/motion | Vue 动画库 |
| 图标 | Lucide Vue Next | 精美图标 |
| 后端 | Rust | 高性能系统调用 |
| 跨平台 | Tauri 2.0 | 原生应用封装 |

## 📁 项目结构

```
otoclaw/
├── src-tauri/                 # Rust 后端
│   ├── src/
│   │   ├── main.rs            # 入口
│   │   ├── commands/          # Tauri Commands
│   │   │   ├── service.rs     # 服务管理
│   │   │   ├── config.rs      # 配置管理
│   │   │   ├── process.rs     # 进程管理
│   │   │   └── diagnostics.rs # 诊断功能
│   │   ├── models/            # 数据模型
│   │   └── utils/             # 工具函数
│   ├── Cargo.toml
│   └── tauri.conf.json
│
├── src/                       # Vue 3 前端
│   ├── App.vue                # 根组件
│   ├── main.ts                # 入口文件
│   ├── components/
│   │   ├── Layout/            # 布局组件
│   │   ├── Dashboard/         # 仪表盘
│   │   ├── AIConfig/          # AI 配置
│   │   ├── Channels/          # 渠道配置
│   │   ├── Testing/           # 测试诊断
│   │   ├── Logs/              # 日志查看
│   │   ├── Settings/          # 设置
│   │   └── Setup/             # 安装向导
│   ├── composables/           # 组合式函数
│   │   └── useService.ts      # 服务管理
│   ├── stores/                # Pinia 状态管理
│   │   └── appStore.ts
│   ├── lib/                   # 工具库
│   │   ├── tauri.ts           # Tauri API 封装
│   │   └── logger.ts          # 日志工具
│   └── styles/
│       └── globals.css
│
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## 📦 构建产物

运行 `npm run tauri:build` 后，会在 `src-tauri/target/release/bundle/` 生成：

| 平台 | 格式 |
|------|------|
| macOS | `.dmg`, `.app` |
| Windows | `.msi`, `.exe` |
| Linux | `.deb`, `.AppImage` |

## 🎨 设计理念

- **暗色主题**：护眼舒适，适合长时间使用
- **现代 UI**：毛玻璃效果、流畅动画
- **响应式**：适配不同屏幕尺寸
- **高性能**：Rust 后端，极低内存占用

## 🔗 相关链接

- **OTOClaw 官网**: [otoclaw.com](https://www.otoclaw.com) - 下载服务、教程文档、社区交流
- **参考项目**: [OpenClaw Manager](https://github.com/miaoxworld/openclaw-manager) - 图形界面版本（React）
- **命令行版本**: [OpenClawInstaller](https://github.com/miaoxworld/OpenClawInstaller)
- **Tauri 官方文档**: [tauri.app](https://tauri.app/)
- **Vue 3 官方文档**: [vuejs.org](https://vuejs.org/)

## 📄 许可证

OTOClaw 基于 **MIT 许可证** 开源，您可以自由地使用、修改和分发本项目。

## 🤝 贡献指南

我们欢迎所有形式的贡献！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

---

<div style="text-align: center; margin-top: 48px;">
  <a href="/guide/features" style="display: inline-block; padding: 12px 24px; background: var(--vp-c-brand-1); color: white; border-radius: 8px; text-decoration: none; font-weight: 600;">
    了解功能特性 →
  </a>
</div>
