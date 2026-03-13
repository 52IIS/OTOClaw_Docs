# 常见问题

本章节收集了 OTOClaw 使用过程中的常见问题及解决方案。

## 🍎 macOS 问题

### Q: 提示"已损坏，无法打开"错误？

**A:** 这是 macOS 的 Gatekeeper 安全机制阻止运行未签名应用。解决方法：

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

### Q: 应用无法访问文件或执行操作？

**A:** 授予完全磁盘访问权限：

1. 打开 **系统偏好设置** > **隐私与安全性** > **完全磁盘访问权限**
2. 点击锁图标解锁，添加 **OTOClaw**

重置权限：

```bash
# 重置辅助功能权限数据库
sudo tccutil reset Accessibility

# 重置完全磁盘访问权限
sudo tccutil reset SystemPolicyAllFiles
```

## 🪟 Windows 问题

### Q: 显示 SmartScreen 警告？

**A:** Windows 可能会显示 "Windows 已保护你的电脑" 警告：

1. 点击 **更多信息**
2. 点击 **仍要运行**

### Q: 应用无法启动，提示缺少 WebView2？

**A:** 请安装 [WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)。

### Q: 安装时被杀毒软件拦截？

**A:** 这是误报，可以：

1. 暂时关闭杀毒软件
2. 将 OTOClaw 添加到白名单
3. 从官方渠道下载确保安全

## 🐧 Linux 问题

### Q: AppImage 无法运行？

**A:** 添加执行权限：

```bash
# 添加执行权限
chmod +x OTOClaw_*.AppImage

# 运行
./OTOClaw_*.AppImage
```

### Q: 缺少依赖？

**A:** 安装必要依赖：

```bash
# Ubuntu/Debian
sudo apt install libwebkit2gtk-4.1-dev

# Fedora
sudo dnf install webkit2gtk4.1-devel
```

## 🚀 服务问题

### Q: 服务启动失败？

**A:** 请检查：

1. **端口被占用** - 更换端口或关闭占用端口的程序
2. **配置文件错误** - 检查配置文件格式
3. **权限不足** - 以管理员权限运行

```bash
# 检查端口占用
# Windows
netstat -ano | findstr :8080

# macOS/Linux
lsof -i :8080
```

### Q: 服务无法停止？

**A:** 强制终止进程：

```bash
# 查找进程
ps aux | grep otoclaw

# 终止进程
kill -9 <PID>
```

### Q: 服务运行但无法访问？

**A:** 检查：

1. 防火墙设置
2. 服务绑定地址（确保不是 127.0.0.1）
3. 端口是否正确

## 🤖 AI 配置问题

### Q: AI 连接测试失败？

**A:** 请检查：

1. **API Key 是否正确** - 确认没有多余空格
2. **网络连接** - 确保能访问 AI 服务
3. **API 端点** - 自定义端点是否正确
4. **余额不足** - 检查账户余额

### Q: 如何使用代理？

**A:** 设置环境变量：

```bash
# macOS/Linux
export HTTP_PROXY=http://127.0.0.1:7890
export HTTPS_PROXY=http://127.0.0.1:7890

# Windows (PowerShell)
$env:HTTP_PROXY = "http://127.0.0.1:7890"
$env:HTTPS_PROXY = "http://127.0.0.1:7890"
```

### Q: 支持哪些 AI 模型？

**A:** 支持以下提供商：

| 提供商 | 模型示例 |
|--------|----------|
| Anthropic | Claude 3 Opus, Sonnet, Haiku |
| OpenAI | GPT-4, GPT-3.5 |
| DeepSeek | DeepSeek Chat, Coder |
| Moonshot | Kimi |
| Gemini | Gemini Pro |
| Ollama | 本地模型 |

## 📱 消息渠道问题

### Q: Telegram Bot 不响应？

**A:** 检查：

1. **Bot Token 是否正确**
2. **Webhook 设置** - 确保服务器可被外网访问
3. **网络问题** - 检查是否能连接 Telegram 服务器

### Q: 飞书机器人配置失败？

**A:** 确保：

1. App ID 和 App Secret 正确
2. 事件订阅已配置
3. 权限设置正确
4. 网络可访问飞书服务器

### Q: 如何配置多个渠道？

**A:** 在配置文件中添加多个渠道：

```yaml
channels:
  telegram:
    enabled: true
    bot_token: "xxx"
  
  feishu:
    enabled: true
    app_id: "xxx"
    app_secret: "xxx"
```

## 🔧 开发问题

### Q: 如何从源码构建？

**A:** 

```bash
# 克隆项目
git clone https://github.com/52IIS/OTOClaw.git
cd OTOClaw

# 安装依赖
npm install

# 开发模式
npm run tauri:dev

# 构建
npm run tauri:build
```

### Q: Rust 编译错误？

**A:** 确保：

1. Rust 版本 >= 1.70
2. 安装了所有系统依赖
3. 运行 `cargo update` 更新依赖

### Q: 前端热重载不工作？

**A:** 检查：

1. 使用 `npm run tauri:dev` 而非 `npm run dev`
2. 检查文件是否正确保存
3. 清除缓存重新启动

## 📝 配置问题

### Q: 配置文件在哪里？

**A:** 

| 平台 | 路径 |
|------|------|
| macOS | `~/.openclaw/config.yaml` |
| Windows | `%USERPROFILE%\.openclaw\config.yaml` |
| Linux | `~/.openclaw/config.yaml` |

### Q: 如何重置配置？

**A:** 删除配置文件后重启应用：

```bash
# macOS/Linux
rm ~/.openclaw/config.yaml

# Windows
del %USERPROFILE%\.openclaw\config.yaml
```

### Q: 环境变量如何配置？

**A:** 创建 `~/.openclaw/env` 文件：

```bash
ANTHROPIC_API_KEY=sk-ant-xxx
OPENAI_API_KEY=sk-xxx
TELEGRAM_BOT_TOKEN=xxx
```

## 🔄 更新问题

### Q: 如何更新 OTOClaw？

**A:** 

1. **自动更新** - 应用会自动检查更新
2. **手动更新** - 从 [GitHub Releases](https://github.com/52IIS/OTOClaw/releases) 下载最新版本

### Q: 更新后配置丢失？

**A:** 配置文件存储在用户目录，更新不会影响。如果丢失，请检查：

1. 配置文件路径是否正确
2. 是否使用了不同的用户账户

## 📞 获取帮助

### Q: 如何获取技术支持？

**A:** 您可以通过以下方式：

1. 查阅 [使用文档](/guide/usage)
2. 浏览 [API 参考](/api/)
3. 在 [GitHub Issues](https://github.com/52IIS/OTOClaw/issues) 提问

### Q: 如何贡献代码？

**A:** 

1. Fork 项目仓库
2. 创建功能分支：`git checkout -b feature/my-feature`
3. 提交代码：`git commit -m 'Add my feature'`
4. 推送分支：`git push origin feature/my-feature`
5. 创建 Pull Request

---

## 没有找到答案？

如果您的问题没有在这里找到答案，请：

- 在 [GitHub](https://github.com/52IIS/OTOClaw/issues) 提交 Issue
- 查阅完整的 [API 文档](/api/)
- 返回 [首页](/) 重新开始

<div style="text-align: center; margin-top: 48px;">
  <a href="https://github.com/52IIS/OTOClaw/issues" style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--vp-c-brand-1); color: white; border-radius: 8px; text-decoration: none; font-weight: 600;" target="_blank">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
    在 GitHub 提交问题
  </a>
</div>
