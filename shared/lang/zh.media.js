// TwinDesk — Copyright (C) 2026 inukaasith, Erdoğan Yeşil. GPL-3.0, see LICENSE.
// 中文词条 —— zh.media。英文原串做 key，中文做值。
// 动态句子（带设备名/数字）用 I18n.pattern(/正则/, (m) => `...$1...`)，放在同一个文件里。
(function (g) {
  const I = g && g.I18n ? g.I18n : require('../i18n.js');
  I.add({
    // ── 概览（windows/mesh/ui-overview.js）────────────────────────────────────
    'Connect': '连接',
    'Location settings': '位置信息设置',
    'Connect with Wi-Fi Direct': '通过 Wi-Fi Direct 连接',
    'Connect with hotspot': '通过热点连接',
    'Hotspot name': '热点名称',
    'Password': '密码',
    'Hotspot password': '热点密码',
    'Join': '加入',
    'Back to Bluetooth': '切回蓝牙',
    'Password (saved)': '密码（已保存）',
    'Sound': '声音',
    'Mouse and keyboard': '鼠标与键盘',
    'Shared folder': '共享文件夹',
    'Connect by address': '按地址连接',
    'Can’t look for computers on this network.': '无法在这个网络上查找电脑。',
    'The firewall blocks it. Connect by address may still work.': '防火墙挡住了。按地址连接也许还能用。',
    'Fix firewall': '修复防火墙',
    'Bluetooth with phones': '蓝牙连接手机',
    'Bluetooth with computers': '蓝牙连接电脑',
    'Looking…': '查找中…',
    'Wireless debugging': '无线调试',
    'Pair': '配对',
    'Pair once': '配对一次',
    'Missing': '缺失',
    'Pairing code': '配对码',
    'Pairing address': '配对地址',
    'Address:port (optional)': '地址：端口（可选）',
    'Or type it on the phone, in TwinDesk’s notification': '或者在手机上、TwinDesk 的通知里输入',
    'Phone screen, mouse and keyboard': '手机屏幕、鼠标与键盘',
    'Found nearby': '附近找到',
    'Phones that need fixing': '需要修复的手机',
    'Turn on Developer options › Wireless debugging on the phone (same Wi-Fi), then tap Fix.': '在手机上打开「开发者选项 › 无线调试」（同一 Wi-Fi），然后点「修复」。',
    'Pair once: Wireless debugging › Pair device with pairing code on the phone, then type the code in the Pairing code row below.': '先配对一次：在手机上打开「无线调试 › 使用配对码配对设备」，然后把配对码填到下面的「配对码」里。',
    'adb is missing from this build.': '这个版本里没有 adb。',
    'Looking for the phone’s wireless debugging… If this stays, tap Fix.': '正在查找手机的无线调试…如果一直这样，点「修复」。',
    'The connection stopped. Tap Fix to try again.': '连接中断了。点「修复」重试。',
    'The other computer': '另一台电脑',
    'This computer': '本机',
    'Pick a computer below, or connect by address.': '在下面选一台电脑，或按地址连接。',
    'Take over': '接管',
    'Use': '使用',
    'Switch': '切换',
    'Wake': '唤醒',
    'Waking…': '正在唤醒…',
    'Selected': '已选中',
    'Device': '设备',
    'No devices yet': '还没有设备',
    'Nothing paired yet': '还没有配对',
    'Waiting for it to connect': '正在等待它连接',
    'Looks different now. Forget it and pair again.': '看起来不一样了。忽略它并重新配对。',
    'Looking for computers…': '正在查找电脑…',
    'Open TwinDesk on the other computer.': '在另一台电脑上打开 TwinDesk。',
    'Pair with a computer in Found nearby.': '在「附近找到」里选一台电脑配对。',
    'No network': '无网络',
    'Wi-Fi didn’t come up': 'Wi-Fi 没能连上',
    'Switch on {name}’s hotspot, then type its name and password here.': '打开 {name} 的热点，然后在这里填热点名称和密码。',
    'Asking {name} for Wi-Fi…': '正在向 {name} 请求 Wi-Fi…',
    'Starting Wi-Fi Direct for {name}…': '正在为 {name} 启动 Wi-Fi Direct…',
    'On Wi-Fi with {name}': '已与 {name} 连上 Wi-Fi',
    'Hotspot': '热点',
    'Temporary Hotspot': '临时热点',
    'Temporary Wi-Fi Direct': '临时 Wi-Fi Direct',
    'Disconnected.': '已断开。',
    'In use by another device.': '正被其他设备使用。',
    'Connected · Cursor sharing is off for it': '已连接 · 此设备的光标共享已关闭',
    'Even motion, about one frame later. The same on {name}': '画面更均匀，大约晚一帧。在 {name} 上同样如此',
    'Each frame the moment it arrives. The same on {name}': '每一帧一到就显示。在 {name} 上同样如此',

    // ── 共享屏幕（windows/mesh/ui-share.js）─────────────────────────────────
    '{me}’s screen on {name}': '{me} 的屏幕显示在 {name} 上',
    'See {me} in a window on the other computer.': '在另一台电脑的窗口里查看 {me}。',
    'Mirror': '镜像',
    'Extend': '扩展',
    'Same as the other screen': '与其他屏幕相同',
    '1080p (1920 × 1080), fastest': '1080p（1920 × 1080），最快',
    '1440p (2560 × 1440), sharper': '1440p（2560 × 1440），更清晰',
    'Full size': '完整分辨率',
    'Low, 10 Mbps': '低，10 Mbps',
    'Medium, 20 Mbps': '中，20 Mbps',
    'High, 30 Mbps': '高，30 Mbps',
    'Best, 50 Mbps (wired)': '最佳，50 Mbps（有线）',
    'Include sound': '包含声音',
    'Receive input': '接收输入',
    'Remote start': '远程启动',
    'Let the other computer start and switch this screen': '让另一台电脑启动并切换这块屏幕',
    'Display': '显示器',
    'Displays': '显示器',
    'Mode': '模式',
    'Size': '尺寸',
    'Picture': '画面',
    'Round trip': '往返',
    'Playback': '播放',
    'Sound and control': '声音与控制',
    'Remote': '远程',
    'Virtual display driver not installed. Install it to use Extend.': '没有安装虚拟显示器驱动。安装后才能用「扩展」。',
    'Installed. Adds the extra screen for Extend.': '已安装。为「扩展」增加一块额外屏幕。',
    'Adds an extra screen for Extend. Installs a display driver and asks for administrator rights once.': '为「扩展」增加一块额外屏幕。会安装显示驱动，并请求一次管理员权限。',
    'Removing…': '正在移除…',
    'Starting the extra screen…': '正在启动额外屏幕…',
    'Opening the screen window there starts sharing; Extend and Mirror can be switched from there.': '在那边打开屏幕窗口就会开始共享；「扩展」和「镜像」也可以从那边切换。',

    // ── 接收屏幕（windows/ui-receive.js）────────────────────────────────────
    '{Name}’s screen on {me}': '{Name} 的屏幕显示在 {me} 上',
    'See the other computer’s screen in a window here.': '在这里的窗口里查看另一台电脑的屏幕。',
    'Screen window': '屏幕窗口',
    '{Name} shares': '{Name} 共享',
    'Play sound': '播放声音',
    'Frame generation': '帧生成',
    'Fills in late or dropped frames, and adds in-between frames when this screen is faster than the stream': '补齐迟到或丢失的帧，并在本机屏幕比视频流更快时补插中间帧',
    'Full screen': '全屏',
    'Live': '实时',
    'Live, view only': '实时，仅观看',
    'Paused, nobody watching': '已暂停，无人在看',
    'Freezes': '卡顿',
    'Connect to choose from here': '连上后才能在这里选择',
    'Update TwinDesk on the other computer to choose from here': '把另一台电脑上的 TwinDesk 更新后才能在这里选择',
    'The other computer doesn’t allow choosing from here': '另一台电脑不允许从这里选择',
    'An extra screen for it, shown here': '它的额外屏幕，显示在这里',
    'Its main screen, shown here': '它的主屏幕，显示在这里',
    'Pick Mirror or Extend, or just press Open': '选「镜像」或「扩展」，或直接点「打开」',

    // ── 照片（shared/ui-media.js）───────────────────────────────────────────
    'Select': '选择',
    'Video': '视频',
    'No photos or videos': '没有照片或视频',

    // ── 正在播放 / 手机声音（shared/ui-nowplaying.js）─────────────────────────
    'Media controls on the Phone page': '手机页面上的媒体控制',
    'Needs the full TwinDesk app on the phone, with its notification access on': '需要手机上装完整的 TwinDesk，并开启通知使用权',
    'What plays on a connected phone, with Play, Pause, Next and Previous, on the Phone page while it plays': '显示已连接手机正在播放的内容，播放时在手机页面提供播放、暂停、下一首和上一首',
    'Play phone sound here (Bluetooth)': '在这里播放手机声音（蓝牙）',
    'The phone': '手机',
    'Paired with this computer over Bluetooth': '已通过蓝牙与本机配对',
    'This computer can’t take a phone’s sound over Bluetooth (macOS has no Bluetooth speaker mode)': '本机无法通过蓝牙接收手机声音（macOS 没有蓝牙音箱模式）',
    'This computer as {name}’s Bluetooth speaker: its music, videos and every other sound play here. Pair them in Bluetooth settings first': '把本机当作 {name} 的蓝牙音箱：它的音乐、视频和其他所有声音都在这里播放。请先在蓝牙设置里完成配对',
    'Needs the full TwinDesk app on {name}, with its notification access on': '需要 {name} 上装完整的 TwinDesk，并开启通知使用权',
    'What plays on {name}, with Play, Pause, Next and Previous, on the Phone page while it plays': '显示 {name} 正在播放的内容，播放时在手机页面提供播放、暂停、下一首和上一首',
    'Previous': '上一首',
    'Play': '播放',
    'Pause': '暂停',
    'Next track': '下一首',

    // ── 光标页的屏幕示意（shared/kvm-map-ui.js）───────────────────────────────
    'Identify': '识别',
    'Show each monitor’s number on it, on both computers': '在每台电脑的每块显示器上显示它的编号',
  });

  // ── 概览：状态行、设备行、连接方式（名字/地址拼出来的句子，更具体的写前面）──────
  I.pattern(/^Connected · Cursor sharing is off for it$/, () => '已连接 · 此设备的光标共享已关闭');
  I.pattern(/^(\d+) ms · Cursor sharing is off for it$/, (m) => `${m[1]} 毫秒 · 此设备的光标共享已关闭`);
  I.pattern(/^(\d+) ms · linked to (\d+)$/, (m) => `${m[1]} 毫秒 · 直连 ${m[2]} 台设备`);
  I.pattern(/^Connected · linked to (\d+)$/, (m) => `已连接 · 直连 ${m[1]} 台设备`);
  I.pattern(/^(\d+) ms · (.+)$/, (m) => `${m[1]} 毫秒 · ${I.T(m[2])}`);
  I.pattern(/^(\d+) ms$/, (m) => `${m[1]} 毫秒`);
  I.pattern(/^(.+) · wants to connect$/, (m) => `${m[1]} · 请求连接`);
  I.pattern(/^(.+) · Cursor sharing is off for it$/, (m) => `${m[1]} · 此设备的光标共享已关闭`);
  I.pattern(/^Via (.+) · not linked to this PC$/, (m) => `经 ${m[1]} · 未与本机直连`);
  I.pattern(/^You’re using (.+)$/, (m) => `你正在使用 ${m[1]}`);
  I.pattern(/^Open TwinDesk on (.+)\.$/, (m) => `请在 ${m[1]} 上打开 TwinDesk。`);
  I.pattern(/^This (Mac|PC|Linux|Phone) looks different now\. Forget it and pair again\.$/, (m) => `这台${m[1] === 'Phone' ? '手机' : m[1]}看起来不一样了。忽略它并重新配对。`);
  I.pattern(/^Waking (.+)…$/, (m) => `正在唤醒 ${m[1]}…`);
  I.pattern(/^Last seen (.+)$/, (m) => `上次出现：${m[1]}`);
  I.pattern(/^Looking for TwinDesk at (.+)…$/, (m) => `正在 ${m[1]} 上查找 TwinDesk…`);
  I.pattern(/^Joining (.+)…$/, (m) => `正在加入 ${m[1]}…`);
  I.pattern(/^(.+)\. Connect by address still works\.$/, (m) => `${m[1]}。按地址连接仍然可用。`);

  // ── 共享/接收屏幕：详情卡里拼出来的状态与数值 ────────────────────────────
  I.pattern(/^On ([^ ]+): (.+)$/, (m) => `在 ${m[1]} 上：${m[2]}`);
  // 摄像头页的这句要排在下面只翻「关：」前缀的那条前面，否则只翻一半。
  I.pattern(/^Off: the picture stays in TwinDesk\. On: it’s also “(.+)”, a camera other apps can pick$/, (m) => `关：画面只留在 TwinDesk 里。开：它还会是「${m[1]}」，其他应用可以选用`);
  I.pattern(/^Off: (.+)$/, (m) => `关：${m[1]}`);
  I.pattern(/^Starting the extra screen…: (.+)$/, (m) => `正在启动额外屏幕…：${m[1]}`);
  I.pattern(/^Waiting for (.+): (.+)$/, (m) => `正在等待 ${m[1]}：${m[2]}`);
  I.pattern(/^Ready, starts when (.+) opens it: (.+)$/, (m) => `就绪，${m[1]} 打开后开始：${m[2]}`);
  I.pattern(/^Connecting…: (.+)$/, (m) => `正在连接…：${m[1]}`);
  I.pattern(/^Ready, starts when (.+) opens it$/, (m) => `就绪，${m[1]} 打开后开始`);
  I.pattern(/^TwinDesk virtual display, (\d+) × (\d+)$/, (m) => `TwinDesk 虚拟显示器，${m[1]} × ${m[2]}`);
  I.pattern(/^(.+), (\d+) × (\d+)$/, (m) => `${m[1]}，${m[2]} × ${m[3]}`);
  I.pattern(/^(\d+) × (\d+), (\d+) fps$/, (m) => `${m[1]} × ${m[2]}，${m[3]} fps`);
  I.pattern(/^([\d.]+) Mbps sent, network allows ([\d.]+)$/, (m) => `已发送 ${m[1]} Mbps，网络允许 ${m[2]}`);
  I.pattern(/^([\d.]+) Mbps sent$/, (m) => `已发送 ${m[1]} Mbps`);
  I.pattern(/^([\d.]+) Mbps received$/, (m) => `已接收 ${m[1]} Mbps`);
  I.pattern(/^(.+) \(main\)\n([\s\S]+)$/, (m) => `${m[1]}（主屏）\n${m[2]}`);
  I.pattern(/^Receive input from (.+)$/, (m) => `接收来自 ${m[1]} 的输入`);
  I.pattern(/^Let (.+) start and switch this screen$/, (m) => `让 ${m[1]} 启动并切换这块屏幕`);
  I.pattern(/^Showing (.+)$/, (m) => `正在显示 ${m[1]}`);
  I.pattern(/^Sharing on (.+)\. Open to watch\.$/, (m) => `正在 ${m[1]} 上共享。点「打开」即可观看。`);
  I.pattern(/^Open starts sharing on (.+)$/, (m) => `点「打开」即开始在 ${m[1]} 上共享`);
  I.pattern(/^Turn on sharing on (.+)$/, (m) => `请在 ${m[1]} 上开启共享`);

  // ── 照片：保存与计数 ────────────────────────────────────────────────────
  I.pattern(/^Saving (\d+) to (.+)’s (.+)…$/, (m) => `正在把 ${m[1]} 项保存到 ${m[2]} 的 ${m[3]}…`);
  I.pattern(/^Save (\d+) to (.+)$/, (m) => `把 ${m[1]} 项保存到 ${m[2]}`);
  I.pattern(/^Save to (.+)$/, (m) => `保存到 ${m[1]}`);
  I.pattern(/^(\d+)(\+?) (items|photos|videos|screenshots)$/, (m) => {
    const unit = { items: '项', photos: '张照片', videos: '个视频', screenshots: '张截图' }[m[3]];
    return `${m[1]}${m[2]} ${unit}`;
  });
  I.pattern(/^No (photos|videos|screenshots)$/, (m) => `没有${{ photos: '照片', videos: '视频', screenshots: '截图' }[m[1]]}`);

  // ── 光标页的屏幕示意：提示句与左右上下关系 ────────────────────────────────
  I.pattern(/^Drag (.+) to where it is on your desk\. The pointer crosses only where the screens touch \(highlighted\)\.$/, (m) => `把 ${m[1]} 拖到它在桌面上的实际位置。指针只在屏幕相接处（高亮部分）穿越。`);
  I.pattern(/^Drag (.+) to the side it is on\. Its screens show here once it’s connected \(with an up-to-date TwinDesk\)\.$/, (m) => `把 ${m[1]} 拖到它所在的一侧。连上之后（且 TwinDesk 是最新版）这里就会显示它的屏幕。`);
  I.pattern(/^(.+) is to the left of (.+)$/, (m) => `${m[1]} 位于${m[2]}的左侧`);
  I.pattern(/^(.+) is to the right of (.+)$/, (m) => `${m[1]} 位于${m[2]}的右侧`);
  I.pattern(/^(.+) is above (.+)$/, (m) => `${m[1]} 位于${m[2]}的上方`);
  I.pattern(/^(.+) is below (.+)$/, (m) => `${m[1]} 位于${m[2]}的下方`);

  // ── 摄像头（shared/ui-camera.js）──────────────────────────────────────────
  I.add({
    'Open it in a window': '在独立窗口中打开',
    'Front': '前置',
    'Rotate': '旋转',
    'A quarter turn clockwise: here, in its window and in the virtual camera': '顺时针转四分之一圈：这里、它的窗口和虚拟摄像头都会跟着转',
    'Window': '窗口',
    'Window ✓': '窗口 ✓',
    'Start': '开始',
    'Stop': '停止',
    '{name}’s camera': '{name} 的摄像头',
    'Virtual camera': '虚拟摄像头',
    'Send to': '发送到',
    'The camera other apps pick': '其他应用会选用的摄像头',
    'Share this camera': '共享这个摄像头',
    'Let {name} see this camera': '让 {name} 看到这个摄像头',
    'The default camera': '默认摄像头',
    'Which of {me}’s cameras it shows': '显示 {me} 的哪个摄像头',
    '{name} is viewing it now': '{name} 正在查看',
    'The camera is on while it’s running there': '在那里运行期间摄像头一直开着',
    '{me}’s camera': '{me} 的摄像头',
    'Press Start to run {name}’s camera here': '点「开始」在这里运行 {name} 的摄像头',
    'Turn on “Let {me} see this camera” on {name}': '在 {name} 上打开「让 {me} 看到这个摄像头」',
    'Turn on “Let {me} see this camera” on {name} first': '请先在 {name} 上打开「让 {me} 看到这个摄像头」',
    '{name} stopped its camera': '{name} 关闭了摄像头',
    'Starting the phone’s camera…': '正在启动手机摄像头…',
    'Needs wireless debugging: set it up on the Phone page': '需要无线调试：请在「手机」页面设置',
    'Through Bluetooth a camera can’t go across: connect over Wi-Fi or a cable': '蓝牙传不了摄像头画面：请改用 Wi-Fi 或数据线连接',
    '{name} can run it there. A popup says so here when it does': '{name} 可以在那里运行它。运行时会在这里弹出提示',
    'Off: nobody sees it': '关：没人能看到',
    'Off: turn on Camera at the top': '关：请在上方打开「摄像头」',
    'Asking {name} for its camera…': '正在向 {name} 请求摄像头…',
    'Off: the picture stays in TwinDesk. On: it’s also “TwinDesk Camera”, a camera other apps can pick': '关：画面只留在 TwinDesk 里。开：它还会是「TwinDesk Camera」，其他应用可以选用',
    'unknown': '未知',
  });

  // ── 远程（shared/ui-remote.js）───────────────────────────────────────────
  I.add({
    'On {name}': '在 {name} 上',
    'Open TwinDesk › Remote there, then Touchpad and keyboard or Gamepad. Its speed, tap to click and the gamepad’s keys are set there': '在那里打开 TwinDesk › 远程，再选「触控板与键盘」或「手柄」。速度、轻点即点击和手柄按键都在那里设置',
    '{name} as a remote': '{name} 当遥控器',
    'Real gamepad': '真实手柄',
    'Gamepad': '手柄',
    'Not on this computer': '这台电脑不支持',
    'On: ready when {name} is connected': '开：{name} 连上后即可使用',
    'In use: {name} is moving the pointer or typing here': '使用中：{name} 正在这里移动指针或输入',
    '{name}’s Remote page is open and ready': '{name} 的「远程」页面已打开，随时可用',
    'Ready: open the Remote page on {name}': '就绪：请在 {name} 上打开「远程」页面',
    'Off: {name}’s Remote page can’t move or type here': '关：{name} 的「远程」页面不能在这里移动指针或输入',
    'Off: the gamepad page’s sticks and buttons press keys (WASD, the mouse), as set on {name}': '关：手柄页面的摇杆和按键会按下键（WASD、鼠标），映射在 {name} 上设置',
  });

  // ── ReZume（shared/ui-rezume.js）─────────────────────────────────────────
  I.add({
    'Continue from {name}': '从 {name} 继续',
    'Page': '页面',
    'Document': '文档',
    'Offered to {name}': '已向 {name} 提供',
    'Send to {name}': '发送到 {name}',
    'Opens there now what was last in front here': '把这里刚才最前面的内容立刻在那边打开',
    'Web pages': '网页',
    'The tab in front in Chrome, Edge, Firefox, Safari, Brave, Vivaldi, Opera or Arc': 'Chrome、Edge、Firefox、Safari、Brave、Vivaldi、Opera 或 Arc 里最前面的标签页',
    'A YouTube video playing here opens there at the same second': '这里正在播放的 YouTube 视频会在同一秒在那边打开',
    'The file open in front (Word, Pages, Preview, a text editor…): it comes across and opens here': '这里最前面的已打开文件（Word、Pages、预览、文本编辑器…）：会传送过来并在这里打开',
    'Phone apps': '手机应用',
    'The app in front on the phone': '手机上最前面的应用',
    'Mirror apps': '镜像应用',
    'A phone app opens here in a window of its own, as it was (wireless debugging)': '手机应用会以原来的样子在独立窗口中打开（无线调试）',
    'What goes': '传递什么',
    'Offer what’s in use on {me}': '提供 {me} 上正在使用的内容',
    '{name} can go on with it': '{name} 可以接着进行',
    'Take {name}’s': '接收 {name} 的',
    'What’s in use there shows here': '那边正在使用的内容会显示在这里',
    'Open what’s sent at once': '收到就立刻打开',
    'Send to on {name} (its tray, the share sheet’s Open on computer) opens it here without asking': '在 {name} 上点「发送到」（托盘里、分享面板的「在电脑上打开」）会直接在这里打开，不再询问',
    'Which ways': '传递方式',
    'A quiet one, replaced by the next': '静默提示，会被下一条替换',
    'Taskbar or dock': '任务栏或 Dock',
    'Taskbar': '任务栏',
    'A button with the app’s icon: click it to go on': '带应用图标的按钮：点一下就接着进行',
    'Tray': '托盘',
    'Continue and Send to in its menu': '菜单里有「继续」和「发送到」',
    'Apps tab and Phone page': '「应用」标签页和「手机」页面',
    'The card above, there too': '上面那张卡片，这两处也会显示',
    'Where {name}’s shows': '{name} 的内容显示在哪里',
    'The file open in front here goes to the phone and opens there; the phone has none to send': '这里最前面的已打开文件会发到手机并在那里打开；手机那边没有可发送的文件',
    'The file open in front (Word, Pages, Preview, a text editor…): it comes across and opens on the other side': '这里最前面的已打开文件（Word、Pages、预览、文本编辑器…）：会传送过去并在那边打开',
    'Needs wireless debugging (Phone page): until then phone apps aren’t offered here': '需要无线调试（「手机」页面）：在那之前这里不会提供手机应用',
    'A phone app opens here in a window of its own, as it was': '手机应用会以原来的样子在独立窗口中打开',
    'Off here': '这里已关闭',
    'No ReZume there yet: update TwinDesk on {name}': '那边还没有 ReZume：请更新 {name} 上的 TwinDesk',
    'Off on {name}: turn it on there too': '{name} 上已关闭：请在那里也打开',
    'Ready: the phone’s apps through wireless debugging (its pages need TwinDesk’s Accessibility there)': '就绪：手机应用走无线调试（那些页面需要在那台手机上开启 TwinDesk 的辅助功能）',
    'Ready for pages and documents. For what’s in use on the phone, turn on TwinDesk’s Accessibility there, or wireless debugging': '网页和文档已就绪。要用手机上正在使用的内容，请在那里打开 TwinDesk 的辅助功能，或无线调试',
    'Ready: something to go on with, above': '就绪：上面有可以接着进行的内容',
    'Nothing in front here to send yet': '这里还没有可发送的内容',
  });

  // ── 摄像头 / 远程 / ReZume：运行时拼出来的句子 ──────────────────────────────
  I.pattern(/^It stopped: (.+)$/, (m) => `已停止：${I.T(m[1])}`);
  I.pattern(/^It didn’t start: (.+)$/, (m) => `没能启动：${I.T(m[1])}`);
  I.pattern(/^Turned (\d+)°\. Click the picture or Window for a window of its own$/, (m) => `已转 ${m[1]}°。点画面或「窗口」可以打开独立的窗口`);
  I.pattern(/^Sharing now: in Zoom, Teams, the browser…, choose only “(.+)” as the camera$/, (m) => `正在共享：在 Zoom、Teams、浏览器等应用里，摄像头只选「${m[1]}」`);
  I.pattern(/^Ready: the camera running here goes to “(.+)”\. Choose only that one in the app you call from$/, (m) => `就绪：这里运行的摄像头会送到「${m[1]}」。在发起调用的应用里只选它`);
  I.pattern(/^Apps here see it as “(.+)”: pick that one, not \{me\}’s own camera\.( The picture goes straight between the two computers\.)?$/, (m) => `这里的应用会把它当作「${m[1]}」：请选它，别选 {me} 自己的摄像头。${m[2] ? '画面直接在两台电脑之间传输。' : ''}`);
  I.pattern(/^Turn on Virtual camera to use it as a real camera in other apps \(Zoom, Teams, the browser…\)\.( The picture goes straight between the two computers\.)?$/, (m) => `打开虚拟摄像头，就能把它当真正的摄像头用在其他应用里（Zoom、Teams、浏览器…）。${m[1] ? '画面直接在两台电脑之间传输。' : ''}`);
  I.pattern(/^On: \{name\}’s gamepad page is a game controller here(?: \((.+)\))?$/, (m) => `开：{name} 的手柄页面在这里就是一个游戏手柄${m[1] ? `（${m[1]}）` : ''}`);
  I.pattern(/^Page · (.+) · (.+)$/, (m) => `页面 · ${m[1]} · ${m[2]}`);
  I.pattern(/^Page · (.+)$/, (m) => `页面 · ${m[1]}`);
  I.pattern(/^Document · (.+)$/, (m) => `文档 · ${m[1]}`);
  I.pattern(/^App · (.+), in a window here$/, (m) => `应用 · ${m[1]}，在独立窗口中打开`);
  I.pattern(/^App · (.+)$/, (m) => `应用 · ${m[1]}`);
  I.pattern(/^Opens there now: (.+)$/, (m) => `立刻在那边打开：${m[1]}`);
  I.pattern(/^Getting (.+)…$/, (m) => `正在获取 ${m[1]}…`);
})(typeof window !== 'undefined' ? window : null);
