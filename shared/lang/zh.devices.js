// TwinDesk — Copyright (C) 2026 inukaasith, Erdoğan Yeşil. GPL-3.0, see LICENSE.
// 中文词条 —— zh.devices：手机页（windows/mesh/ui-phone.js）与手机文件页（shared/ui-pfiles.js）。
// 英文原串做 key，中文做值；动态句子用 I18n.pattern(/正则/, (m) => `...${m[1]}...`)，
// 放在文件后半部分，正则锚定 ^...$，更具体的写在前面（查表按加入顺序匹配）。
(function (g) {
  const I = g && g.I18n ? g.I18n : require('../i18n.js');

  I.add({
    // ── 手机页：页签与按钮 ────────────────────────────────────────────────
    'Show Phone Screen': '显示手机屏幕',
    'Connect with Wi-Fi Direct': '用 Wi-Fi Direct 连接',
    'Connect with hotspot': '通过热点连接',
    'Back to Bluetooth': '切回蓝牙',
    'Cursor Settings': '光标设置',
    'Show me how': '查看步骤',

    // ── 手机页：无线调试 ──────────────────────────────────────────────────
    'Wireless debugging': '无线调试',
    'Wireless debugging: full control': '无线调试：完全控制',
    'TwinDesk on the phone taps and types itself, over Wi-Fi, Wi-Fi Direct or Bluetooth. No developer options': '手机上的 TwinDesk 自己点按、自己输入，走 Wi-Fi、Wi-Fi Direct 或蓝牙。无需开发者选项',
    'Pairing code': '配对码',
    'Pairing address': '配对地址',
    'Address:port (optional)': '地址：端口（可选）',
    'Pair': '配对',
    'Or type it on the phone, in TwinDesk’s notification': '或者在手机上、TwinDesk 的通知里输入',
    'On the phone: Settings › About phone › Software information › tap Build number 7 times. Developer options appear.': '在手机上：设置 › 关于手机 › 软件信息 › 连续点按「版本号」7 次，开发者选项就会出现。',
    'Settings › Developer options: turn on USB debugging.': '设置 › 开发者选项：打开「USB 调试」。',
    'On the same page, turn on Wireless debugging. The phone has to be on a Wi-Fi network (a direct Wi-Fi link alone isn’t enough).': '在同一页打开「无线调试」。手机需要连在 Wi-Fi 网络上（只连 Wi-Fi Direct 不够）。',
    'Tap Wireless debugging › Pair device with pairing code, and type the code here, or in TwinDesk’s notification on the phone.': '点「无线调试」›「使用配对码配对设备」，然后在这里输入配对码，或者在手机上 TwinDesk 的通知里输入。',
    'That’s all: after pairing once, TwinDesk turns wireless debugging on by itself.': '就这样：配对一次之后，TwinDesk 会自己打开无线调试。',
    'Ready': '就绪',
    'Pair once': '配对一次',
    'Missing': '缺失',
    'Touch blocked': '触控被拒绝',
    'Wireless debugging is off on the phone. The screen and ADB control need it; Accessibility doesn’t.': '手机上的无线调试已关闭。屏幕和 ADB 控制需要它，辅助功能不需要。',
    'The screen works, but Xiaomi refuses touch, mouse and keyboard from here. On the phone: Settings › Developer options › USB debugging (Security settings): on (it asks for a Mi account).': '屏幕能用，但小米拒绝来自本机的触控、鼠标和键盘操作。在手机上：设置 › 开发者选项 ›「USB 调试（安全设置）」：打开（会要求登录小米账号）。',
    'The phone’s screen, touch, mouse and keyboard, and its clipboard in the background': '手机的屏幕、触控、鼠标和键盘，以及后台的手机剪贴板',
    'TwinDesk pairs with the phone’s wireless debugging once. After that the phone’s screen, apps, mouse and keyboard work without this step.': 'TwinDesk 只需与手机的无线调试配对一次。之后手机的屏幕、应用、鼠标和键盘都不再需要这一步。',
    'Notifications from the phone': '手机通知',
    'Screen, mouse and keyboard': '屏幕、鼠标和键盘',
    'This build of TwinDesk doesn’t carry the Android app.': '这个构建的 TwinDesk 不包含 Android 应用。',

    // ── 手机页：应用窗口与设置 ────────────────────────────────────────────
    'Search apps': '搜索应用',
    'Open on this PC': '在本机打开',
    'Phone sound': '手机声音',
    'Data saver (4 Mb/s)': '省流量（4 Mb/s）',
    'Balanced (8 Mb/s)': '均衡（8 Mb/s）',
    'Sharp (16 Mb/s)': '清晰（16 Mb/s）',
    'Sharpest (24 Mb/s)': '最清晰（24 Mb/s）',
    'Wallpaper': '壁纸',
    'Enter sends messages': '回车发送消息',
    'Arrow keys swipe': '方向键滑动',
    'Title bar': '标题栏',
    'Side panel': '侧面板',
    'Bottom bar': '底栏',
    'Phone sound in the screen window': '屏幕窗口里的手机声音',
    'Android 11 or later': 'Android 11 或更高版本',
    'Picture': '画面',
    'For the screen window and app windows': '用于屏幕窗口和应用窗口',
    'Window controls': '窗口控制',
    'Title bar: Back, Home, Recents and the main ones up top. Side panel: those, volume, rotate, screenshot and more down the right of each phone window. Bottom bar: Back, Home and Recents under the picture': '标题栏：返回、主屏幕、最近任务等主要按钮在顶部。侧面板：这些按钮，加上音量、旋转、截图等，排在每个手机窗口的右侧。底栏：画面下方的返回、主屏幕和最近任务',
    'In WhatsApp, Instagram and Telegram, in a phone window or with this keyboard on the phone. Shift+Enter: a new line': '在 WhatsApp、Instagram 和 Telegram 里，在手机窗口中或手机上用这个键盘时生效。Shift+Enter：换行',
    'In a phone window: up and down through feeds, Reels and Shorts, left and right through pages. Off: they move the cursor': '在手机窗口里：上下翻信息流、Reels 和 Shorts，左右翻页。关闭时：方向键移动光标',
    'Show the phone’s wallpaper here': '在这里显示手机壁纸',
    'Lets TwinDesk on the phone read it (set up over wireless debugging)': '允许手机上的 TwinDesk 读取壁纸（通过无线调试设置）',
    'Push the pointer off the edge of the screen to use the phone. Double-tap the hotkey to come back.': '把指针推出屏幕边缘就能操作手机。双击热键回到本机。',
    'Automatic: ADB, wireless debugging is ready': '自动：ADB，无线调试已就绪',
    'Automatic: Accessibility until wireless debugging is ready': '自动：无线调试就绪前使用辅助功能',
    'TwinDesk on the phone taps and types itself. The phone asks once to allow it in Accessibility': '手机上的 TwinDesk 自己点按、自己输入。手机会在辅助功能里询问一次',
    'Apps open in their own windows once wireless debugging is set up.': '无线调试设置好之后，应用会在各自的窗口中打开。',
    'Loading the phone’s apps…': '正在加载手机上的应用…',
    'Phone screen': '手机屏幕',
    'Mirror': '镜像',

    // ── 手机页：状态栏与未连接提示 ────────────────────────────────────────
    'USB cable': 'USB 线',
    'Click the phone above Overview to connect it.': '点概览上方的手机即可连接。',
    'No phone connected. Open TwinDesk on the phone and pair it from Overview › Nearby.': '未连接手机。在手机上打开 TwinDesk，从「概览 › 附近」配对。',

    // ── 手机文件页：工具栏与共享文件夹 ────────────────────────────────────
    'Browse your phone’s storage, copy files both ways. No ADB: TwinDesk on the phone does it.': '浏览手机的存储，双向复制文件。无需 ADB：手机上的 TwinDesk 会完成。',
    'Up': '上一级',
    'Hidden': '隐藏项',
    'Show files whose names start with a dot': '显示名称以点开头的文件',
    'Upload…': '上传…',
    'Create': '创建',
    'Folder name': '文件夹名称',
    'New name': '新名称',
    'Eject': '弹出',
    'The phone’s shared folder': '手机的共享文件夹',
    'Open the phone’s shared folder when it shares one': '手机共享文件夹时自动打开',
    'Share a folder with the phone': '与手机共享文件夹',
    'Shared folders': '共享文件夹',
    'Opening…': '正在打开…',
    'Connecting with Wi-Fi Direct…': '正在用 Wi-Fi Direct 连接…',
    'This folder is empty': '这个文件夹是空的',
    'That didn’t work': '没有成功',
    'your phone': '你的手机',
    'the file manager': '文件管理器',
    'a file': '1 个文件',
  });

  // ── 运行时拼出来的句子（带电量、数字、设备名、文件名）──────────────────
  I.pattern(/^Battery (\d+)%, charging$/, (m) => `电量 ${m[1]}%，充电中`);
  I.pattern(/^Battery (\d+)%$/, (m) => `电量 ${m[1]}%`);
  I.pattern(/^Open (.+) in a window \(right-click to pin it to Start\)$/, (m) => `在窗口中打开 ${m[1]}（右键可固定到「开始」）`);
  I.pattern(/^(.*)The TwinDesk you downloaded can’t read the phone’s notifications \(Play Protect blocks downloaded apps that can\)\. Install the full app over it: its settings and pairing stay\.( Needs wireless debugging\.)?$/, (m) => `${m[1]}你下载的 TwinDesk 读不到手机的通知（Play Protect 会拦截具备该权限的下载应用）。覆盖安装完整版即可：设置和配对都会保留。${m[2] ? '需要无线调试。' : ''}`);

  // 手机文件页。（更具体的写在前面：your phone 的固定说法先用。）
  I.pattern(/^your phone’s shared folder$/, () => '手机的共享文件夹');
  I.pattern(/^(.*)’s shared folder$/, (m) => `${I.T(m[1])}的共享文件夹`);
  I.pattern(/^Share a folder with your phone$/, () => '与手机共享文件夹');
  I.pattern(/^Share a folder with (.+)$/, (m) => `与${I.T(m[1])}共享文件夹`);
  I.pattern(/^None shared: on (.+), TwinDesk › File access › Share a folder$/, (m) => `没有共享：在${I.T(m[1])}上，TwinDesk › 文件访问 › 共享文件夹`);
  I.pattern(/^Show in (.+)$/, (m) => `在${I.T(m[1])}中显示`);
  I.pattern(/^“(.+)”: Open connects with Wi-Fi Direct and shows it in (.+)$/, (m) => `「${m[1]}」：点「打开」会用 Wi-Fi Direct 连接，并在${I.T(m[2])}中显示`);
  I.pattern(/^“(.+)”: Open shows it in (.+)$/, (m) => `「${m[1]}」：点「打开」会在${I.T(m[2])}中显示`);
  I.pattern(/^“(.+)”, in (.+) under Locations$/, (m) => `「${m[1]}」，在${I.T(m[2])}的「位置」下`);
  I.pattern(/^“(.+)”, in (.+)$/, (m) => `「${m[1]}」，在${I.T(m[2])}中`);
  I.pattern(/^Couldn’t share: (.+)$/, (m) => `无法共享：${m[1]}`);
  I.pattern(/^(.+): in (.+)’s Files app and file pickers, over Wi-Fi Direct \(Open on the phone connects it\)$/, (m) => `${m[1]}：在${m[2]}的文件应用和文件选择器中（走 Wi-Fi Direct，手机上点「打开」会连接）`);
  I.pattern(/^(.+): in (.+)’s Files app and file pickers$/, (m) => `${m[1]}：在${m[2]}的文件应用和文件选择器中`);
  I.pattern(/^Saving (.+) to (.+)’s (.+)…$/, (m) => `正在把 ${I.T(m[1])} 保存到 ${I.T(m[2])}的「${I.T(m[3])}」文件夹…`);
  I.pattern(/^(\d+) chosen$/, (m) => `已选 ${m[1]} 项`);
  I.pattern(/^Save to (.+)$/, (m) => `保存到${I.T(m[1])}`);
  I.pattern(/^Delete (\d+) items\?$/, (m) => `删除 ${m[1]} 项？`);
  I.pattern(/^Delete (.+)\?$/, (m) => `删除「${m[1]}」？`);
  I.pattern(/^(.+) free of (.+)$/, (m) => `${m[1]} 可用，共 ${m[2]}`);
  I.pattern(/^Sending a file to (.+)…$/, (m) => `正在把文件发送到 ${m[1]}…`);
  I.pattern(/^Sending (\d+) items to (.+)…$/, (m) => `正在把 ${m[1]} 项发送到 ${m[2]}…`);
  I.pattern(/^Upload from (.+)…$/, (m) => `从 ${m[1]} 上传…`);
  I.pattern(/^(\d+) items?( · .+)?$/, (m) => `${m[1]} 项${m[2] || ''}`);
  I.pattern(/^Folder( · .+)?$/, (m) => `文件夹${m[1] || ''}`);
  I.pattern(/^Choose (.+)$/, (m) => `选择 ${m[1]}`);
  // 设备页（shared/ui-device.js）、无线调试（shared/ui-adb.js）、二维码配对（shared/ui-adbqr.js、
  // shared/ui-qrpair.js）、镜像与应用（shared/ui-mirror.js）。
  // 拼出来的句子（"Sent to " + 设备名）靠 dict + trim 保留首尾空白的规则命中。
  // 更具体的动态句子写在前面，^Open (.+)$ 这种兜底的放最后。
  I.add({
    // ---- 设备页（shared/ui-device.js） ----
    'Show screen': '显示屏幕',
    'Ring': '响铃',
    'Stop ringing': '停止响铃',
    'Lock': '锁定',
    'Sleep': '睡眠',
    'Use Wi-Fi Direct': '用 Wi-Fi Direct 连接',
    'Use hotspot': '使用热点',
    'Media volume': '媒体音量',
    'Quick actions': '快捷操作',
    'Customize': '自定义',
    'Controls': '控制',
    'Latest notifications': '最近通知',
    'See all': '查看全部',
    'Most used': '常用应用',
    'All apps': '全部应用',
    'Drop files here': '把文件拖到这里',
    'Vibrate': '振动',
    'Silent': '静音',
    'Mobile data': '移动数据',
    'Torch': '手电筒',
    'Do not disturb': '勿扰模式',
    'Auto-rotate': '自动旋转',
    'Battery saver': '省电模式',
    'Rings at full volume, even on silent, until you stop it here or there.': '以最大音量响铃，即使静音也会响，直到你在这里或手机上停止它。',
    'Needs wireless debugging (Connection)': '需要无线调试（连接）',
    'Nothing is connected. Connect a phone or computer on the Connection page.': '还没有连接任何设备。请在「连接」页连接手机或电脑。',
    'Windows PC': 'Windows 电脑',
    'Linux computer': 'Linux 电脑',
    'Control': '控制方式',
    'Signal': '信号',
    'Link': '连接方式',
    'Not set up': '未设置',
    'ADB · ready': 'ADB · 就绪',
    'ADB · connecting': 'ADB · 连接中',
    'ADB · not paired': 'ADB · 未配对',
    'ADB · off': 'ADB · 已关闭',
    'Opens the setting on the phone': '在手机上打开该设置',
    'Turn them on in Clipboard': '在「剪贴板」里打开',
    'What’s copied on either side shows here': '两边复制的内容都会显示在这里',
    'Sent to': '已发送到',
    'From': '来自',

    // ---- 无线调试（shared/ui-adb.js） ----
    'Show steps': '看看步骤',
    'Hide steps': '收起步骤',
    'On the phone, open Settings › About phone and tap Build number seven times.': '在手机上打开 设置 › 关于手机，连续点按「版本号」7 次。',
    'Open Settings › Developer options and turn on USB debugging.': '打开 设置 › 开发者选项，打开「USB 调试」。',
    'Turn on Wireless debugging on the same page. The phone needs a Wi-Fi network.': '在同一页打开「无线调试」。手机需要连在 Wi-Fi 网络上。',
    'Tap Pair device with pairing code and enter the code below, or tap Pair device with QR code and scan the QR code here.': '点「使用配对码配对设备」并输入下面的配对码，或点「使用二维码配对设备」并扫描这里的二维码。',
    'After the first pairing, TwinDesk turns wireless debugging on by itself.': '配对一次之后，TwinDesk 会自己打开无线调试。',
    'From the phone’s Pair device with pairing code, or type it in TwinDesk’s notification there': '在手机上点「使用配对码配对设备」，或在那里 TwinDesk 的通知里输入',
    'Off on the phone. Mirroring and ADB control need it; Accessibility control doesn’t.': '手机上的无线调试是关着的。镜像和 ADB 控制需要它，辅助功能控制不需要。',
    'The screen works, but this Xiaomi blocks input. On the phone: Developer options › USB debugging (Security settings).': '屏幕能用，但这台小米会拦截输入。在手机上：开发者选项 ›「USB 调试（安全设置）」。',
    'Screen, apps, touch and keyboard, and the clipboard in the background': '屏幕、应用、触控和键盘，以及后台的剪贴板',
    'TwinDesk pairs with the phone’s wireless debugging once. After that, mirroring, phone apps and ADB control work without this step.': 'TwinDesk 只需和手机的无线调试配对一次。之后镜像、手机应用和 ADB 控制都不再需要这一步。',
    'This build of TwinDesk doesn’t include the Android app.': '这个版本的 TwinDesk 没有内置 Android 应用。',

    // ---- 二维码配对（shared/ui-adbqr.js、shared/ui-qrpair.js） ----
    'Show QR Code': '显示二维码',
    'Pair with a QR code': '用二维码配对',
    'On the phone: Wireless debugging › Pair device with QR code': '在手机上：无线调试 › 使用二维码配对设备',
    'Wireless debugging QR code': '无线调试二维码',
    'Scan with the phone': '用手机扫一扫',
    'Settings › Developer options › Wireless debugging.': '设置 › 开发者选项 › 无线调试。',
    'Tap Pair device with QR code.': '点「使用二维码配对设备」。',
    'Scan this code. TwinDesk connects by itself.': '扫一扫这个二维码，TwinDesk 会自己连上。',
    'Paired. Connecting…': '已配对，正在连接…',
    'The QR code timed out. Show it again to retry.': '二维码已过期。重新显示后再试。',
    'Waiting for the phone…': '正在等待手机…',
    'Wireless debugging isn’t available here.': '这里用不了无线调试。',
    'Pair a phone with a QR code': '用二维码配对手机',
    'Scan it with the phone’s camera, or with Scan QR code in TwinDesk on the phone': '用手机相机扫，或在手机上用 TwinDesk 的「扫二维码」',
    'Pairing QR code': '配对二维码',
    'Scan with your phone': '用手机扫一扫',
    'Open the camera, or TwinDesk › Scan QR code.': '打开相机，或 TwinDesk › 扫二维码。',
    'Point it at this code and open the link.': '对准这个二维码，然后打开链接。',
    'Click Allow here when it asks.': '弹出提示时在这里点「允许」。',
    'A new code comes every 10 minutes. Only someone who sees this screen can use it.': '每 10 分钟换一个新码。只有能看到这个画面的人才能用它。',

    // ---- 镜像与应用（shared/ui-mirror.js） ----
    'Open on this Mac': '在此 Mac 上打开',
    'Open on this computer': '在本机打开',
    'Wireless debugging isn’t set up': '还没设置无线调试',
    'Mirroring and phone apps need it. Set it up once on the Connection page.': '镜像和手机应用都需要它。在「连接」页设置一次就好。',
    'Set Up': '去设置',
    'Connecting to the phone’s wireless debugging…': '正在连接手机的无线调试…',
    'Opens in its own window. Close it any time; the phone keeps running.': '在独立窗口中打开。随时可以关掉，手机照常运行。',
    'Data saver · 4 Mb/s': '省流量 · 4 Mb/s',
    'Balanced · 8 Mb/s': '均衡 · 8 Mb/s',
    'Sharp · 16 Mb/s': '清晰 · 16 Mb/s',
    'Sharpest · 24 Mb/s': '最清晰 · 24 Mb/s',
    'Play phone sound here': '在这里播放手机声音',
    'Picture quality': '画面质量',
    'For the phone screen and app windows': '用于手机屏幕和应用窗口',
    'Phone controls': '手机控制键',
    'Where Back, Home, Recents and the other buttons sit. The panel button in each window’s title bar shows or hides them.': '返回、主屏幕、最近任务这些按钮的位置。每个窗口标题栏上的面板按钮可以显示或隐藏它们。',
    'Return sends messages': 'Return 键发送消息',
    'In WhatsApp, Instagram and Telegram. Shift+Enter adds a new line.': '在 WhatsApp、Instagram 和 Telegram 里。Shift+Enter 换行。',
    'In WhatsApp, Instagram and Telegram. ⇧Return adds a new line.': '在 WhatsApp、Instagram 和 Telegram 里。⇧Return 换行。',
    'Up and down through feeds and Shorts, left and right through pages. Off: arrows move the text cursor.': '上下翻信息流和 Shorts，左右翻页。关掉时：方向键移动文本光标。',
    'Phone windows': '手机窗口',
    'Mouse Settings': '鼠标设置',
    'Push the pointer past the screen edge to use the phone.': '把光标推到屏幕边缘，就能操作手机。',
    'add it to the Dock': '添加到程序坞',
    'pin it to Start': '固定到「开始」',
  });

  // ---- 动态句子 ----
  I.pattern(/^(\d+)% · Charging$/, (m) => `电量 ${m[1]}% · 充电中`);
  I.pattern(/^(\d+(?:\.\d+)?) of (\d+(?:\.\d+)?) GB$/, (m) => `${m[1]} / ${m[2]} GB`);
  I.pattern(/^Copy (\d+)$/, (m) => `复制 ${m[1]}`);
  I.pattern(/^New notifications from (.+) show here$/, (m) => `来自 ${I.T(m[1])} 的新通知会显示在这里`);
  I.pattern(/^Didn’t pair: (.+)$/, (m) => `配对失败：${I.T(m[1])}`);
  I.pattern(/^(.*)The downloaded app can’t read notifications\. Install the full app over it; settings and pairing stay\.( Needs wireless debugging\.)?$/, (m) => `${I.T(m[1])}下载的应用读不到通知。覆盖安装完整版即可：设置和配对都会保留。${m[2] ? '还需要无线调试。' : ''}`);
  I.pattern(/^(\d+) of (\d+)$/, (m) => `${m[1]} / ${m[2]}`);
  I.pattern(/^(\d+) apps$/, (m) => `${m[1]} 个应用`);
  I.pattern(/^Open (.+) · Right-click to pin it to Start$/, (m) => `打开 ${I.T(m[1])} · 右键可固定到「开始」`);
  I.pattern(/^Open (.+) · Right-click to add it to the Dock$/, (m) => `打开 ${I.T(m[1])} · 右键可添加到程序坞`);
  I.pattern(/^Open (.+)$/, (m) => `打开 ${I.T(m[1])}`);
})(typeof window !== 'undefined' ? window : null);
