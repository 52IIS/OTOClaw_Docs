# OTOClaw_Docs

> 🦞 一键龙虾 - OTOClaw = One-Touch OpenClaw - 寓意：一键部署，开箱即用

## 📖 项目简介

本仓库是 **OTOClaw一键龙虾** 官方文档网站源码，基于 [VitePress](https://vitepress.dev/) 构建。

OTOClaw 是一个 **OpenClaw 一键安装整合包**，高性能跨平台 AI 助手管理工具，基于 **Tauri 2.0 + Vue 3 + TypeScript + Rust** 构建。

### 项目名称由来

- **OTOClaw** = **O**ne-**T**ouch **O**pen**Claw**
- 寓意：**一键部署，开箱即用**
- 中文名称：**一键龙虾**

## 🔗 相关仓库

| 仓库 | 说明 |
|------|------|
| [OTOClaw](https://github.com/52IIS/OTOClaw) | 主项目仓库（Tauri 应用） |
| [OTOClaw_Docs](https://github.com/52IIS/OTOClaw_Docs) | 文档官网仓库（本仓库） |

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm / pnpm / yarn

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/52IIS/OTOClaw_Docs.git

# 进入目录
cd OTOClaw_Docs

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 📁 项目结构

```
OTOClaw_Docs/
├── .vitepress/          # VitePress 配置
│   ├── config.ts        # 站点配置
│   ├── cache/           # 构建缓存（已忽略）
│   └── theme/           # 主题定制
├── guide/               # 使用指南
│   ├── index.md         # 项目介绍
│   ├── features.md      # 功能特性
│   ├── installation.md  # 安装指南
│   └── usage.md         # 使用文档
├── api/                 # API 参考
│   ├── index.md         # API 概览
│   ├── config.md        # 配置 API
│   └── modules.md       # 模块 API
├── faq/                 # 常见问题
│   └── index.md
├── public/              # 静态资源
│   └── logo.svg
├── index.md             # 首页
├── package.json
└── README.md
```

## 🤝 贡献指南

若发现文档官网存在错误，欢迎提交 Issue 或 Pull Request 进行修改。

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b fix/doc-update`)
3. 提交更改 (`git commit -m 'fix: update documentation'`)
4. 推送到分支 (`git push origin fix/doc-update`)
5. 创建 Pull Request

## 📄 许可证

本项目基于 **MIT 许可证** 开源，您可以自由地使用、修改和分发。

## 🔗 相关链接

- **OTOClaw 官网**: [otoclaw.com](https://otoclaw.com)
- **OTOClaw 主仓库**: [github.com/52IIS/OTOClaw](https://github.com/52IIS/OTOClaw)
- **原项目**: [OpenClaw Manager](https://github.com/miaoxworld/openclaw-manager) ⭐ 1.2k

---

<div align="center">

Made with ❤️ by OTOClaw Team

</div>
