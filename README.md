<p align="center"><b>简体中文</b> · <a href="README.en.md"><b>English</b></a></p>

<p align="center">
  <img src=".github/assets/icon.png" width="112" alt="TwinDesk icon">
</p>

<h1 align="center"><a href="https://twin-desk.vercel.app">TwinDesk</a></h1>

<p align="center">
  <b>你所有的电脑和手机，像一张办公桌一样协同工作。</b><br>
  屏幕、应用、文件、剪贴板、摄像头、通话、短信、通知、鼠标与键盘，在 Mac、Windows、Linux 与 Android 之间共享。<br>
  免费开源。无需账号、无需云端、无需共用网络。
</p>

**📦 这是中文版（`TwinDesk-chinese`）**：界面默认简体中文，可随时切回 English。

| 版本 | 中文界面 |
| --- | --- |
| **Windows 10 / 11** | ✅ 完整汉化：界面、托盘菜单、通知、HUD、各页面 |
| **macOS 13 或更高** | ✅ 完整汉化：主窗口、各页面、菜单栏、通知、手机/电脑画面窗口 |
| **Linux / Android** | ⛔️ 尚未接入词典层，仍是英文 |

本仓库基于上游 TwinDesk **2.5.0-beta.1**；中文界面覆盖 **Windows 10 / 11** 与 **macOS 13 Ventura 或更高**。Windows 中文安装包已在本仓库发布；macOS 要中文界面请用本仓库源码构建，见[中文界面](#chinese-ui)。

<p align="center">
  <a href="#download"><b>⬇️ 下载 2.5</b></a> ·
  <a href="https://twin-desk.vercel.app"><b>官网</b></a> ·
  <a href="#-new-in-23"><b>新功能</b></a> ·
  <a href="#-get-started"><b>快速开始</b></a> ·
  <a href="#how-it-works"><b>工作原理</b></a>
</p>

<p align="center">
  <img alt="Version" src="https://img.shields.io/github/v/release/InukaAsith/TwinDesk?label=version&color=4b8bff">
  <img alt="macOS 13+" src="https://img.shields.io/badge/macOS-13%2B-black">
  <img alt="Windows 10/11" src="https://img.shields.io/badge/Windows-10%20%7C%2011-0078d4">
  <img alt="Linux X11 and Wayland" src="https://img.shields.io/badge/Linux-X11%20%7C%20Wayland-f0a30a">
  <img alt="Android 10+" src="https://img.shields.io/badge/Android-10%2B-3ddc84">
  <img alt="License: GPL-3.0" src="https://img.shields.io/badge/license-GPL--3.0-blue">
  <a href="https://github.com/inukaasith/twindesk/releases"><img src="https://img.shields.io/github/downloads/inukaasith/twindesk/total" alt="Downloads"></a>
</p>

<p align="center">
  <img src=".github/assets/hero.jpg" alt="One Mac's extended screen in a window on another Mac, the Mac's desktop extended onto a tablet, and TwinDesk on a phone" width="100%">
</p>

你的设备各自擅长自己的本职，却不擅长彼此协作。TwinDesk 解决了这个问题。
把 **Mac 与 Windows PC** 并排放置，用一套鼠标和键盘同时使用它们。在 Mac 上打开
PC 的应用。把一台旧笔记本或你的 **Android 平板**变成第二块屏幕。从电脑上接听
**手机的通话和短信**，在视频通话中使用它的**摄像头**，并在一台设备上粘贴
你在另一台设备上复制的内容。

- **任意组合。** Mac ↔ Windows、Mac ↔ Mac、PC ↔ PC、Linux ↔ 任何设备，以及 Android ↔ 任何电脑。或者，借助 [TwinDesk Mesh](#-twindesk-mesh-every-device-at-once)，让所有设备同时互联。
- **任何地点。** 同一 Wi-Fi、一根 USB 线，或者完全不共用网络：Bluetooth 与它们之间直连的 Wi-Fi 链路。
- **无账号，无云端。** 设备之间只彼此通信，链路加密。
- **只启用你打开的。** 每项功能默认关闭，在你打开之前甚至不会被加载。

<table>
<tr>
<td width="33%" valign="top">

### 💻 [电脑](#-computer-to-computer)
一套鼠标和键盘 · 第二块屏幕 · 在窗口中打开另一台电脑的应用 · 文件 · 剪贴板 · **摄像头** · 声音 · 终端

</td>
<td width="33%" valign="top">

### 📱 [手机与平板](#-phone-and-tablet)
通话 · 短信 · 照片 · 文件 · **摄像头** · **遥控器与游戏手柄** · 屏幕与应用在窗口中 · 平板作为第二块屏幕

</td>
<td width="33%" valign="top">

### 📡 [连接](#-connections)
同一 Wi-Fi · USB 线 · **Bluetooth** · 按需建立的 **Wi-Fi Direct** 与**热点**链路 · 为你选择，为你切换

</td>
</tr>
<tr>
<td width="33%" valign="top">

### 🚀 [快速开始](#-get-started)
下载 · 在两端打开 · 用配对码配对一次 · 打开你想要的功能 · [隐私](#privacy)：无账号、无遥测

</td>
<td width="33%" valign="top">

### 🐧 [Linux](#linux) 与 🤖 [Android](#android-in-detail) 详解
X11 与 Wayland · 通过 Samba 共享文件夹 · 逐页介绍手机应用 · [无线调试](#wireless-debugging)，只需设置一次

</td>
<td width="33%" valign="top">

### 🛠 [技术内幕](#how-it-works)
[工作原理](#how-it-works) · 在 macOS、Windows、Linux、NixOS 与 Android 上[构建并运行](#build-and-run) · [GitHub Actions](#github-actions)

</td>
</tr>
</table>

<a name="chinese-ui"></a>

## 🇨🇳 中文界面

<p align="center"><b>简体中文</b> · <a href="README.en.md">English</a></p>

这个仓库是 TwinDesk 的**中文汉化分支**：界面文案抽进了词典层（`shared/i18n.js`），默认中文，可随时切回英文。

- **切换**：设置 › 通用 › 语言（`中文` / `English`）。换完整个窗口立刻跟着换，Windows 的托盘菜单、macOS 的菜单栏与通知也一起换。
- **怎么实现的**：`UI.el` / `UI.row` / `UI.card` / `UI.note` 等渲染原语会自动过一层 `T()`，绝大多数文案只加词条、不改代码；名字和数字拼出来的句子用 `I.pattern`。详见[加词条](#加词条)。
- **当前进度**：**Windows 10/11 与 macOS 13+ 已接入词典层**，界面、托盘/菜单栏、通知与 HUD 全部中文（1100+ 条词条、300+ 条动态句式）。Linux 主窗口与 Android App 尚未接入，仍是英文。
- **安装包**：Windows 中文安装包由本仓库自己构建、在 [Releases](https://github.com/AChengLinus/TwinDesk-chinese/releases/latest) 发布（见[下载](#download)）；macOS 的中文版要用本仓库源码构建（`mac/` 下有 `build-app.sh`）；Linux 与 Android 的中文界面还没做，直接用上游英文包。

<a name="download"></a>

## ⬇️ 下载

<table>
<tr>
<td width="25%" align="center" valign="top">

**🍎 macOS**<br><sub>13 Ventura 或更高版本 · 上游英文包</sub>

<a href="https://github.com/InukaAsith/TwinDesk/releases/download/v2.4.0/TwinDesk-2.4.0-arm64.dmg"><img src="https://img.shields.io/badge/Apple_Silicon-.dmg-000000?style=for-the-badge" alt="macOS, Apple Silicon"></a><br>
<a href="https://github.com/InukaAsith/TwinDesk/releases/download/v2.4.0/TwinDesk-2.4.0-x64_Intel.dmg"><img src="https://img.shields.io/badge/Intel-.dmg-555555?style=for-the-badge" alt="macOS, Intel"></a>

</td>
<td width="25%" align="center" valign="top">

**🪟 Windows**<br><sub>10 与 11 · 中文界面</sub>

<a href="https://github.com/AChengLinus/TwinDesk-chinese/releases/latest/download/TwinDesk-Setup-2.5.0-beta.1-zh.exe"><img src="https://img.shields.io/badge/x64-中文_Installer-d73a4a?style=for-the-badge" alt="Windows, x64, 简体中文"></a><br>
<a href="https://github.com/InukaAsith/TwinDesk/releases/download/v2.5.0-beta.1/TwinDesk-Setup-2.5.0-beta.1-arm64.exe"><img src="https://img.shields.io/badge/ARM64-Installer-005a9e?style=for-the-badge" alt="Windows on ARM（上游英文包）"></a><br><sub>中文 ARM64 包正在构建</sub>

</td>
<td width="25%" align="center" valign="top">

**🐧 Linux**<br><sub>X11 与 Wayland，x86_64 · 上游英文包</sub>

<a href="https://github.com/InukaAsith/TwinDesk/releases/download/v2.4.0/TwinDesk-2.4.0-amd64.deb"><img src="https://img.shields.io/badge/Debian_·_Ubuntu-.deb-d70a53?style=for-the-badge" alt="Linux, .deb"></a><br>
<a href="https://github.com/InukaAsith/TwinDesk/releases/download/v2.4.0/TwinDesk-2.4.0-x86_64.AppImage"><img src="https://img.shields.io/badge/Any_distro-AppImage-f0a30a?style=for-the-badge" alt="Linux, AppImage"></a><br>
<a href="https://github.com/InukaAsith/TwinDesk/releases/download/v2.4.0/twindesk-bin-2.4.0-1-x86_64.pkg.tar.zst"><img src="https://img.shields.io/badge/Arch-pkg.tar.zst-1793d1?style=for-the-badge" alt="Linux, Arch package"></a><br>
<sub>NixOS：<code>nix run github:InukaAsith/TwinDesk</code>（<a href="#nixos--nix-flakes">更多</a>）</sub>

</td>
<td width="25%" align="center" valign="top">

**🤖 Android**<br><sub>10 或更高版本，手机与平板 · 上游英文包</sub>

<a href="https://github.com/InukaAsith/TwinDesk/releases/download/v2.4.0/TwinDesk-2.4.0.apk"><img src="https://img.shields.io/badge/Phone_app-.apk-3ddc84?style=for-the-badge" alt="Android app"></a><br>
<a href="https://github.com/InukaAsith/TwinDesk/releases/download/v2.4.0/TwinDesk-2.4.0-full.apk"><img src="https://img.shields.io/badge/Full_app-.apk-1b8a4c?style=for-the-badge" alt="Android full app"></a><br>
<sub>完整版应用增加了通知、短信与 Accessibility；电脑可以通过无线调试为你安装它</sub>

</td>
</tr>
</table>

<p align="center"><sub>Windows x64 安装包由本仓库构建（基于上游 2.5.0-beta.1，界面中文，可在设置里切回 English）；ARM64 中文包还在做，先给上游英文包。<br>
SHA256（<code>TwinDesk-Setup-2.5.0-beta.1-zh.exe</code>）：<code>b570e89a048e3a7bc2fd8612afbefd7530b99f53d989d0fb5b4431d47147c163</code></sub></p>

<p align="center">🍺 macOS 上的 <b>Homebrew</b>：<code>brew install --cask inukaasith/twindesk/twindesk</code><br>
<sub>用 <code>brew upgrade --cask twindesk</code> 更新：如果 TwinDesk 之前正在运行，它会自行重新打开，这样一台只通过它操控的 Mac 就能拿回自己的鼠标。这个 <a href="https://github.com/InukaAsith/homebrew-twindesk">tap</a> 会跟随每一次发布。</sub></p>

<a name="first-launch"></a>

<details>
<summary><b>⚠️ 首次启动：这些应用没有代码签名</b> <sub>如何在 macOS、Windows 与 Android 上允许它们运行</sub></summary>

TwinDesk 免费，没有付费的 Apple Developer ID 或 Windows 代码签名证书，因此
macOS 和 Windows 不知道它是谁做的，打开前会询问一次。源代码全都在这里。

**🍎 macOS**

最简单的方式是 **Homebrew**，它安装后即可直接打开：
`brew install --cask inukaasith/twindesk/twindesk`

改用 .dmg 安装：

1. 把 TwinDesk 拖进 Applications 并打开。macOS 会提示无法验证 TwinDesk：点击 **Done**
   （而不是 Move to Bin）。
2. 打开 **System Settings › Privacy & Security**，向下滚动到 Security，点击
   “TwinDesk was blocked” 旁边的 **Open Anyway**。输入你的密码，然后再次点击 **Open Anyway**。

只需做一次；之后更新可以正常打开。如果 macOS 说 TwinDesk **已损坏且无法打开**，
它并没有损坏：在终端中运行下面的命令，然后重新打开它：

```sh
xattr -dr com.apple.quarantine /Applications/TwinDesk.app
```

**🪟 Windows**

1. 如果浏览器警告该文件不常被下载，选择 **Keep**（在 Edge 中：**⋯ ›
   Keep › Show more › Keep anyway**）。
2. 当安装程序显示 **Windows protected your PC**（SmartScreen）时，点击 **More info**，然后
   点击 **Run anyway**。

在开启了 **Smart App Control** 的 Windows 11 上，未签名的应用会被拦截，没有 Run anyway 按钮。
唯一的办法是关闭它（Windows Security › App & browser control › Smart App Control
settings），而在许多 Windows 11 版本上，不重装 Windows 就无法重新开启。

**🤖 Android**

1. 打开下载的 .apk。Android 会请求允许你的浏览器或 Files 应用 **install unknown
   apps**：点击 **Settings**，打开 **Allow from this source**，返回后点击 **Install**。
2. 如果 Play Protect 警告开发者无法识别，点击 **More details › Install anyway**。

**完整版应用**（通知、短信与 Accessibility）最简单的方式是由电脑通过
[无线调试](#wireless-debugging)安装（Phone 页面 › Notifications from the phone）：之后 Android
就会允许你打开这些功能。如果手动安装，Play Protect 可能会拦截它，而且 Android 13 及更高版本
会把通知访问和 Accessibility 置灰为 **restricted setting**：打开 **Settings › Apps ›
TwinDesk**，点击 **⋮ › Allow restricted settings**，然后打开它们。

</details>

<p align="center"><sub>所有文件与更早的版本都在<a href="https://github.com/InukaAsith/TwinDesk/releases">发布页面</a>上。</sub></p>

---

<a name="-new-in-23"></a>

# ✨ 2.3 的新功能

<p align="center">
  <img src=".github/assets/v23-whats-new.jpg" alt="TwinDesk 2.3: your phone is now a camera, a remote and a gamepad" width="100%">
</p>

你的手机现在既是**一台摄像头、一个遥控器，也是一个游戏手柄**。在任意视频通话里使用它的摄像头，窝在沙发上操控你的电脑，或者把它当作手柄来玩。在每块屏幕之间复制图片和截图，还能用一个按键把光标锁定到某台电脑上。

| | 新功能 | |
|---|---|---|
| 📷 | **摄像头。** 手机摄像头，或另一台电脑的摄像头，可显示在窗口中，或作为网络摄像头供 Zoom、Teams 和 Meet 使用 | [更多](#-phone-camera) |
| 🎮 | **遥控器与游戏手柄。** 为电脑提供触控板和键盘，还有一个被它当作真实手柄识别的控制器 | [更多](#-remote-and-gamepad) |
| 🖼 | **剪贴板中的图片。** 在 PC 上复制截图，再粘贴到 Mac 或手机上 | [更多](#-shared-clipboard) |
| 🔒 | **光标锁定。** Scroll Lock 让光标停留在它所在的电脑上 | [更多](#-one-mouse-and-keyboard) |
| 🎵 | **媒体控制。** 手机上正在播放的内容，可在电脑上播放、暂停和跳过 | [更多](#-media-controls-and-phone-sound) |
| 🪶 | **更轻量。** 每个功能在你开启之前都是关闭的，托盘中的内存占用约减半 | [更多](#-also-new-in-23) |

<a name="-also-new-in-23"></a>

## ➕ 2.3 的其他新功能

- **全新安装时每个功能都是关闭的**，在你开启之前不会加载其中任何部分。更新会保留你的设置。
- **关闭到托盘或菜单栏时，窗口也随之消失：** 一台 Windows PC 的占用从约 240 MB 降到约 125 MB。
- **<kbd>Ctrl+Alt+V</kbd> / <kbd>⌃⌥V</kbd> 把文件直接粘贴到前台的应用中**，聊天窗口或电子邮件，而不只是粘贴到文件夹里。
- **在 Windows 和 Linux 上可以选择接收文件的保存位置**（通用 › 接收的文件），与 Mac 上一样。
- **手机窗口：** 在 WhatsApp、Instagram 和 Telegram 中按 Enter 发送；在 Windows 上控件位于侧边面板中，还有旋转和截图按钮。
- **在电脑上显示手机自身的屏幕**，从手机的屏幕页面启动。
- **触控板模式**，在手机上操作电脑屏幕：滑动移动光标，轻点执行点击。
- **手机电池：** 锁屏的手机不再自己亮起，设备发现也不再让它保持唤醒。
- **无线调试可以自行关闭**，当电脑不在时（通用 › 在手机上允许）。
- **手机上的光标**也会显示在通知栏和设置界面上。
- **与手机之间的 Bluetooth 和 Wi-Fi Direct 更稳定**，并优先使用 Android Studio 或 scrcpy 自带的 adb，而不是随附的那个，这样它们就不会互相把对方挤掉。
- **独立的 Intel Mac 下载**，以及可以用 Developer ID 签名和公证的构建。

感谢所有为本版本提交拉取请求的人：见[致谢](#thanks)。

<sub>更早的版本：2.2 带来了 [TwinDesk Mesh](#-twindesk-mesh-every-device-at-once)，2.1 带来了
[Bluetooth 和 Wi-Fi Direct](#-connections) 以及手机的[通话、短信、照片和文件](#-calls-and-messages)。
每个版本的说明都在[发布页面](https://github.com/InukaAsith/TwinDesk/releases)上。</sub>

---

<a name="-computer-to-computer"></a>

# 💻 电脑到电脑

<p align="center">
  <img src=".github/assets/mac-windows.jpg" alt="A Mac connected to a Windows PC, and the PC's apps listed on the Mac" width="100%">
</p>

每个平台都是同一个应用，因此 Mac 和 PC 配对起来就像两台 Mac 一样。

<a name="-one-mouse-and-keyboard"></a>

## 🖱 一套鼠标和键盘

把光标推出屏幕边缘，就能**在另一台电脑上继续工作**，仿佛它们是一台。键盘会跟随光标。触控板手势（Spaces 滑动、双指捏合缩放、显示桌面）同样适用，双击热键即可让一切回到本机。可以设置另一台电脑在哪一侧、边缘阻力和光标速度。

**光标锁定**（2.3 新增）让光标停留在它所在的电脑上，哪怕那台电脑并没有插着鼠标：按 **Scroll Lock**（Mac 上是 F14），或使用光标页签、托盘 / 菜单栏。

## 🖥 扩展显示与远程屏幕

用**真正的虚拟显示器**把你的 Mac 扩展一台 PC 或另一台 Mac 上，或者镜像它。也可以把另一台电脑的屏幕放进一个窗口，并从那里控制它。低延迟 H.264，提供*最快*和*流畅*两种播放模式，还可选帧生成。

<p align="center">
  <img src=".github/assets/mac-screen-window.jpg" alt="The MacBook Pro's extended screen in a window on the Studio Mac, with the Receive screen settings" width="100%">
</p>

## 🪟 另一台电脑的应用，各有自己的窗口

在你的 **Mac 上打开一个 Windows 应用**（或在 PC 上打开 Mac 应用），它就会拥有**自己的窗口**，并带有自己的 Dock 图标或开始菜单固定项。不需要完整的远程桌面，只有你需要的那个应用，就在你自己的应用旁边。

<p align="center">
  <img src=".github/assets/mac-apps.jpg" alt="Chess, Clock and Calculator from one Mac running in their own windows on the other Mac" width="100%">
</p>

## 📷 摄像头共享

把另一台电脑的摄像头显示在窗口里，或把它作为**任何应用都能选择到的网络摄像头**：Zoom、Teams、Meet 或浏览器中的 **TwinDesk Camera**。只有当你在那台电脑上开启*允许……查看此摄像头*时，它才会共享摄像头，并且那里会弹窗显示谁正在观看。用[手机的摄像头](#-phone-camera)也一样。

虚拟摄像头会在你第一次开启它时安装：Windows 11 上是一个摄像头（需要一次管理员授权），Linux 上是 v4l2loopback（需要一次密码授权），而在 Mac 上它会被装进 **OBS Virtual Camera**（在获得相应签名的构建中，也可以使用 TwinDesk 自己的摄像头扩展）。

## 📁 文件、共享文件夹和终端

**把文件拖过屏幕边缘**，放到任何地方；或者用 <kbd>⌃⌥C</kbd> 复制、<kbd>⌃⌥V</kbd> 粘贴（Windows 和 Linux 上是 <kbd>Ctrl+Alt+C/V</kbd>），粘贴到文件夹里，或直接粘贴到前台应用中。可以从 macOS 的共享菜单或资源管理器的*发送到*发送，或者**共享一个文件夹**，它会以网络驱动器的形式出现在另一端。传输中的文件会显示**实时进度**。需要一个 shell？`ssh twindesk` 会在另一台电脑上打开一个，无需密码。

<p align="center">
  <img src=".github/assets/computers-files.jpg" alt="The Files page and the Terminal page" width="100%">
</p>

<a name="-shared-clipboard"></a>

## 📋 共享剪贴板

在一台电脑上复制，在另一台电脑上粘贴，可以立即粘贴，也可以在你切换过去时粘贴。**图片**也能传递（2.3 新增），最大 10 MB：在 PC 上用 <kbd>Win+Shift+S</kbd> 截图，再粘贴到 Mac 上。来自密码管理器的条目会被跳过，最近列表会保留你最近复制的几项内容，图片带有预览。

<p align="center">
  <img src=".github/assets/computers-clipboard.jpg" alt="The same copied text in the clipboard history on both Macs" width="100%">
</p>

## 🔔 通知、声音和网络唤醒

在一台电脑上以原生通知的形式查看另一台电脑的通知，并在另一台电脑上听到一台电脑的声音。用网络唤醒唤醒休眠的电脑，你拨动的每个开关都会被两端共享，并为此配对记住。

## 🔀 不止两台设备

你可以随意配对任意多台电脑和手机。**切换**会把会话转移到附近的另一台已配对设备，**接管**会认领一台正被其他设备占用的设备，**断开连接**则放开它。这些操作都可以在概览、菜单栏或托盘中完成。

<a name="-twindesk-mesh-every-device-at-once"></a>

## 🕸 TwinDesk Mesh：所有设备同时在线

<p align="center">
  <img src=".github/assets/v22-mesh-desk.jpg" alt="The pointer travelling from a Windows PC across a MacBook and a Linux laptop onto a phone, with the desk map below" width="100%">
</p>

你的笔记本、台式机、角落里的 Linux 主机和你的手机，**同时全部连接**，彼此直接通信，中间不需要任何集线器。

- **一套鼠标，每块屏幕。** 在桌面地图上把设备排好一次，光标就能从 PC 走到 Mac，再走到 Linux 笔记本，最后走到手机。
- **一个剪贴板。** 在任意一台设备上复制，在任意另一台上粘贴。最新的一次复制优先。
- **一个通知池。** 你的手机振动，每台电脑都会显示出来。
- **配对一次，加入全部。** 与一台电脑配对的新设备会自动结识其余设备。

Mesh 在 Windows、Mac 和 Linux 上处于 **beta** 阶段：在**多设备**页签中开启它，随时可以再关掉，一切都会保持你离开时的样子。只连接两台设备？你并不需要它。Mesh 之后还会加入：摄像头、剪贴板中的图片，以及一次把文件拖到多台设备；手机一次只连接一台电脑，Linux 只能通过同一 Wi-Fi 加入。

---

<a name="-phone-and-tablet"></a>

# 📱 手机与平板

大多数手机连接只停留在通知和文件传输上。在 TwinDesk 中，你的 Android 手机或平板是一个
**完整的对等设备**：它像电脑一样配对，获得同样的功能，外加它自己的通话、短信、照片、
文件和摄像头。

<a name="-calls-and-messages"></a>

## 📞 通话与短信

在电脑上接听、拒接和拨打手机的通话。来电时，一个小窗口会显示来电者，并提供**接听**和**拒接**。借助 Bluetooth，电脑会成为**手机的头戴设备**，让你直接在那里说话和收听。**通话**页面有数字键盘、联系人和通话记录。

在**短信**中阅读并回复你的文字消息：每一个会话，图片也包含在内，还有侧边栏中的
计数。

<p align="center">
  <img src=".github/assets/v21-calls-messages.jpg" alt="The Calls page with an incoming call and the call history, and the Messages page with a conversation" width="100%">
</p>

## 🖼 照片与手机文件

在**照片**中浏览手机的**照片和视频**，以全尺寸打开其中任意一张，并把一张或多张保存
到电脑。**手机文件**可浏览手机的整个存储：保存、上传、重命名、删除，或
直接把文件拖放到页面上。**共享文件夹双向生效：** 手机共享的文件夹会在
Finder、Explorer 或 Linux 文件管理器中打开，而电脑共享的文件夹会出现在手机的
文件应用中。

<p align="center">
  <img src=".github/assets/v21-photos-files.jpg" alt="The Photos page with the phone's gallery, and Phone Files with shared folders and the phone's storage" width="100%">
</p>

<a name="-phone-camera"></a>

## 📷 手机摄像头

手机**后置或前置摄像头**的画面，可显示在电脑上的窗口中，或作为**TwinDesk Camera**
网络摄像头用于任何视频通话。在摄像头页签中切换摄像头并旋转画面，或从手机自己的
摄像头页面启动它。

<a name="-remote-and-gamepad"></a>

## 🎮 遥控器与游戏手柄

<p align="center">
  <img src=".github/assets/v23-remote.jpg" alt="The phone's Remote: a touchpad with a row of keys, and the gamepad laid out like an Xbox controller" width="100%">
</p>

手机的**遥控器**页面会把它变成电脑的遥控器，适合躺在沙发上或在演示时使用：

- **触控板与键盘。** 滑动以移动，轻点以单击，双指滚动，还包括
  手机键盘缺少的按键（Esc、Tab、Ctrl、Alt、方向键、媒体和音量）。可旋转为横屏。
- **游戏手柄，** 布局像 Xbox 手柄。它的按钮会按下你选定的按键，或者开启
  **真实游戏手柄**，让电脑看到一只真正的控制器：Windows 上是 Xbox 360 手柄，
  Linux 上则是游戏手柄。
- **适用于任何电脑的 Bluetooth 游戏手柄**，包括 Mac，那台电脑上既不需要 TwinDesk，也不需要驱动：
  只需在电脑的 Bluetooth 设置中与手机配对一次。

在电脑上开启**遥控器**，让手机来操控它。

<a name="-media-controls-and-phone-sound"></a>

## 🎵 媒体控制与手机声音

手机上正在播放的内容会显示在概览中它的卡片里，包含封面、**上一首、
播放/暂停、下一首**，以及一个用于定位播放进度的进度条。在 Windows 和 Linux 上，**在此播放手机声音**会让
电脑成为手机的 Bluetooth 音箱。

## 📲 电脑上的手机屏幕与应用

在窗口中查看手机屏幕，并用鼠标、触控板和键盘控制它。更棒的是，
可以**在各自独立的窗口中打开单个 Android 应用**，与你的桌面应用并排使用。
把它们固定到 Dock 或开始菜单，就能像任何其他应用一样使用。在 WhatsApp、Instagram 和
Telegram 中，Enter 用于发送。

<p align="center">
  <img src=".github/assets/phone-on-mac.jpg" alt="The tablet's home screen in a Mac window, and Calculator, Calendar and Clock open as separate Mac windows" width="100%">
</p>

## 🖥 平板作为第二屏幕

把平板或手机变成**额外的显示器**。用**扩展**获得更多桌面空间，或用**镜像**
显示你屏幕上的内容。用触摸当作鼠标，或开启触控板模式。

<p align="center">
  <img src=".github/assets/second-screen.jpg" alt="Share screen settings on the Mac, and the tablet showing the extended Mac desktop" width="100%">
</p>

## 📤 文件、剪贴板、通知、鼠标与键盘

- **文件。** 从任何 Android 应用的分享菜单中*发送到电脑*或*复制到电脑*；从
  电脑端，则用“共享”菜单、*发送到*、拖过屏幕边缘，或 <kbd>⌃⌥C</kbd> / <kbd>Ctrl+Alt+C</kbd>。
- **剪贴板。** 双向的文本和图片，包括手机的截图，还有一个用于发送的快捷设置磁贴。
- **通知。** 手机的通知在电脑上作为原生通知显示，反过来也一样。可隐藏文字内容，或单独对某个应用静音。
- **鼠标与键盘。** 把指针推过屏幕边缘，它就会**继续延伸到手机上**；
  在任何 Android 应用中使用真实键盘输入。

<p align="center">
  <img src=".github/assets/share-files.jpg" alt="The Mac's Files page, the Android share menu with Send to computer and Copy to computer, and a received-file notification on the tablet" width="100%">
</p>

## 📱 Android 应用

Android 应用会适配设备：手机上底部是页签，平板上则是完整的侧边栏。
每个页面都会显示你所连接的电脑，并展示各个方向共享的内容。

<p align="center">
  <img src=".github/assets/android-phone.jpg" alt="The Android app on a phone: Overview, Screen, Files, Clipboard and More" width="100%">
</p>

---

<a name="-connections"></a>

# 📡 连接方式

<p align="center">
  <img src=".github/assets/v21-connections.jpg" alt="Same Wi-Fi, Bluetooth LE, Wi-Fi Direct, phone hotspot and USB cable" width="100%">
</p>

你永远不必做选择。TwinDesk 在存在同一网络时使用它，在你插上手机时把手机切换到
**USB 数据线**，在 Wi-Fi 不可用时回退到 **Bluetooth**：比如在
火车上，或在一家访客 Wi-Fi 会屏蔽设备的咖啡馆里。连接方式及其延迟始终显示在
应用顶部（*38 ms · Bluetooth*）。

Bluetooth 适合维持会话，但对于屏幕或大文件来说太慢了。因此当你开始这类操作时，
TwinDesk 会在两台设备之间**建立一条直接的 Wi-Fi 链路**，持续所需的时间，然后
回到 Bluetooth。按**使用 Wi-Fi Direct 连接**可保持该链路，或让电脑加入
手机的**热点**。

| | 同一 Wi-Fi | USB 数据线 | Bluetooth | + Wi-Fi Direct 或热点 |
|---|:-:|:-:|:-:|:-:|
| 会话、剪贴板文本、通知 | ✅ | ✅ | ✅ | ✅ |
| 鼠标与键盘、遥控器 | ✅ | ✅ | ✅ | ✅ |
| 通话与短信 | ✅ | ✅ | ✅ | ✅ |
| 屏幕、应用、摄像头、文件、照片、剪贴板图片 | ✅ | ✅ | 切换到 Wi-Fi Direct | ✅ |
| 电脑之间的终端（`ssh twindesk`） | ✅ | — | 通过 Wi-Fi Direct | ✅ |

谁能通过 Bluetooth 出现由你决定：**与手机的蓝牙**（开启）和**与电脑的
蓝牙**（默认关闭，直到你需要时），在概览中和通用中均可设置。

---

<a name="-get-started"></a>

# 🚀 快速开始

<p align="center">
  <img src=".github/assets/tour.gif" alt="A tour of the TwinDesk window" width="820">
</p>

1. **下载**每台电脑和你的手机对应的 TwinDesk（[见上文](#download)，或从 [发布版本](https://github.com/InukaAsith/TwinDesk/releases/latest)）。
2. **在两端打开它。** 它们会在同一网络上、经由 Bluetooth，或对手机而言经由 USB 数据线互相发现。
3. **配对一次**，比对验证码即可（使用 USB 数据线时，只需点击允许）。此后它们会自动连接。
4. **开启你想要的功能。** 每个功能都有一个带开关的页签，在你开启之前会说明它的作用。

如果要在窗口中显示手机的屏幕、应用和摄像头，TwinDesk 会引导你开启一次 Android 的
无线调试（[详情](#wireless-debugging)）。文件、剪贴板、通话和照片无需它也能工作。
手机的通知、短信、媒体控制，以及通过无障碍实现的鼠标与键盘，都来自完整应用，
电脑会通过无线调试安装一次。

| 配对 | 你能获得 |
|---|---|
| Mac ↔ Windows 电脑、Mac ↔ Mac、电脑 ↔ 电脑 | 全部电脑功能 |
| Linux ↔ Mac、电脑或 Linux | 全部电脑功能（[少数差异](#linux)） |
| Android ↔ Mac、Windows 或 Linux | 全部手机与平板功能（Windows 和 Linux 上支持真实游戏手柄） |
| 以上全部同时使用 | [TwinDesk Mesh](#-twindesk-mesh-every-device-at-once)（beta） |

<a name="privacy"></a>

## 隐私

TwinDesk 只与你配对过的设备通信，直接经由你自己的网络、Bluetooth、
直连 Wi-Fi 链路或数据线。没有账号，没有遥测，也没有云端中继。你的通话、
短信、照片和摄像头会直接从手机传到你的电脑，不会去往别处。唯一的
互联网请求是针对 GitHub 公开发布版本的更新检查，你可以将其关闭。

<br>

---

下面的内容是为好奇的人和想自己构建 TwinDesk 的人准备的。

<a name="linux"></a>
<details>
<summary><h2>🐧 Linux</h2> <sub>X11 与 Wayland、共享文件夹、扩展、虚拟摄像头和游戏手柄</sub></summary>

在 Linux 上，TwinDesk 同时运行在 X11 和 Wayland 上。在 Wayland 上，鼠标和键盘通过 evdev 和 uinput 工作（设置界面会一次性授予访问权限），屏幕则通过桌面门户捕获。有几处细节略有不同：

- **共享文件夹。** 共享使用 Samba。第一次时，如果缺少它，一次密码提示就会把它装好，并添加一个仅用于网络的账户。另一台电脑的文件夹通过 GVFS 连接，并显示在文件管理器的侧边栏中。
- **复制和粘贴文件。** <kbd>Ctrl+Alt+C</kbd> 复制最前面文件管理器中选中的内容（或你已经复制的文件），<kbd>Ctrl+Alt+V</kbd> 粘贴到最前面的文件管理器窗口中（否则粘贴到 Downloads）。右键 › *发送到* 在 Nautilus、Nemo、Caja、Dolphin 和 Thunar 中可用。
- **跨边缘拖动文件。** 从另一台电脑拖入的文件会落入光标下的文件夹，或桌面。在 Wayland 上，它们会进入最前面的文件管理器窗口。从 Linux 向外拖动文件需要 Xorg 会话。
- **扩展。** 在 GNOME（Wayland）上，它使用 Mutter 自带的虚拟显示器；当桌面询问要共享哪块屏幕时，选择 "Virtual remote monitor"。在 X11 上，它会启用显卡驱动的一个空闲输出（NVIDIA 驱动上不可用）。这需要一个小型辅助程序，.deb 会安装它；使用 AppImage 时，共享屏幕 › *TwinDesk 虚拟显示器* › 安装，即可一次性装好，需要你的密码。
- **应用。** 在另一侧打开这台电脑的应用需要 Xorg 会话。
- **虚拟摄像头和游戏手柄。** TwinDesk Camera 是一个 v4l2loopback 设备，Real gamepad 是一个 uinput 控制器（"TwinDesk Gamepad"）；两者第一次开启时都会要求输入一次密码。
- **Bluetooth 与 Wi-Fi Direct。** Bluetooth LE 通过 BlueZ 工作，直连 Wi-Fi 通过 NetworkManager 工作，在适配器允许的位置与电脑自身的 Wi-Fi 并存（为手机使用 2.4 GHz 频段组）。
- **Android 手机。** [Android](#android-in-detail) 中的一切在 Linux 上同样可用：手机屏幕和窗口形式的应用、跨边缘的鼠标和键盘、文件、剪贴板、通知和声音。软件包自带 adb；设置界面的防火墙修复会放行 mDNS (5353/udp)，这样手机的无线调试才能被发现。

</details>

<a name="android-in-detail"></a>
<details>
<summary><h2>🤖 Android 详解</h2> <sub>逐页说明手机应用，以及无线调试</sub></summary>

在手机上安装 TwinDesk，把它与电脑上的 TwinDesk 并排打开，然后从概览 › 附近进行配对。手机需要 Android 10，而所有经由无线调试的功能需要 Android 11。

### 手机应用

应用的布局与电脑端相同（平板上是侧边栏，手机上是底部标签页），并且每个页面都会显示它所连接的电脑：

| 页面 | 功能 |
|---|---|
| **概览** | 你已连接的电脑、连接和断开连接、可配对的附近电脑，以及无线调试尚未设置好时的那张卡片 |
| **屏幕** | 把手机当作电脑的屏幕：镜像，或把桌面扩展到手机上。触摸可作为鼠标使用（轻点即单击，按住即右键单击，拖动可选择或移动窗口，双指滚动），并带有电脑的声音和流畅播放 |
| **光标** | 电脑的鼠标跨屏幕边缘来到手机上、在这里设置指针速度、反向滚动、右键和中键单击 |
| **键盘** | 电脑的键盘在手机上打字，每个键都作为按键，因此任何布局都可用，软键盘也不会挡路。手机上的键盘可在电脑上打字 |
| **遥控器** | 把手机当作电脑的触控板和键盘，或当作游戏手柄：自选按键、真实手柄（Windows、Linux），或可用于任何电脑的 Bluetooth 游戏手柄 |
| **摄像头** | 手机的后置或前置摄像头用于电脑，以及虚拟摄像头是否采用它 |
| **剪贴板** | 在一台设备上复制、在另一台上粘贴，两个方向各有开关，即时生效或在发送时生效 |
| **通知** | 手机的通知显示在电脑上，可隐藏文本，电脑的通知也显示在手机上 |
| **文件** | 发送文件、复制文件以便在电脑上粘贴，并查看电脑的文件落在哪里 |
| **声音** | 手机的声音在电脑上播放，电脑的声音在手机上播放 |
| **通用** | 手机的名称、后台运行，以及 TwinDesk 使用的各项权限，每项都有开关 |
| **关于** | 源代码、发行版、许可协议，以及哪些内容经由无线调试和网络传输 |

应用之外：

- **分享菜单：** 每个应用的分享菜单中的 *发送到电脑* 和 *复制到电脑*。
- **快捷设置磁贴：** *发送剪贴板* 和 *无线调试*。
- **主屏幕快捷方式：** 电脑的屏幕，以及一键开启无线调试。
- **常驻通知** 显示当前连接的内容，并带有退出。
- **在电脑上复制：** 用 <kbd>⌃⌥C</kbd> / <kbd>Ctrl+Alt+C</kbd> 复制的文件会以通知形式到达，带有复制（可在任意应用中粘贴）和保存。
- **电脑可以通过无线调试安装完整版应用**（手机页面 › 来自手机的通知）：Play Protect 会阻止下载的应用读取通知或短信，或使用 Accessibility，因此下载的版本会去掉这些内容，再由电脑补上。设置和配对会保留。

<a name="wireless-debugging"></a>

### 无线调试

文件、剪贴板和通知可立即使用。手机的屏幕、它以窗口形式显示的应用、触摸、你在手机上的鼠标和键盘以及手机的声音都经由**无线调试**，TwinDesk 只需为它配对一次：

<p align="center">
  <img src=".github/assets/ui-phone-pair.jpg" alt="Overview: the wireless debugging card under the connected computers, with the pairing code" width="820">
</p>

- 在配对之前，概览中已连接电脑下方的一张卡片（电脑上和手机上都有）会引导你完成配对。在手机上打开 *开发者选项 › 无线调试 › 使用配对码配对设备*，然后在电脑上输入 6 位配对码，或在手机上 TwinDesk 的通知中输入（设置应用的对话框会保持打开）。手机把配对码发送给它所连接的那台电脑：Mac、PC 或 Linux。
- 此后 TwinDesk 会在需要时自行开启无线调试，每次它重启后都会跟随到新端口，并让配对不对过期（否则 Android 会在电脑闲置 7 天后忘记它）。对于每次切换 Wi-Fi 或锁屏都会把它关掉的手机（MIUI、HyperOS），TwinDesk 会在一解锁时就重新开启，如果手机拒绝则给出提示。无线调试只有在 **USB 调试** 也开启时才能运行，因此 TwinDesk 会把两者都打开。
- **Xiaomi、Redmi 和 POCO** 还需要 *开发者选项 › USB 调试（安全设置）* 才能使用触摸、鼠标和键盘（该选项需要 Mi account）。没有它，屏幕会显示但输入会被拒绝；在开启之前，电脑上的手机页面会显示 "触摸被阻止"。
- **在 Mac 上，手机出现在 Finder 中。** 在挂载标签页中开启它，然后点击挂载：手机就会像任何服务器一样显示在位置栏中。在此之前 TwinDesk 从不查看手机的文件。当允许 USB 调试时它走线缆，否则走无线调试。Finder 的 `.DS_Store` 和 `._` 文件永远不会落到手机上。

</details>

<a name="how-it-works"></a>
<details>
<summary><h2>⚙️ 工作原理</h2> <sub>Electron 应用、原生辅助程序，以及设备之间的连接</sub></summary>

<p align="center">
  <img src=".github/assets/how-it-works.svg" alt="Architecture: an Electron app and a native helper on each computer, linked by a TLS control channel, WebRTC media and system services" width="100%">
</p>

每台电脑都运行一个 **Electron 应用**，它负责窗口、配对、连接和状态机。它旁边运行一个小型的 **原生辅助程序**，处理操作系统保留给自己的所有事情：捕获和注入输入、虚拟显示器、手势、窗口捕获和原生拖放。

| 文件夹 | 内容 |
|---|---|
| `mac/` | macOS 应用（Electron） |
| `mac-helper/` | macOS 辅助程序（Swift）：虚拟显示器、event tap、输入注入、声音、应用、SMB |
| `windows/` | Windows 应用（Electron）和安装程序 |
| `windows-helper/` | Windows 辅助程序（C#）：钩子、SendInput、Raw Input 触控板、窗口捕获、原生拖动 |
| `linux/` | Linux 应用（Electron） |
| `linux-helper/` | Linux 辅助程序（C）：X11 上的 XInput2 / XTest、Wayland 上的 evdev / uinput、XRandR、窗口列表、XDND 边缘条 |
| `android/` | Android 应用（Kotlin、Jetpack Compose）；电脑通过 adb 和 [scrcpy](https://github.com/Genymobile/scrcpy) 的服务器驱动手机 |
| `shared/` | 所有应用共用：传输协议、Bluetooth 管道与 Wi-Fi Direct 连接、手机中枢（通话、短信、照片、手机文件）、共享文件夹、帧生成和图标 |

两台设备之间的连接无论运行在哪里都是一个 TLS 会话：在本地网络上、通过手机的 USB 线缆（adb），或通过 **Bluetooth LE**（TwinDesk 自己的 GATT 管道，`shared/blepipe.js`）。当 Bluetooth 上的会话需要带宽时，`shared/netlink.js` 会建立一个 **Wi-Fi Direct** 组或加入手机的热点，把会话迁移过去，并在不再需要时再把它关闭。通话、短信、照片和手机文件在电脑上是 `shared/phonehub.js`，由手机上的 TwinDesk 应答。

网络或线缆上两台电脑之间的文件在同一端口上通过 HTTPS 流式传输，与控制链路并存，最多同时四个（`shared/fastfile.js`），因此鼠标和键盘永远不会排在大文件后面等待。经由 Bluetooth、Wi-Fi Direct、热点，或对端是较旧版本的 TwinDesk 时，它们仍和以前一样传输：在控制链路上分片进行。

端口：本地网络上的 TCP **47800**（控制链路和文件）和 UDP **47801**（发现）。

</details>

<a name="build-and-run"></a>
<details>
<summary><h2>🛠 构建与运行</h2> <sub>macOS、Windows、Linux、NixOS、Android 与 GitHub Actions</sub></summary>

每个平台都需要 [Node.js](https://nodejs.org) 18+。

### macOS（13 Ventura 或更高版本）

```sh
xcode-select --install          # Swift compiler for the helper
cd mac
npm install
npm run build:helper
npm start                       # run from source
npm run dist && npm run dmg     # build TwinDesk.app and TwinDesk-<version>-<arch>.dmg in mac/dist/
```

磁盘映像以其中的应用命名：Apple Silicon 为 `TwinDesk-2.4.0-arm64.dmg`，
Intel 为 `TwinDesk-2.4.0-x64.dmg`。发布时请保留这些名称：应用内更新器会据此为每台 Mac 挑选对应的那个。

默认情况下，`npm run dist` 面向 Mac 当前的架构。要从 Apple Silicon Mac 构建 Intel 包，请使用：

```sh
npm run dist:x64 && npm run dmg
```

要一步构建 Intel 应用及其映像，请运行 `npm run dmg:intel`；它会写入
`mac/dist/TwinDesk-<version>-x64.dmg`。

要明确为 Apple Silicon 构建，请使用 `npm run dist:arm64 && npm run dmg`。x64 构建会交叉编译
Swift 辅助程序并打包 x64 Electron 运行时，因此不需要 Intel Mac。

首次启动时，TwinDesk 会请求**屏幕录制**、**无障碍**和**输入
监控**权限（仅一次；此后常规标签页会显示每项权限的状态）。

`npm run dist` 会用它自己的证书为应用签名，该证书在首次构建时生成于
`~/.twindesk-signing`（请保留备份）。macOS 按签名保存权限，因此使用同一
证书时，把更新拖入“应用程序”后权限会延续。不带该证书构建的应用会
以 ad-hoc 方式签名，macOS 会把每次更新都当作新应用；此时 TwinDesk 会清除过时的条目，
让“允许”重新生效。

### Windows 10 / 11

```bat
cd windows
npm install
npm run build:helper            :: uses the .NET Framework C# compiler that ships with Windows
npm start
npm run dist                    :: NSIS installer in windows\dist\
npm run dist -- arm64           :: the Windows on ARM installer (or `x64 arm64` for both)
```

`npm run dist` 在 Mac 或 Linux 上同样可用：它会跳过辅助程序的构建，并打包
`windows-helper\bin\` 中已有的 `macshare-winhelper.exe`（例如从发布版本中取出的那个）。

安装程序会添加防火墙规则（针对所有网络配置文件，因此“公用”网络上的标准账户
之后无需管理员权限）。设置向导页只显示一次，如果某些设置发生变化，它会提供
修复防火墙的选项（这需要管理员权限），并提供安装可选的虚拟显示器驱动程序，用于扩展。

### Linux（X11 或 Wayland）

```sh
sudo apt install build-essential libx11-dev libxi-dev libxtst-dev libxext-dev libxrandr-dev libxfixes-dev
cd linux
npm install
npm run build:helper
npm start
npm run dist                    # AppImage and .deb in linux/dist/
```

设置向导页会引导你完成其余步骤。在 Wayland 上，这意味着输入访问权限（一次管理员
提示，然后注销并重新登录一次）。它还可以为终端安装 OpenSSH。在
GNOME Wayland 上，扩展使用 Python 3 加 GObject 和 GStreamer 的 PipeWire 插件（`python3-gi`、
`gstreamer1.0-pipewire`），GNOME 桌面已经自带这些。

<a name="nixos--nix-flakes"></a>

#### NixOS 与 Nix Flakes

TwinDesk 包含一个 `flake.nix`，支持包、开发环境和 NixOS 模块：

```sh
# Run directly with flakes
nix run github:InukaAsith/TwinDesk

# Or enter development environment
nix develop
```

在 NixOS 上，在系统配置中启用该模块：

```nix
{
  programs.twindesk = {
    enable = true;
    user = "yourusername"; # adds to input/uinput groups for Wayland KVM
  };
}
```

完整选项（防火墙、Wi-Fi Direct 能力包装、虚拟显示器等）见 [docs/nixos.md](docs/nixos.md)。


#### 从 Mac 测试 Linux 应用

`linux/scripts/vm-test.sh` 会在 [Parallels Desktop](https://www.parallels.com) Linux 虚拟机
（装有上述软件包和 Node.js 的 Ubuntu）中运行它：它把这份检出复制到虚拟机中、构建
辅助程序、在虚拟机的桌面会话中启动 TwinDesk，并从 Mac 上驱动它。

```sh
linux/scripts/vm-test.sh start            # sync, build and (re)start it in the VM
linux/scripts/vm-test.sh shot linux.png   # screenshot of its window
linux/scripts/vm-test.sh eval "UI.go('cursor')"
linux/scripts/vm-test.sh log
```

在虚拟机的共享网络上，它能发现 Mac 的 TwinDesk，并像任何 Linux 电脑一样配对。

### Android

```sh
cd android
./gradlew assembleRelease        # JDK 17+; app/build/outputs/apk/{standard,full}/release/
```

`standard` 是人们下载的构建。`full` 增加了通知访问权限、短信权限
（信息）和无障碍服务（无需无线调试即可使用鼠标和键盘），而 Play Protect 会阻止下载的应用使用这些功能；
电脑通过无线调试安装它（手机页面 ›
来自手机的通知），因此每个平台上的 `npm run dist` 都会打包最新的
`android/dist/*-full.apk`。

<a name="github-actions"></a>

### GitHub Actions

**Build Android**、**Build Linux** 和 **Build Windows**（Actions 标签页 › Run workflow）会生成
standard 和 full APK、AppImage 和 .deb，以及 x64 和 arm64 安装程序，并包含辅助程序。
将 `ANDROID_KEYSTORE` secret 设置为 Android 应用签名所用的密钥
（`base64 -i ~/.android/debug.keystore`）：这样 APK 就能覆盖安装到现有应用上，Linux 和
Windows 构建也会携带完整的 Android 应用。若不设置它，APK 会使用 runner 自己的密钥，
电脑端的构建则不会包含 Android 应用。

要对 Windows 安装程序进行 Authenticode 签名，请将 `WIN_CSC_LINK` secret 设置为 base64 编码的
Windows 代码签名 `.pfx` 证书，并将 `WIN_CSC_KEY_PASSWORD` 设为其密码。请将
证书和密码保存在仓库之外。设置 `WIN_CSC_LINK` 后，如果签名无法完成，Windows 构建会失败，
而不是静默发布未签名的安装程序。签名会为用户提供经过验证的发布者，并有助于
随时间积累 SmartScreen 声誉；它并不能保证杀毒软件停止标记文件。

</details>

<a name="chinese-ui"></a>

# 🌐 中文界面与语言切换

这个仓库里的 TwinDesk 已带简体中文界面：**默认就是中文**，随时可以切回英文。

- 切换位置：**通用 › 应用 › 语言**（`中文` / `English`）。选完窗口会重载一次，所有窗口和托盘菜单一起换。
- 选择的语言存在 `settings.json` 的 `ui.lang`（`"zh"` 或 `"en"`），下次启动沿用：
  - Windows：`%APPDATA%\MacShare\settings.json`
  - macOS：`~/Library/Application Support/MacShare/settings.json`
  - Linux：`~/.config/MacShare/settings.json`

## 它是怎么做的

代码里继续写英文，显示之前查一次词典；英文模式下 `T()` 原样返回，一个词条都不用撤。

| 文件 | 作用 |
| --- | --- |
| `shared/i18n.js` | 词典引擎：`T(s)` 查表、`I18n.setLang('zh' \| 'en')`、`I18n.add`、`I18n.pattern` |
| `shared/lang/zh.core.js` | 通用词条：侧栏页签、配对横幅、状态、托盘、HUD |
| `shared/lang/zh.media.js` | 屏幕共享、摄像头、遥控、ReZume |
| `shared/lang/zh.comms.js` | 通话、短信、手机中枢 |
| `shared/lang/zh.io.js` | 文件、挂载、终端、剪贴板 |
| `shared/lang/zh.devices.js` | 手机、平板、ADB、镜像 |
| `shared/lang/zh.settings.js` | 通用设置、关于、更新、多设备 |
| `shared/lang/zh.pages.js` | 一对一（非 Mesh）界面的页面 |
| `shared/lang/zh.mac.js` | macOS 主窗口与各页面（`mac/control.html` + `mac/ui-*.js`）、菜单栏、通知、画面窗口 |
| `shared/i18n-dom.js` | 词典装好之后，填 `app.html` / `control.html` 里 `data-t` / `data-ta` 的静态文案 |

- **渲染进程（Windows）**：`windows/ui-kit.js` 的 `UI.el` / `UI.row` / `UI.card` / `UI.note` 会自动对 `text`、`label`、`hint`、子字符串以及 `title` / `aria-label` / `placeholder` / `alt` 调 `T()`，所以**改文案通常只要加词条**。
- **渲染进程（macOS）**：渲染原语在 `mac/control.js` 的 `UI` 对象里（Mac 没有 `ui-kit.js`），`UI.el` / `UI.fill` 同样先查词典、再填 `{name}` / `{me}`。
- **主进程**（托盘、通知、HUD、状态行、显示器名）：`const I18n = require('../shared/i18n.js')` 之后写 `I18n.T('…')`。这些文件里常有 `const T = P.T`（协议消息类型），**不要用裸 `T`**。

<a name="加词条"></a>

## 加词条

```js
// shared/lang/zh.io.js 末尾
I.add({
  'Mount as a drive': '挂载成磁盘',
});

// 名字、数字拼出来的句子
I.pattern(/^Connected to (.+)$/, (m) => '已连接到 ' + I.T(m[1]));
```

规则：

- **pattern 先注册先匹配**，越具体越靠前：`/^Connected to (.+)\. Double-tap (.+)…$/` 必须排在 `/^Connected to (.+)$/` 之前。
- 一个 pattern 返回 `null` 表示「这条不算」，会继续试后面的 pattern。
- 中文全角标点；中英文之间留一个空格。
- 设备名、品牌、快捷键名、路径、文件名、另一端传回来的数据串不翻。

## 仍然是英文的地方

- **Linux 的主窗口（`linux/app.html`）和 Android App** 还没接入词典层，整个界面仍是英文。
- 设备名、`TwinDesk`、`ADB`、`Wi-Fi` / `Wi-Fi Direct`、快捷键名（`Scroll Lock`、`F11`）、作者与链接。
- Mac 上的 `Dock`、`Menu bar` 按专有名词保留英文（Windows 上对应的 `Taskbar` / `Tray` 译作「任务栏」「托盘」）；`TwinDesk Camera`、`OBS Virtual Camera` 是系统里真实的摄像头名称，也不翻。
- 日志、错误堆栈、`adb` 命令、状态码（如 `no viewer`）保持英文，它们不进界面。
- 手机端 App 和另一台电脑发回来的提示属于数据，不是本机文案。

<a name="thanks"></a>

## 致谢

TwinDesk 因每一位提交拉取请求的人而更好：

- [@DevPsycho-07](https://github.com/DevPsycho-07)：把手机作为遥控器（[#44](https://github.com/InukaAsith/TwinDesk/pull/44)）、跨剪贴板截图（[#45](https://github.com/InukaAsith/TwinDesk/pull/45)）、手机窗口控制（[#46](https://github.com/InukaAsith/TwinDesk/pull/46)）以及手机端修复（[#43](https://github.com/InukaAsith/TwinDesk/pull/43)）
- [@benzntech](https://github.com/benzntech)：手机的摄像头（[#48](https://github.com/InukaAsith/TwinDesk/pull/48)）、Developer ID 签名与公证（[#40](https://github.com/InukaAsith/TwinDesk/pull/40)）以及 Mac 的下载（[#39](https://github.com/InukaAsith/TwinDesk/pull/39)）
- [@atse25029-collab](https://github.com/atse25029-collab)：手机窗口中的 WhatsApp 和 Instagram（[#42](https://github.com/InukaAsith/TwinDesk/pull/42)）
- [@philopaterwaheed](https://github.com/philopaterwaheed)：光标锁定（[#49](https://github.com/InukaAsith/TwinDesk/pull/49)）
- [@ghustanov](https://github.com/ghustanov)：无线调试的自动关闭（[#31](https://github.com/InukaAsith/TwinDesk/pull/31)）以及 Mac 辅助程序的 Info.plist（[#30](https://github.com/InukaAsith/TwinDesk/pull/30)）
- [@m-uvex](https://github.com/m-uvex)：Nix flake 和 NixOS 模块（[#37](https://github.com/InukaAsith/TwinDesk/pull/37)）
- Erdoğan Yeşil（[@erdodo](https://github.com/erdodo)）：TwinDesk Mesh 所基于的 mesh（[#29](https://github.com/InukaAsith/TwinDesk/pull/29)），以及 [#8](https://github.com/InukaAsith/TwinDesk/pull/8) 和 [#9](https://github.com/InukaAsith/TwinDesk/pull/9)
- [@Jay-Prajapati01](https://github.com/Jay-Prajapati01)：已签名的 Windows 安装程序（[#13](https://github.com/InukaAsith/TwinDesk/pull/13)）

还要感谢所有在 [issues](https://github.com/InukaAsith/TwinDesk/issues) 中报告问题并分享想法的人。

## 许可协议

TwinDesk 是自由软件，依据 [GNU General Public License v3.0](LICENSE) 授权。
Copyright © 2026 inukaasith。

部分内容改编自 [DeskPad](https://github.com/Stengo/DeskPad)（MIT）。详见 [THIRD_PARTY_NOTICES](THIRD_PARTY_NOTICES)。


