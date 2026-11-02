// TwinDesk — Copyright (C) 2026 inukaasith, Erdoğan Yeşil. GPL-3.0, see LICENSE.
// 中文词条 —— zh.settings。英文原串做 key，中文做值。
// 动态句子（带设备名/数字）用 I18n.pattern(/正则/, (m) => `...$1...`)，放在同一个文件里。
(function (g) {
  const I = g && g.I18n ? g.I18n : require('../i18n.js');
  I.add({
    // ── 通用（windows/ui-general.js）────────────────────────────────────────
    'App': '应用',
    'Start with Windows': '开机启动',
    'Show a popup when switching': '切换时显示弹窗',
    'When the mouse and keyboard move between computers': '当鼠标和键盘在电脑之间切换时',
    'Received files': '接收的文件',
    'Check again': '再次检查',
    'Wake from the network': '网络唤醒',
    'Let the other computer wake {me}': '允许另一台电脑唤醒 {me}',
    'TwinDesk in Send to': '「发送到」里的 TwinDesk',
    'Shows up once a computer is paired': '配对一台电脑后显示',
    'Virtual display driver': '虚拟显示驱动',
    'Bluetooth with phones': '与手机的蓝牙',
    'Bluetooth with computers': '与电脑的蓝牙',
    'Turn off Bluetooth on Wi-Fi connections': '在 Wi-Fi 连接时关闭蓝牙',
    'For a phone or computer that isn’t on this network': '用于不在本网络内的手机或电脑',
    'Location': '位置',
    'To join a phone’s or computer’s Wi-Fi Direct (Windows shows Wi-Fi networks only with it)': '用于加入手机或电脑的 Wi-Fi Direct（Windows 要有它才显示 Wi-Fi 网络）',
    'How other computers see this one': '其他电脑看到的名称',
    'Network and sharing': '网络与共享',
    'Changing…': '正在更改…',
    'Starting…': '正在启动…',
    'Removing…': '正在移除…',
    'Not supported': '不支持',
    'Unknown': '未知',
    'No network adapter here can wake {me}': '这台电脑没有能唤醒 {me} 的网络适配器',
    'Its network adapter wakes {me} on a magic packet. Asks for administrator rights to change it': '它的网络适配器收到魔术包就会唤醒 {me}。更改此项需要管理员权限',
    'Adds the extra screen for Share screen › Extend': '为「共享屏幕 › 扩展」增加一块屏幕',
    'Needed for Share screen › Extend. Asks for administrator rights once': '「共享屏幕 › 扩展」需要它。会请求一次管理员权限',
    'Bluetooth is off in Windows settings': 'Windows 设置里蓝牙已关闭',
    'This PC’s Bluetooth can’t do it (needs Bluetooth LE)': '这台电脑的蓝牙不支持（需要蓝牙 LE）',
    'Only phones on this network or a USB cable connect': '只有本网络内的手机或用 USB 线连接的手机能连上',
    'A phone nearby connects through Bluetooth; files and screens switch to Wi-Fi Direct for a moment': '附近的手机通过蓝牙连接；文件和屏幕会短暂切到 Wi-Fi Direct',
    'Bluetooth stays on beside the Wi-Fi, the way back if it drops': '蓝牙在 Wi-Fi 之外保持开启，断线时还能回来',
    'Off now: the session is on the same Wi-Fi. Bluetooth comes back when it ends': '当前已关闭：会话在同一 Wi-Fi 上，会话结束后蓝牙恢复',
    'On the same Wi-Fi network (not Wi-Fi Direct), Bluetooth goes off until the session ends. With a computer, phones can’t find this one meanwhile': '在同一 Wi-Fi 网络（不是 Wi-Fi Direct）上时，蓝牙会关闭到会话结束。与电脑连接期间，手机找不到这台电脑',
    'Only computers on this network connect': '只有本网络内的电脑能连上',
    'A computer nearby connects through Bluetooth; files and screens switch to Wi-Fi Direct for a moment': '附近的电脑通过蓝牙连接；文件和屏幕会短暂切到 Wi-Fi Direct',
    'This computer': '这台电脑',

    // ── 关于（windows/ui-about.js）───────────────────────────────────────────
    'Use two computers as one desk': '把两台电脑当成一张办公桌',
    'TwinDesk icon': 'TwinDesk 图标',
    'Check now': '立即检查',
    'What’s New': '更新内容',
    'Don’t skip': '不再跳过',
    'Download': '下载',
    'Check for updates automatically': '自动检查更新',
    'Check automatically': '自动检查',
    'Looks for new releases on GitHub every few hours': '每隔几小时在 GitHub 上查找新版本',
    'Up to date': '已是最新',
    'Computer name': '计算机名称',
    'System': '系统',
    'Kernel': '内核',
    'Processor': '处理器',
    'Memory': '内存',
    'Architecture': '架构',
    'This app': '本应用',
    'Built for': '构建目标',
    'Thanks': '致谢',
    'Made by': '作者',
    'Portfolio': '作品集',
    'All releases': '全部版本',
    'Downloads for macOS, Windows and Linux': '适用于 macOS、Windows 和 Linux 的下载',
    'Releases': '版本发布',
    'Log files': '日志文件',
    'What TwinDesk did and any crash, to attach to a bug report': 'TwinDesk 做过什么以及崩溃信息，可附在问题报告里',
    'Open log folder': '打开日志文件夹',
    'GNU General Public License v3': 'GNU 通用公共许可证 v3',
    'Free and open source. Copyright © 2026 inukaasith': '自由开源。版权所有 © 2026 inukaasith',
    'Read': '阅读',

    // ── 多设备（windows/mesh/ui-multi.js，Mesh 模式）─────────────────────────
    'Multi-device · Mesh mode': '多设备 · Mesh 模式',
    'Several computers and phones connected at once': '多台电脑和手机同时连接',
    'Turn off': '关闭',
    'Restarting…': '正在重启…',
    'That did not move: a device goes next to another one, side by side.': '没有移动：设备只能并排放到另一台设备旁边。',
    'Now click a lit place next to another device to move it there, or another device to swap places.': '现在点一下另一台设备旁边亮起的空位即可移到那里，或点另一台设备交换位置。',
    'Click a device, then a place next to another device to move it there, or another device to swap places. Devices sit side by side, with no empty space between them.': '先点一台设备，再点另一台设备旁边的空位即可移到那里，或点另一台设备交换位置。设备总是并排放置，中间不留空位。',
    'Move here': '移到此处',
    'Empty place': '空位',
    'Not paired here': '未在此处配对',
    'Out of reach': '无法到达',
    'Mesh mode': 'Mesh 模式',
    'Use several devices at once': '同时使用多台设备',
    'On, in beta. TwinDesk restarts when you turn it on or off': '已开启，测试版。开启或关闭时 TwinDesk 会重启',
    'Layout': '布局',
    'Joining': '加入',
    'Join every device automatically': '自动加入所有设备',
    'Pair with one device and the rest connect to this one by themselves. Devices you pair with can introduce others, without a pairing code': '和一台设备配对后，其余设备会自动连上这台。已配对的设备可以介绍其他设备，不需要配对码',
    'Off: this PC neither introduces devices to each other nor accepts an introduction. Pair each device yourself': '关闭：本机既不把设备互相介绍，也不接受介绍，请逐台配对',

    // ── 光标（windows/mesh/ui-cursor.js）────────────────────────────────────
    'Move the pointer off the edge of the screen to go to the other computer.': '把指针移出屏幕边缘，就跳到另一台电脑。',
    'Reverse scrolling': '反向滚动',
    'Trackpad gestures': '触控板手势',
    'Pinch to zoom, swipe between desktops, Task View / Mission Control, back and forward — done the native way on {name}. The same on both': '捏合缩放、切换桌面、任务视图 / 调度中心、前进后退——在 {name} 上由它原生处理。两边一致',
    'Over Bluetooth': '通过蓝牙',
    'When {name} isn’t on this network and you’re connected through Bluetooth (slower). Off: nothing crosses until you’re on Wi-Fi again. The same on both': '当 {name} 不在本网络、你通过蓝牙连接时使用（较慢）。关闭后要等重新连上 Wi-Fi 才会穿越。两边一致',
    'Through': '通过方式',
    'ADB: full control. Accessibility: TwinDesk on the phone taps and types itself, over Wi-Fi, Wi-Fi Direct or Bluetooth, no developer options': 'ADB：完全控制。辅助功能：手机上的 TwinDesk 自己点按和输入，走 Wi-Fi、Wi-Fi Direct 或蓝牙，无需开发者选项',
    'Use {name}’s mouse and keyboard on {me}': '在 {me} 上使用 {name} 的鼠标和键盘',
    'Push the pointer past the edge there': '把指针推过那边的屏幕边缘',
    'Pointer speed here': '这里的指针速度',
    'Use {me}’s mouse and keyboard on {name}': '在 {name} 上使用 {me} 的鼠标和键盘',
    'Push the pointer past the edge': '把指针推过屏幕边缘',
    'Edge resistance': '边缘阻力',
    'Push a little further to cross': '再推一点即可穿过',
    'Feel': '手感',
    'Not on the same network': '不在同一网络时',
    'Right now': '当前状态',
    'Which device each edge of the screen leads to: Multi-device › Layout.': '屏幕每条边缘通向哪台设备：多设备 › 布局。',

    // ── 更新弹窗与横幅（shared/ui-updater-modal.js）─────────────────────────
    'Software Update': '软件更新',
    'A new version of TwinDesk is available!': 'TwinDesk 有新版本可用！',
    'Release Notes': '更新说明',
    'Release notes': '更新说明',
    'Skip This Version': '跳过此版本',
    'View on GitHub ↗': '在 GitHub 上查看 ↗',
    'Remind Me Later': '稍后提醒',
    'Update Now': '立即更新',
    'Download & Install': '下载并安装',
    'Software update notification': '软件更新通知',
    'Dismiss banner': '收起横幅',
    'New Version': '新版本',
    'Update': '更新',
    'No release notes provided for this version.': '此版本没有提供更新说明。',
  });

  // ── 运行时拼出来的句子：更具体的写前面（查表按加入顺序匹配）──────────────
  // 更新弹窗：标题与横幅的「TwinDesk vX 已发布」，要先于下面通用的「x is available」。
  I.pattern(/^TwinDesk (.+) is available\.$/, (m) => `TwinDesk ${m[1]} 有可用更新。`);
  I.pattern(/^TwinDesk (.+) is available$/, (m) => `TwinDesk ${m[1]} 有可用更新`);
  I.pattern(/^A new version of TwinDesk is ready to download and install \(you have (.+)\)\.$/, (m) => `TwinDesk 新版本已可下载并安装（你当前是 ${m[1]}）。`);
  I.pattern(/^A new version of TwinDesk is ready to download and install\.$/, () => 'TwinDesk 新版本已可下载并安装。');
  I.pattern(/^Current: (.+)$/, (m) => `当前：${m[1]}`);
  I.pattern(/^Released: (.+)$/, (m) => `发布于：${m[1]}`);
  I.pattern(/^\(current: (.+)\)$/, (m) => `（当前：${m[1]}）`);

  // 关于 › 更新一行（windows/ui-about.js）：版本号、检查时间、可下载的文件名都保留原样。
  I.pattern(/^Version (.+) · checked (.+)$/, (m) => `版本 ${m[1]} · 检查于 ${m[2]}`);
  I.pattern(/^Version (.+)\. No releases published yet$/, (m) => `版本 ${m[1]}。尚未发布任何版本`);
  I.pattern(/^Version (.+)$/, (m) => `版本 ${m[1]}`);
  I.pattern(/^(.+) is available \(skipped\)$/, (m) => `${m[1]} 有可用更新（已跳过）`);
  I.pattern(/^(.+) is available$/, (m) => `${m[1]} 有可用更新`);
  I.pattern(/^Couldn’t check: (.+)$/, (m) => `无法检查：${m[1]}`);
  I.pattern(/^You have (.+)\. Download (.+)$/, (m) => `你当前是 ${m[1]}。下载 ${m[2]}`);
  I.pattern(/^You have (.+)\. Opens the release page$/, (m) => `你当前是 ${m[1]}。将打开发布页面`);

  // 关于 › 这台电脑 › 处理器：「… i9-13900HX · 32 cores」，只有后半句查表。
  I.pattern(/^ · (\d+) cores$/, (m) => ` · ${m[1]} 核`);

  // 通用 › 接收的文件：路径是数据，只翻句子。
  I.pattern(/^(.+) isn’t there now: Downloads meanwhile\. Files sent to \{me\} from another computer or a phone, and what’s saved from a phone’s Files and Photos$/, (m) => `${m[1]} 现在不在了：暂时用「下载」文件夹。从另一台电脑或手机发到 {me} 的文件，以及从手机的「文件」「照片」保存下来的内容`);
  I.pattern(/^(.+) · Files sent to \{me\} from another computer or a phone, and what’s saved from a phone’s Files and Photos$/, (m) => `${m[1]} · 从另一台电脑或手机发到 {me} 的文件，以及从手机的「文件」「照片」保存下来的内容`);
  I.pattern(/^Right-click files › Send to › (.+) \(TwinDesk\)$/, (m) => `右键点文件 › 发送到 › ${m[1]}（TwinDesk）`);

  // 多设备 › 布局：坐标磁贴的 title，「名字 — 状态[: 原因]」。
  I.pattern(/^(.+) — (This PC|Not paired here|Out of reach|Connected|Not connected)(: not connected to this PC, so the pointer stops before it|: the pointer gets there only past a device it can't reach from here)?$/, (m) => {
    const state = {
      'This PC': '本机',
      'Not paired here': '未在此处配对',
      'Out of reach': '无法到达',
      'Connected': '已连接',
      'Not connected': '未连接',
    }[m[2]];
    const why = m[3] === ': not connected to this PC, so the pointer stops before it' ? '：没有连接到本机，指针会在它之前停下'
      : m[3] ? '：指针只能绕过一台从这里够不到的设备才能到达' : '';
    return `${m[1]} — ${state}${why}`;
  });

  // 多设备 › 布局：红字提示（设备名拼出来的句子，单复数决定「它／它们」）。
  I.pattern(/^(.+) (isn't|aren't) connected to this PC, so the pointer stops before (?:it|them)( and doesn't get to the devices past (?:it|them))?\. Pair (?:it|them) with this PC(, or turn on Join every device automatically)?\.$/, (m) => {
    const it = m[2] === "aren't" ? '它们' : '它';
    return `${m[1]} 未与本机连接，指针停在${it}之前`
      + (m[3] ? `，也到不了${it}后面的设备` : '')
      + `。请把${it}与本机配对` + (m[4] ? '' : '，或开启「自动加入所有设备」') + '。';
  });
})(typeof window !== 'undefined' ? window : null);
