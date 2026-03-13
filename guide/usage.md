# 使用文档

本章节将详细介绍 OTOClaw 的使用方法。

## 🚀 快速开始

### 首次启动

1. 安装 OTOClaw 后，双击打开应用
2. 首次启动会显示安装向导
3. 按照向导提示完成初始配置

### 安装向导

安装向导会引导您完成以下配置：

1. **选择安装目录** - 选择 OpenClaw 的安装位置
2. **配置 AI 提供商** - 设置默认的 AI 模型
3. **配置消息渠道** - 设置 Telegram/飞书等渠道
4. **启动服务** - 完成配置后启动服务

## 📊 仪表盘使用

### 服务状态监控

仪表盘实时显示服务状态：

| 指标 | 说明 |
|------|------|
| 端口 | 服务监听端口 |
| 进程 ID | 当前运行的进程 ID |
| 内存 | 服务内存占用 |
| 运行时间 | 服务已运行时长 |

### 快捷操作

- **启动** - 启动 OpenClaw 服务
- **停止** - 停止正在运行的服务
- **重启** - 重启服务
- **诊断** - 运行诊断检查

### 实时日志

- 日志实时滚动显示
- 支持按级别过滤（Info、Warning、Error）
- 支持日志搜索
- 可导出日志文件

## 🤖 AI 配置

### 添加 AI 提供商

1. 进入 **AI 配置** 页面
2. 点击 **添加提供商**
3. 选择提供商类型
4. 输入 API Key 和相关配置
5. 点击 **保存**

### 配置参数

| 参数 | 说明 |
|------|------|
| API Key | AI 提供商的 API 密钥 |
| API 端点 | 自定义 API 地址（可选） |
| 模型 | 选择使用的模型 |
| 主模型 | 设为默认使用的模型 |

### 支持的 AI 提供商

- **Anthropic** - Claude 系列模型
- **OpenAI** - GPT-4、GPT-3.5
- **DeepSeek** - 国产大模型
- **Moonshot** - 月之暗面 Kimi
- **Gemini** - Google AI
- **Azure OpenAI** - 微软 Azure 部署
- **Ollama** - 本地模型
- **OpenRouter** - 多模型聚合
- **Groq** - 高速推理
- **Mistral** - 开源模型

## 📱 消息渠道配置

### Telegram Bot

1. 在 Telegram 中创建 Bot（通过 @BotFather）
2. 获取 Bot Token
3. 在 OTOClaw 中配置：

```yaml
telegram:
  bot_token: "YOUR_BOT_TOKEN"
  allowed_updates:
    - message
    - edited_message
```

### 飞书机器人

1. 在飞书开放平台创建应用
2. 获取 App ID 和 App Secret
3. 配置事件订阅
4. 在 OTOClaw 中配置：

```yaml
feishu:
  app_id: "YOUR_APP_ID"
  app_secret: "YOUR_APP_SECRET"
  encrypt_key: "YOUR_ENCRYPT_KEY"
```

### Discord Bot

1. 在 Discord Developer Portal 创建应用
2. 创建 Bot 并获取 Token
3. 配置 OAuth2 重定向
4. 在 OTOClaw 中配置：

```yaml
discord:
  bot_token: "YOUR_BOT_TOKEN"
  application_id: "YOUR_APPLICATION_ID"
```

### 更多渠道

| 渠道 | 配置难度 | 说明 |
|------|----------|------|
| Slack | 中等 | 需要 Slack App |
| WhatsApp | 较高 | 需要商业 API |
| iMessage | 较高 | 仅限 macOS |
| 微信 | 较高 | 需要企业微信 |
| 钉钉 | 中等 | 需要钉钉机器人 |

## ⚡ 服务管理

### 启动服务

```bash
# 通过界面启动
点击仪表盘的「启动」按钮

# 或通过命令行
otoclaw start
```

### 停止服务

```bash
# 通过界面停止
点击仪表盘的「停止」按钮

# 或通过命令行
otoclaw stop
```

### 重启服务

```bash
# 通过界面重启
点击仪表盘的「重启」按钮

# 或通过命令行
otoclaw restart
```

### 开机自启

1. 进入 **设置** 页面
2. 找到 **开机自启** 选项
3. 开启开关

## 🧪 测试诊断

### 系统环境检查

运行系统诊断：

1. 进入 **测试诊断** 页面
2. 点击 **系统检查**
3. 查看检查结果

检查项目：
- 运行环境依赖
- 端口占用情况
- 配置文件有效性
- 权限设置

### AI 连接测试

测试 AI 提供商连接：

1. 选择要测试的 AI 提供商
2. 点击 **测试连接**
3. 查看测试结果

### 渠道连通性测试

测试消息渠道：

1. 选择要测试的渠道
2. 点击 **发送测试消息**
3. 检查消息是否收到

## ⚙️ 设置

### 常规设置

| 设置项 | 说明 |
|--------|------|
| 开机自启 | 系统启动时自动运行 |
| 最小化到托盘 | 关闭窗口时最小化到系统托盘 |
| 自动检查更新 | 自动检查新版本 |

### 外观设置

| 设置项 | 说明 |
|--------|------|
| 主题 | 浅色/深色/跟随系统 |
| 语言 | 界面语言 |
| 动画 | 启用/禁用动画效果 |

### 高级设置

| 设置项 | 说明 |
|--------|------|
| 日志级别 | 调试/信息/警告/错误 |
| 日志保留 | 日志文件保留天数 |
| 数据目录 | 数据存储位置 |

## 🔧 开发命令

### 命令行工具

```bash
# 启动服务
otoclaw start

# 停止服务
otoclaw stop

# 重启服务
otoclaw restart

# 查看状态
otoclaw status

# 查看日志
otoclaw logs

# 运行诊断
otoclaw diagnose

# 检查版本
otoclaw --version
```

### 开发模式

```bash
# 开发模式（热重载）
npm run tauri:dev

# 仅运行前端
npm run dev

# 构建前端
npm run build

# 构建完整应用
npm run tauri:build
```

## 📝 配置文件

### 配置文件位置

- **macOS**: `~/.openclaw/config.yaml`
- **Windows**: `%USERPROFILE%\.openclaw\config.yaml`
- **Linux**: `~/.openclaw/config.yaml`

### 配置示例

```yaml
# 服务配置
server:
  port: 8080
  host: "0.0.0.0"

# AI 配置
ai:
  default_provider: "anthropic"
  providers:
    - name: "anthropic"
      api_key: "YOUR_API_KEY"
      model: "claude-3-opus"

# 消息渠道
channels:
  telegram:
    enabled: true
    bot_token: "YOUR_BOT_TOKEN"
  
  feishu:
    enabled: false
    app_id: ""
    app_secret: ""

# 日志配置
logging:
  level: "info"
  file: "~/.openclaw/logs/otoclaw.log"
```

---

<div style="text-align: center; margin-top: 48px;">
  <a href="/api/" style="display: inline-block; padding: 12px 24px; background: var(--vp-c-brand-1); color: white; border-radius: 8px; text-decoration: none; font-weight: 600;">
    查看 API 参考 →
  </a>
</div>
