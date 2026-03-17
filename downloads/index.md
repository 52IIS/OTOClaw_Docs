# 📥 下载 OTOClaw

选择适合您操作系统的安装包进行下载。

## 系统要求

| 平台 | 最低要求 |
|------|----------|
| macOS | macOS 10.15 (Catalina) 或更高版本 |
| Windows | Windows 10/11 (64位) |
| Linux | Ubuntu 18.04+ / Debian 10+ 或其他兼容发行版 |

## 下载安装包

### 🍎 macOS

<div class="download-table">

| 文件 | 架构 | 说明 |
|------|------|------|
| <a href="/download/OTOClaw_1.0.0_universal.dmg" download>OTOClaw_1.0.0_universal.dmg</a> | Universal | 支持 Intel 和 Apple Silicon (M1/M2/M3) |

</div>

安装步骤：
1. 下载 `.dmg` 文件
2. 双击打开，将 OTOClaw 拖入 Applications 文件夹
3. 首次运行如遇"已损坏"提示，请在终端执行：
   ```bash
   xattr -cr /Applications/OTOClaw.app
   ```

### 🪟 Windows

<div class="download-table">

| 文件 | 架构 | 说明 |
|------|------|------|
| <a href="/download/OTOClaw_1.0.0_x64-setup.exe" download>OTOClaw_1.0.0_x64-setup.exe</a> | x64 | 安装程序（推荐） |
| <a href="/download/OTOClaw_1.0.0_x64_en-US.msi" download>OTOClaw_1.0.0_x64_en-US.msi</a> | x64 | MSI 安装包 |

</div>

安装步骤：
1. 下载安装包
2. 双击运行安装程序
3. 如遇 SmartScreen 警告，点击"更多信息" → "仍要运行"
4. 确保已安装 [WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)

### 🐧 Linux

<div class="download-table">

| 文件 | 格式 | 说明 |
|------|------|------|
| <a href="/download/OTOClaw_1.0.0_amd64.deb" download>OTOClaw_1.0.0_amd64.deb</a> | .deb | Ubuntu/Debian 安装包 |
| <a href="/download/OTOClaw_1.0.0_amd64.AppImage" download>OTOClaw_1.0.0_amd64.AppImage</a> | .AppImage | 便携版，无需安装 |

</div>

安装步骤：

**DEB 包 (Ubuntu/Debian):**
```bash
sudo dpkg -i OTOClaw_1.0.0_amd64.deb
sudo apt-get install -f  # 安装依赖
```

**AppImage (通用):**
```bash
chmod +x OTOClaw_1.0.0_amd64.AppImage
./OTOClaw_1.0.0_amd64.AppImage
```

## 📦 其他下载方式

### GitHub Releases

您也可以从 [GitHub Releases](https://github.com/52IIS/OTOClaw/releases) 下载最新版本和历史版本。

### 从源码构建

如需从源码构建，请参考 [安装指南](/guide/installation#从源码构建)。

## 🔐 校验文件完整性

下载完成后，建议验证文件完整性：

```bash
# macOS/Linux
shasum -a 256 OTOClaw_*.dmg
shasum -a 256 OTOClaw_*.AppImage

# Windows (PowerShell)
Get-FileHash OTOClaw_*.exe -Algorithm SHA256
```

## ❓ 遇到问题？

- [安装常见问题](/guide/installation#常见问题)
- [FAQ 常见问题解答](/faq/)
- [GitHub Issues](https://github.com/52IIS/OTOClaw/issues) - 提交问题反馈

---

<div style="text-align: center; margin-top: 48px;">
  <p>当前版本：<strong>v1.0.0</strong></p>
  <a href="/guide/installation" style="display: inline-block; padding: 12px 24px; background: var(--vp-c-brand-1); color: white; border-radius: 8px; text-decoration: none; font-weight: 600;">
    查看详细安装指南 →
  </a>
</div>

<style>
.download-table a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}
.download-table a:hover {
  text-decoration: underline;
}
</style>
