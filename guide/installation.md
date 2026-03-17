# 安装指南

本指南将帮助您快速安装和配置 OTOClaw。

## 📥 下载安装

### 方式一：直接下载（推荐）

访问 [OTOClaw 下载页面](/downloads/) 或 [GitHub Releases](https://github.com/52IIS/OTOClaw/releases) 下载对应平台的安装包。

| 平台 | 文件格式 | 说明 |
|------|----------|------|
| macOS (Intel) | `.dmg` | Intel 芯片 Mac |
| macOS (Apple Silicon) | `.dmg` | M1/M2/M3 芯片 Mac |
| Windows | `.exe` / `.msi` | Windows 10/11 |
| Linux | `.deb` / `.AppImage` | Ubuntu/Debian 等 |

### 方式二：从源码构建

如果您想从源码构建，请参考下面的开发环境配置。

## 🛠️ 开发环境配置

### 环境要求

| 软件 | 版本要求 |
|------|----------|
| Node.js | >= 22.0 |
| Rust | >= 1.70 |
| pnpm | 推荐（或 npm） |

### macOS 额外依赖

```bash
xcode-select --install
```

### Windows 额外依赖

1. [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
2. [WebView2](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)

### Linux 额外依赖

**Ubuntu/Debian:**

```bash
sudo apt update
sudo apt install libwebkit2gtk-4.1-dev build-essential curl wget file libxdo-dev libssl-dev libayatana-appindicator3-dev librsvg2-dev
```

**Fedora:**

```bash
sudo dnf install webkit2gtk4.1-devel openssl-devel curl wget file libxdo-devel
```

## 🚀 从源码构建

### 克隆项目

```bash
# 克隆项目
git clone https://github.com/52IIS/OTOClaw.git
cd OTOClaw

# 安装依赖
npm install
```

### 开发模式运行

```bash
# 开发模式（热重载）
npm run tauri:dev

# 仅运行前端
npm run dev
```

### 构建发布版本

```bash
# 构建前端
npm run build

# 构建完整应用
npm run tauri:build
```

构建产物位于 `src-tauri/target/release/bundle/` 目录。

## 📝 配置说明

### Tauri 配置 (tauri.conf.json)

主要配置项：

```json
{
  "app": {
    "windows": [
      {
        "title": "OTOClaw",
        "width": 1200,
        "height": 800
      }
    ]
  },
  "bundle": {
    "identifier": "com.otoclaw.app"
  }
}
```

### 环境变量

应用会读取 `~/.openclaw/env` 中的环境变量配置。

## 🍎 macOS 常见问题

### "已损坏，无法打开" 错误

macOS 的 Gatekeeper 安全机制可能会阻止运行未签名的应用。

**方法一：移除隔离属性（推荐）**

```bash
# 对 .app 文件执行
xattr -cr /Applications/OTOClaw.app

# 或者对 .dmg 文件执行（安装前）
xattr -cr ~/Downloads/OTOClaw.dmg
```

**方法二：通过系统偏好设置允许**

1. 打开 **系统偏好设置** > **隐私与安全性**
2. 在 "安全性" 部分找到被阻止的应用
3. 点击 **仍要打开**

**方法三：临时禁用 Gatekeeper（不推荐）**

```bash
# 禁用（需要管理员密码）
sudo spctl --master-disable

# 安装完成后重新启用
sudo spctl --master-enable
```

### 权限问题

如果应用无法正常访问文件或执行操作：

**授予完全磁盘访问权限**

1. 打开 **系统偏好设置** > **隐私与安全性** > **完全磁盘访问权限**
2. 点击锁图标解锁，添加 **OTOClaw**

**重置权限**

```bash
# 重置辅助功能权限数据库
sudo tccutil reset Accessibility

# 重置完全磁盘访问权限
sudo tccutil reset SystemPolicyAllFiles
```

## 🪟 Windows 常见问题

### SmartScreen 警告

Windows 可能会显示 "Windows 已保护你的电脑" 警告：

1. 点击 **更多信息**
2. 点击 **仍要运行**

### 缺少 WebView2

如果应用无法启动，请安装 [WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)。

## 🐧 Linux 常见问题

### AppImage 无法运行

```bash
# 添加执行权限
chmod +x OTOClaw_*.AppImage

# 运行
./OTOClaw_*.AppImage
```

### 依赖问题

如果遇到依赖缺失，请安装：

```bash
# Ubuntu/Debian
sudo apt install libwebkit2gtk-4.1-dev
```

## 🔧 开发命令参考

```bash
# 开发模式（热重载）
npm run tauri:dev

# 仅运行前端
npm run dev

# 构建前端
npm run build

# 构建完整应用
npm run tauri:build

# 检查 Rust 代码
cd src-tauri && cargo check

# 运行 Rust 测试
cd src-tauri && cargo test
```

## 下一步

安装完成后，您可以：

- [查看使用文档](/guide/usage) - 了解如何使用 OTOClaw
- [浏览 API 参考](/api/) - 查看完整的 API 文档
- [常见问题](/faq/) - 解答常见疑问

---

<div style="text-align: center; margin-top: 48px;">
  <a href="/guide/usage" style="display: inline-block; padding: 12px 24px; background: var(--vp-c-brand-1); color: white; border-radius: 8px; text-decoration: none; font-weight: 600;">
    开始使用 →
  </a>
</div>
