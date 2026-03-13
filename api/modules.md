# 模块 API

本章节介绍 OTOClaw 的模块系统和扩展开发。

## 模块系统概述

OTOClaw 采用模块化架构，支持通过模块扩展功能。

### 模块类型

| 类型 | 说明 |
|------|------|
| 内置模块 | 核心功能模块 |
| 官方模块 | 官方提供的扩展模块 |
| 第三方模块 | 社区开发的模块 |
| 自定义模块 | 用户自行开发的模块 |

## Tauri Commands 结构

### 命令文件结构

```
src-tauri/src/commands/
├── mod.rs           # 模块导出
├── service.rs       # 服务管理命令
├── config.rs        # 配置管理命令
├── process.rs       # 进程管理命令
└── diagnostics.rs   # 诊断命令
```

### 定义命令

```rust
// src-tauri/src/commands/service.rs

use tauri::command;
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct ServiceStatus {
    pub running: bool,
    pub pid: Option<u32>,
    pub port: u16,
    pub memory: Option<u64>,
}

#[command]
pub async fn get_service_status() -> Result<ServiceStatus, String> {
    // 实现逻辑
    Ok(ServiceStatus {
        running: false,
        pid: None,
        port: 8080,
        memory: None,
    })
}

#[command]
pub async fn start_service() -> Result<(), String> {
    // 实现逻辑
    Ok(())
}

#[command]
pub async fn stop_service() -> Result<(), String> {
    // 实现逻辑
    Ok(())
}
```

### 注册命令

```rust
// src-tauri/src/main.rs

mod commands;

use commands::{get_service_status, start_service, stop_service};

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            get_service_status,
            start_service,
            stop_service,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

## 前端组件结构

### 组件目录结构

```
src/components/
├── Layout/           # 布局组件
│   ├── Sidebar.vue
│   ├── Header.vue
│   └── Footer.vue
├── Dashboard/        # 仪表盘
│   ├── StatusCard.vue
│   ├── LogViewer.vue
│   └── QuickActions.vue
├── AIConfig/         # AI 配置
│   ├── ProviderList.vue
│   ├── ProviderForm.vue
│   └── ModelSelector.vue
├── Channels/         # 渠道配置
│   ├── TelegramConfig.vue
│   ├── FeishuConfig.vue
│   └── DiscordConfig.vue
├── Testing/          # 测试诊断
│   ├── SystemCheck.vue
│   ├── AITest.vue
│   └── ChannelTest.vue
└── Settings/         # 设置
    ├── GeneralSettings.vue
    └── AdvancedSettings.vue
```

### Vue 组件示例

```vue
<!-- src/components/Dashboard/StatusCard.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { invoke } from '@tauri-apps/api/core'
import { listen } from '@tauri-apps/api/event'

interface ServiceStatus {
  running: boolean
  pid?: number
  port: number
  memory?: number
}

const status = ref<ServiceStatus | null>(null)
const loading = ref(true)

async function fetchStatus() {
  try {
    status.value = await invoke<ServiceStatus>('get_service_status')
  } catch (error) {
    console.error('Failed to fetch status:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchStatus()
  
  // 监听状态变化
  listen<ServiceStatus>('service-status-changed', (event) => {
    status.value = event.payload
  })
})
</script>

<template>
  <div class="status-card">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div class="status-indicator" :class="{ active: status?.running }">
        {{ status?.running ? 'Running' : 'Stopped' }}
      </div>
      <div v-if="status?.running">
        <p>PID: {{ status.pid }}</p>
        <p>Port: {{ status.port }}</p>
        <p>Memory: {{ status.memory }} MB</p>
      </div>
    </div>
  </div>
</template>
```

## Composables

### useService

服务管理组合式函数：

```typescript
// src/composables/useService.ts
import { ref, onMounted, onUnmounted } from 'vue'
import { invoke } from '@tauri-apps/api/core'
import { listen, UnlistenFn } from '@tauri-apps/api/event'

export function useService() {
  const status = ref<ServiceStatus | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  
  let unlisten: UnlistenFn | null = null

  async function start() {
    loading.value = true
    try {
      await invoke('start_service')
    } catch (e) {
      error.value = String(e)
    } finally {
      loading.value = false
    }
  }

  async function stop() {
    loading.value = true
    try {
      await invoke('stop_service')
    } catch (e) {
      error.value = String(e)
    } finally {
      loading.value = false
    }
  }

  async function fetchStatus() {
    try {
      status.value = await invoke<ServiceStatus>('get_service_status')
    } catch (e) {
      error.value = String(e)
    }
  }

  onMounted(async () => {
    await fetchStatus()
    unlisten = await listen<ServiceStatus>('service-status-changed', (e) => {
      status.value = e.payload
    })
  })

  onUnmounted(() => {
    unlisten?.()
  })

  return {
    status,
    loading,
    error,
    start,
    stop,
    fetchStatus,
  }
}
```

## 状态管理

### Pinia Store

```typescript
// src/stores/appStore.ts
import { defineStore } from 'pinia'
import { invoke } from '@tauri-apps/api/core'

export const useAppStore = defineStore('app', {
  state: () => ({
    config: null as AppConfig | null,
    status: null as ServiceStatus | null,
    theme: 'dark' as 'light' | 'dark',
  }),

  getters: {
    isRunning: (state) => state.status?.running ?? false,
  },

  actions: {
    async loadConfig() {
      this.config = await invoke<AppConfig>('get_config')
    },

    async saveConfig(config: AppConfig) {
      await invoke('save_config', { config })
      this.config = config
    },

    async startService() {
      await invoke('start_service')
    },

    async stopService() {
      await invoke('stop_service')
    },
  },
})
```

## 事件系统

### 后端发送事件

```rust
use tauri::Manager;

#[command]
pub async fn start_service(app: tauri::AppHandle) -> Result<(), String> {
    // 启动服务...
    
    // 发送事件通知前端
    app.emit_all("service-status-changed", ServiceStatus {
        running: true,
        pid: Some(12345),
        port: 8080,
        memory: Some(50),
    }).map_err(|e| e.to_string())?;
    
    Ok(())
}
```

### 前端监听事件

```typescript
import { listen } from '@tauri-apps/api/event'

// 监听服务状态变化
const unlisten = await listen<ServiceStatus>('service-status-changed', (event) => {
  console.log('Status changed:', event.payload)
})

// 取消监听
unlisten()
```

## 扩展开发

### 创建新命令

1. 在 `src-tauri/src/commands/` 创建新文件
2. 定义命令函数
3. 在 `mod.rs` 中导出
4. 在 `main.rs` 中注册

### 创建新组件

1. 在 `src/components/` 创建 Vue 组件
2. 使用 Composables 封装逻辑
3. 通过 Tauri invoke 调用后端

---

[返回 API 概览](/api/)
