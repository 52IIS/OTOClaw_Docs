# API 参考

本章节提供 OTOClaw 的 Tauri Commands API 参考。

## API 概览

OTOClaw 通过 Tauri Commands 暴露 Rust 后端功能给前端调用。

### 命令列表

| 命令 | 说明 |
|------|------|
| `get_service_status` | 获取服务状态 |
| `start_service` | 启动服务 |
| `stop_service` | 停止服务 |
| `restart_service` | 重启服务 |
| `get_config` | 获取配置 |
| `save_config` | 保存配置 |
| `run_diagnostics` | 运行诊断 |
| `test_ai_connection` | 测试 AI 连接 |
| `test_channel` | 测试消息渠道 |

## 服务管理 API

### get_service_status

获取当前服务状态。

**调用方式：**

```typescript
import { invoke } from '@tauri-apps/api/core'

const status = await invoke<ServiceStatus>('get_service_status')
```

**返回类型：**

```typescript
interface ServiceStatus {
  running: boolean
  pid?: number
  port: number
  memory?: number
  uptime?: number
  lastStarted?: string
}
```

### start_service

启动 OpenClaw 服务。

**调用方式：**

```typescript
await invoke('start_service')
```

**参数：** 无

**返回：** `void`

**错误：**
- `ServiceAlreadyRunning` - 服务已在运行
- `PortInUse` - 端口被占用
- `ConfigNotFound` - 配置文件不存在

### stop_service

停止正在运行的服务。

**调用方式：**

```typescript
await invoke('stop_service')
```

**参数：** 无

**返回：** `void`

**错误：**
- `ServiceNotRunning` - 服务未运行

### restart_service

重启服务。

**调用方式：**

```typescript
await invoke('restart_service')
```

**参数：** 无

**返回：** `void`

## 配置管理 API

### get_config

获取当前配置。

**调用方式：**

```typescript
const config = await invoke<AppConfig>('get_config')
```

**返回类型：**

```typescript
interface AppConfig {
  server: ServerConfig
  ai: AIConfig
  channels: ChannelsConfig
  logging: LoggingConfig
}

interface ServerConfig {
  port: number
  host: string
}

interface AIConfig {
  defaultProvider: string
  providers: AIProvider[]
}

interface AIProvider {
  name: string
  apiKey: string
  apiEndpoint?: string
  model: string
}

interface ChannelsConfig {
  telegram?: TelegramConfig
  feishu?: FeishuConfig
  discord?: DiscordConfig
  // ...
}
```

### save_config

保存配置到文件。

**调用方式：**

```typescript
await invoke('save_config', { config: newConfig })
```

**参数：**

```typescript
{
  config: AppConfig
}
```

**返回：** `void`

## 诊断 API

### run_diagnostics

运行系统诊断。

**调用方式：**

```typescript
const results = await invoke<DiagnosticResult[]>('run_diagnostics')
```

**返回类型：**

```typescript
interface DiagnosticResult {
  name: string
  status: 'pass' | 'warn' | 'fail'
  message: string
  details?: string
}
```

**诊断项目：**
- 环境检查
- 端口检查
- 配置验证
- 权限检查
- 依赖检查

### test_ai_connection

测试 AI 提供商连接。

**调用方式：**

```typescript
const result = await invoke<TestResult>('test_ai_connection', {
  provider: 'anthropic'
})
```

**参数：**

```typescript
{
  provider: string  // AI 提供商名称
}
```

**返回类型：**

```typescript
interface TestResult {
  success: boolean
  message: string
  latency?: number  // 响应延迟（毫秒）
}
```

### test_channel

测试消息渠道连通性。

**调用方式：**

```typescript
const result = await invoke<TestResult>('test_channel', {
  channel: 'telegram'
})
```

**参数：**

```typescript
{
  channel: string  // 渠道名称
}
```

**返回类型：**

```typescript
interface TestResult {
  success: boolean
  message: string
}
```

## 进程管理 API

### get_process_info

获取进程信息。

**调用方式：**

```typescript
const info = await invoke<ProcessInfo>('get_process_info')
```

**返回类型：**

```typescript
interface ProcessInfo {
  pid: number
  memory: number
  cpu: number
  startTime: string
}
```

### kill_process

强制终止进程。

**调用方式：**

```typescript
await invoke('kill_process', { pid: 12345 })
```

**参数：**

```typescript
{
  pid: number
}
```

## 日志 API

### get_logs

获取日志内容。

**调用方式：**

```typescript
const logs = await invoke<string[]>('get_logs', {
  lines: 100,
  level: 'info'
})
```

**参数：**

```typescript
{
  lines?: number   // 获取行数，默认 100
  level?: string   // 日志级别：debug/info/warn/error
}
```

**返回：** `string[]` - 日志行数组

### clear_logs

清空日志文件。

**调用方式：**

```typescript
await invoke('clear_logs')
```

## 事件系统

### 监听服务状态变化

```typescript
import { listen } from '@tauri-apps/api/event'

const unlisten = await listen<ServiceStatus>('service-status-changed', (event) => {
  console.log('Service status:', event.payload)
})

// 取消监听
unlisten()
```

### 监听日志更新

```typescript
const unlisten = await listen<string>('log-update', (event) => {
  console.log('New log:', event.payload)
})
```

## 错误处理

### 错误类型

```typescript
enum OTOClawError {
  ServiceAlreadyRunning = 'ServiceAlreadyRunning',
  ServiceNotRunning = 'ServiceNotRunning',
  PortInUse = 'PortInUse',
  ConfigNotFound = 'ConfigNotFound',
  ConfigInvalid = 'ConfigInvalid',
  ConnectionFailed = 'ConnectionFailed',
  PermissionDenied = 'PermissionDenied',
}
```

### 错误处理示例

```typescript
try {
  await invoke('start_service')
} catch (error) {
  if (error === 'ServiceAlreadyRunning') {
    console.log('服务已在运行')
  } else if (error === 'PortInUse') {
    console.log('端口被占用')
  } else {
    console.error('启动失败:', error)
  }
}
```

## TypeScript 类型定义

完整的类型定义可在 `src/lib/types.ts` 中找到：

```typescript
// src/lib/types.ts

export interface ServiceStatus {
  running: boolean
  pid?: number
  port: number
  memory?: number
  uptime?: number
}

export interface AppConfig {
  server: ServerConfig
  ai: AIConfig
  channels: ChannelsConfig
  logging: LoggingConfig
}

export interface DiagnosticResult {
  name: string
  status: 'pass' | 'warn' | 'fail'
  message: string
}

export interface TestResult {
  success: boolean
  message: string
  latency?: number
}
```

---

<div style="text-align: center; margin-top: 48px;">
  <a href="/faq/" style="display: inline-block; padding: 12px 24px; background: var(--vp-c-brand-1); color: white; border-radius: 8px; text-decoration: none; font-weight: 600;">
    查看常见问题 →
  </a>
</div>
