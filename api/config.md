# 配置 API

本章节详细介绍 OpenClaw 的配置系统。

## 配置文件

### 配置文件位置

| 平台 | 路径 |
|------|------|
| macOS | `~/.openclaw/openclaw.json` |
| Windows | `%USERPROFILE%\.openclaw\openclaw.json` |
| Linux | `~/.openclaw/openclaw.json` |

### 配置文件格式

配置文件使用 JSON5 格式，支持注释和尾随逗号：

```json5
{
  // 服务配置
  "server": {
    "port": 8080,
    "host": "0.0.0.0",
  },

  // AI 配置
  "ai": {
    "default_provider": "anthropic",
    "providers": [
      {
        "name": "anthropic",
        "api_key": "${ANTHROPIC_API_KEY}",
        "model": "claude-3-opus",
      }
    ],
  },

  // 消息渠道
  "channels": {
    "telegram": {
      "enabled": true,
      "bot_token": "${TELEGRAM_BOT_TOKEN}",
    }
  },

  // 日志配置
  "logging": {
    "level": "info",
    "file": "~/.openclaw/logs/otoclaw.log",
  },
}
```

## 服务配置

### server

```json5
{
  "server": {
    "port": 8080,              // 服务端口
    "host": "0.0.0.0",         // 监听地址
    "workers": 4,              // 工作进程数
    "timeout": 30,             // 请求超时（秒）
  }
}
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| port | int | 8080 | 服务监听端口 |
| host | string | `0.0.0.0` | 监听地址 |
| workers | int | 4 | 工作进程数 |
| timeout | int | 30 | 请求超时时间 |

## AI 配置

### ai

```json5
{
  "ai": {
    "default_provider": "anthropic",
    "providers": [
      {
        "name": "anthropic",
        "api_key": "${ANTHROPIC_API_KEY}",
        "api_endpoint": "https://api.anthropic.com",
        "model": "claude-3-opus",
        "max_tokens": 4096,
        "temperature": 0.7,
      },
      {
        "name": "openai",
        "api_key": "${OPENAI_API_KEY}",
        "model": "gpt-4-turbo",
      }
    ],
  }
}
```

### AI 提供商配置

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| name | string | ✅ | 提供商名称 |
| api_key | string | ✅ | API 密钥 |
| api_endpoint | string | ❌ | 自定义 API 端点 |
| model | string | ✅ | 模型名称 |
| max_tokens | int | ❌ | 最大 token 数 |
| temperature | float | ❌ | 温度参数 |

### 支持的 AI 提供商

| 提供商 | name | 默认端点 |
|--------|------|----------|
| Anthropic | `anthropic` | `https://api.anthropic.com` |
| OpenAI | `openai` | `https://api.openai.com` |
| DeepSeek | `deepseek` | `https://api.deepseek.com` |
| Moonshot | `moonshot` | `https://api.moonshot.cn` |
| Gemini | `gemini` | `https://generativelanguage.googleapis.com` |
| Azure OpenAI | `azure` | 自定义 |
| Ollama | `ollama` | `http://localhost:11434` |

## 消息渠道配置

### Telegram

```json5
{
  "channels": {
    "telegram": {
      "enabled": true,
      "bot_token": "${TELEGRAM_BOT_TOKEN}",
      "allowed_updates": ["message", "edited_message"],
      "webhook_url": "",           // 留空使用轮询
    }
  }
}
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| enabled | bool | ✅ | 是否启用 |
| bot_token | string | ✅ | Bot Token |
| allowed_updates | array | ❌ | 接收的更新类型 |
| webhook_url | string | ❌ | Webhook URL |

### 飞书

```json5
{
  "channels": {
    "feishu": {
      "enabled": true,
      "app_id": "${FEISHU_APP_ID}",
      "app_secret": "${FEISHU_APP_SECRET}",
      "encrypt_key": "${FEISHU_ENCRYPT_KEY}",
      "verification_token": "${FEISHU_VERIFICATION_TOKEN}",
      "region": "cn",              // cn / us / sg
    }
  }
}
```

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| enabled | bool | ✅ | 是否启用 |
| app_id | string | ✅ | 应用 ID |
| app_secret | string | ✅ | 应用密钥 |
| encrypt_key | string | ❌ | 加密密钥 |
| region | string | ❌ | 部署区域 |

### Discord

```json5
{
  "channels": {
    "discord": {
      "enabled": true,
      "bot_token": "${DISCORD_BOT_TOKEN}",
      "application_id": "${DISCORD_APP_ID}",
      "public_key": "${DISCORD_PUBLIC_KEY}",
    }
  }
}
```

### Slack

```json5
{
  "channels": {
    "slack": {
      "enabled": true,
      "bot_token": "${SLACK_BOT_TOKEN}",
      "app_token": "${SLACK_APP_TOKEN}",
      "signing_secret": "${SLACK_SIGNING_SECRET}",
    }
  }
}
```

## 日志配置

### logging

```json5
{
  "logging": {
    "level": "info",              // debug / info / warn / error
    "format": "text",             // text / json
    "output": ["console", "file"],
    "file": {
      "path": "~/.openclaw/logs/otoclaw.log",
      "max_size": "10MB",
      "max_files": 5,
      "compress": true,
    },
  }
}
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| level | string | `info` | 日志级别 |
| format | string | `text` | 日志格式 |
| output | array | `["console"]` | 输出目标 |
| file.path | string | - | 日志文件路径 |
| file.max_size | string | `10MB` | 单文件最大大小 |
| file.max_files | int | `5` | 最大文件数量 |
| file.compress | bool | `true` | 是否压缩 |

## 环境变量

配置支持环境变量替换：

```json5
{
  "ai": {
    "providers": [
      {
        "name": "anthropic",
        "api_key": "${ANTHROPIC_API_KEY}",
      }
    ],
  }
}
```

### 环境变量文件

环境变量可配置在 `~/.openclaw/env` 文件中：

```bash
# ~/.openclaw/env
ANTHROPIC_API_KEY=sk-ant-xxx
OPENAI_API_KEY=sk-xxx
TELEGRAM_BOT_TOKEN=xxx
```

## 配置验证

### 验证配置

```bash
# 验证配置文件
otoclaw config validate

# 查看当前配置
otoclaw config show
```

### 配置优先级

1. 命令行参数
2. 环境变量
3. 配置文件
4. 默认值

---

[返回 API 概览](/api/)
