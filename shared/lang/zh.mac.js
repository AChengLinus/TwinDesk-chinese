// TwinDesk — Copyright (C) 2026 inukaasith, Erdoğan Yeşil. GPL-3.0, see LICENSE.
// 词条：macOS 版界面 —— mac/control.js 的窗口骨架、mac/ui-*.js 的各页、mac/main.js 的菜单栏与弹窗、
// ipc.js 的对话框，以及 mac/ 下后台服务（连接、配对、手机、虚拟摄像头）里会显示给用户的提示。
// 浏览器里从 mac/control.html 加载，主进程里由 shared/i18n.js 跟着其它 zh.*.js 一起 require。
(function (g) {
  const I = g && g.I18n ? g.I18n : require('../i18n.js');

  I.add({
    // ── 窗口骨架（mac/control.js）────────────────────────────────────────────
    'This Mac': '这台 Mac',
    'F13–F24 on its own (a PC keyboard’s Scroll Lock is F14), or a combination with ⌃, ⌥ or ⌘':
      'F13–F24 可以单按（PC 键盘的 Scroll Lock 就是 F14），也可以跟 ⌃、⌥ 或 ⌘ 组合',
    'macOS is blocking the mouse and keyboard. Allow Accessibility and Input Monitoring in General, then restart.':
      'macOS 把鼠标和键盘拦住了。在「通用」里允许辅助功能和输入监控，然后重启。',

    // ── 总览（mac/ui-overview.js）───────────────────────────────────────────
    'Allow Local Network for TwinDesk, or connect by address.': '给 TwinDesk 打开「本地网络」权限，或者按地址连接。',
    'Its address': '它的地址',
    'Pair with a computer in Nearby.': '在「附近」里跟一台电脑配对。',
    'Pick a computer above, or connect by address.': '从上面选一台电脑，或者按地址连接。',
    'TwinDesk needs it to share this Mac with the other computer. After an update, allow it again.':
      'TwinDesk 要靠它把这台 Mac 分享给对方。更新之后要再允许一次。',
    'You’re using {name}': '你正在用 {name}',
    '{name} is using {me}': '{name} 正在用 {me}',

    // ── 通用（mac/ui-general.js）───────────────────────────────────────────
    'Allow TwinDesk in System Settings › Privacy & Security › Bluetooth':
      '在「系统设置 › 隐私与安全性 › 蓝牙」里允许 TwinDesk',
    'Allowed by Accessibility': '已由辅助功能允许',
    'Background helper': '后台助手',
    'Bluetooth is off': '蓝牙是关的',
    'Full Disk Access': '完全磁盘访问权限',
    'Its recent items, while Clipboard is on': '最近几条，剪贴板开着时',
    'Keep the display awake': '让显示器保持唤醒',
    'Local Network': '本地网络',
    'Most used apps': '最常用的应用',
    'Not allowed': '未允许',
    'Now playing': '正在播放',
    'On its tile and Overview. TwinDesk on the phone reads it once wireless debugging is set up':
      '显示在它的磁贴和「总览」里。手机上的 TwinDesk 配好无线调试后会读它',
    'Optional: to share any folder with the other computer': '可选：用来跟对方共享任意文件夹',
    'PCs nearby connect over Bluetooth. Files and screens move to a direct Wi-Fi link for a while':
      '附近的 PC 用蓝牙连过来。文件和屏幕会临时改走直连 Wi-Fi',
    'Phones nearby connect over Bluetooth. Files and screens move to a direct Wi-Fi link for a while':
      '附近的手机用蓝牙连过来。文件和屏幕会临时改走直连 Wi-Fi',
    'Restart to apply it': '重启后生效',
    'Share › TwinDesk sends files to the other computer': '共享 › TwinDesk 把文件发给对方',
    'Show the phone’s wallpaper': '显示手机的壁纸',
    'So the other computer can control this one': '让对方能控制这台',
    'The newest few, with Copy for one-time codes': '最近几条，一次性验证码可以点「复制」',
    'The phone’s most used apps this week': '手机这一周最常用的应用',
    'This Mac can’t advertise over Bluetooth': '这台 Mac 没法用蓝牙广播自己',
    'TwinDesk in the Share menu': '展开菜单里的 TwinDesk',
    'Wake for network access. Asks for your password to change it': '网络访问唤醒。改动要输入密码',
    'What plays on the phone, with its controls': '手机上在放什么，连带控制按钮',
    'While connected': '连接期间',
    'Wi-Fi, Bluetooth, torch, Do not disturb and more, with volume and ringer':
      'Wi-Fi、蓝牙、手电筒、免打扰等，还有音量和铃声',
    'A drop zone that sends files to the device': '丢个文件进去就发给对方的投放区',
    'Allowed': '已允许',
    'Every TwinDesk window and the menu bar': '所有 TwinDesk 窗口和菜单栏',

    // ── 显示 / 第二块屏幕（mac/ui-display.js、mac/ui-display-pc.js）──────────
    'Use {me} as a second screen for {name}.': '把 {me} 当成 {name} 的第二块屏幕。',
    'Let {name} start and switch this screen': '允许 {name} 启动和切换这块屏幕',
    'Open it on {name} — no need to touch {me}': '在 {name} 上打开就行 —— 不用碰 {me}',
    'Let {name} use {me} in its window': '允许 {name} 在它的窗口里用 {me}',
    'Shows the TwinDesk virtual display': '显示 TwinDesk 虚拟显示器',
    'Shows {me}’s main screen': '显示 {me} 的主屏幕',
    'No display to share': '没有可分享的显示器',
    'Share sound with the screen': '声音跟着屏幕一起发送',
    'Virtual display': '虚拟显示器',
    'Something went wrong in the background. Restart TwinDesk.': '后台出了点问题。重启 TwinDesk。',
    'Encode time': '编码耗时',
    'Control {name} from its window': '在它的窗口里控制 {name}',
    '{name} shares': '{name} 共享的画面',
    'Pick Mirror or Extend — or just press Open': '选镜像或扩展 —— 或者直接点「打开」',
    'See its screen in a window here.': '在这里的窗口看它的屏幕。',
    'Stopped on the other computer': '对方已经停了',
    'Waiting for {name}…': '正在等 {name}…',
    'Ready — starts when {name} opens it': '就绪 —— {name} 一打开就开始',
    'Retrying…': '正在重试…',
    'Closed': '已关闭',

    // ── 应用（mac/ui-apps.js）──────────────────────────────────────────────
    'Needs Accessibility (General)': '需要辅助功能权限（在「通用」里）',
    'No apps yet. Press Refresh.': '还没有应用。点「刷新」。',
    'Screen sharing turns on while an app is open': '有应用开着时，屏幕共享也会开着',
    'Share apps': '共享应用',
    'Show apps here': '在这里显示应用',
    '{Name}’s apps': '{Name} 的应用',

    // ── 声音（mac/ui-audio.js）─────────────────────────────────────────────
    'Mute while sending': '发送时静音',
    'Play sound here': '在这台放声音',
    'Send sound': '发送声音',

    // ── 剪贴板（mac/ui-clipboard.js）────────────────────────────────────────
    'Pictures you copy and screenshots taken with ⌃⇧⌘4, up to 10 MB, both ways':
      '复制的图片和 ⌃⇧⌘4 截的图，最大 10 MB，双向',
    'Pictures you copy and screenshots taken with ⌃⇧⌘4, up to 10 MB, both ways. Not over Bluetooth':
      '复制的图片和 ⌃⇧⌘4 截的图，最大 10 MB，双向。走蓝牙时不传',

    // ── 光标与键盘（mac/ui-cursor.js、mac/ui-keyboard.js）────────────────────
    'Pinch to zoom, swipe between desktops, Mission Control / Task View, back and forward — done the native way on {name}. The same on both':
      '双指缩放、切换桌面、调度中心 / 任务视图、前进后退 —— 都在 {name} 上按它的原生方式做。两边一样',
    'Reverse scrolling from {name}': '{name} 过来的滚动反过来',
    'Pointer speed on {name}': '{name} 上的指针速度',
    'Double-tap the hotkey to take everything back': '连按两下热键就全部收回来',
    'Let it control this computer': '让它控制这台电脑',
    'Use here, control there': '在这边用，控那边',
    'Ctrl works as ⌘': 'Ctrl 当作 ⌘',
    'So Ctrl+C copies here': '这样 Ctrl+C 在这里也能复制',
    '⌘ works as Ctrl, so ⌘C copies there': '⌘ 当作 Ctrl，这样 ⌘C 在那边也能复制',

    // ── 文件与挂载（mac/ui-files.js、mac/ui-mount.js）───────────────────────
    'Accept files': '接收文件',
    'Arriving files': '正在传的文件',
    'Connect the shared folder': '连接共享文件夹',
    'In Finder’s sidebar': '在访达侧边栏',
    'Into the app in front (a chat, a mail…), or the Finder folder in front, else the Desktop':
      '放进最前面那个应用（聊天、邮件…），或者最前面的访达文件夹，都没有就放桌面',
    'Save to': '保存到',
    'Select files in Finder first': '先在访达里选中文件',
    'Accept files from {name}': '接收 {name} 发来的文件',
    'Mount works through ADB, and Developer options are off on the phone. Switch on Developer options and Wireless debugging (Connection), or plug the phone in with USB debugging on. Phone Files works without it.':
      '挂载要走 ADB，而手机的开发者选项是关的。打开开发者选项和无线调试（在「连接」页），或者插上数据线并开 USB 调试。手机文件不需要这些也能用。',
    'Mount works through ADB, and wireless debugging is off on the phone. Switch it on (Connection), or plug the phone in with USB debugging on. Phone Files works without it.':
      '挂载要走 ADB，而手机的无线调试是关的。去「连接」页打开它，或者插上数据线并开 USB 调试。手机文件不需要这些也能用。',
    'Phone in Finder': '访达里的手机',
    'Show the phone in Finder': '在访达里显示手机',
    'The phone’s storage as a drive in Finder, through ADB: the cable (USB debugging) or wireless debugging.':
      '把手机的存储当成访达里的一个磁盘，走 ADB：用数据线（USB 调试）或无线调试。',
    'over wireless debugging': '走无线调试',
    'through the cable': '走数据线',

    // ── 通知（mac/ui-notifs.js）────────────────────────────────────────────
    'Allow Full Disk Access': '允许完全磁盘访问权限',
    'Apps show up here after their first notification': '应用发过第一条通知之后就会出现在这里',
    'Click +, or drag TwinDesk into the list': '点 +，或者把 TwinDesk 拖进列表',
    'Needs Full Disk Access': '需要完全磁盘访问权限',
    'Send notifications': '发送通知',
    'Show notifications here': '在这里显示通知',

    // ── 手机与首次设置（mac/ui-phone.js、mac/ui-setup.js、mac/ui-start.js）──
    'In WhatsApp, Instagram and Telegram, in a phone window or with this keyboard on the phone. ⇧Return: a new line':
      '在 WhatsApp、Instagram、Telegram 里，用手机窗口或者拿这台键盘在手机上打字。⇧Return：换行',
    'Restart TwinDesk': '重启 TwinDesk',
    'So the other computer can control this Mac': '让对方能控制这台 Mac',
    'Couldn’t move to Wi-Fi': '没能转到 Wi-Fi',
    'Moving to Wi-Fi with {name}…': '正在跟 {name} 转到 Wi-Fi…',
    'Starting Wi-Fi for {name}…': '正在为 {name} 开 Wi-Fi…',
    'Switch on {name}’s hotspot': '打开 {name} 的热点',

    // ── 端子（mac/ui-terminal.js）──────────────────────────────────────────
    'Allow shells here': '允许在这里开 shell',
    'In Terminal': '在「终端」里',
    'Remote Login': '远程登录',
    'Open shells on {name} from {me}': '从 {me} 在 {name} 上开 shell',
    'Let {name} open shells on {me}': '允许 {name} 在 {me} 上开 shell',

    // ── 关于（mac/ui-about.js）─────────────────────────────────────────────
    'Opens the release page': '打开发布页',

    // ── 菜单栏、对话框与弹窗（mac/main.js、mac/ipc.js）─────────────────────
    'Add to Dock': '加入 Dock',
    'Share This Folder': '共享这个文件夹',
    'Use This Folder': '用这个文件夹',
    'That’s this Mac.': '这就是这台 Mac。',
    'Type an address like 192.168.1.20.': '填一个像 192.168.1.20 这样的地址。',
    'Remote is off on this computer: turn it on in TwinDesk’s Remote page there':
      '这台电脑的「远程」是关的：去它那边 TwinDesk 的「远程」页打开',
    'Connect to': '连接到',
    'Take Over': '接管',
    'Disconnect Phone': '断开手机',
    'Real gamepad isn’t on the Mac. To use {name} as a gamepad, turn on Remote › As a Bluetooth gamepad on {name}, then pair it with this Mac in System Settings › Bluetooth':
      '这台 Mac 上没接真手柄。想把 {name} 当手柄用，先在 {name} 上打开「远程 › 作为蓝牙手柄」，再到「系统设置 › 蓝牙」里把它跟这台 Mac 配对',
    'Download TwinDesk': '下载 TwinDesk',
    'Opening it when the other computer connects…': '对方一连上就打开…',
    'Disconnecting…': '正在断开…',
    'This Mac doesn’t let you open its apps (its Apps tab)': '这台 Mac 不让你打开它的应用（「应用」页）',
    'MacShare Apps': 'MacShare 应用',
    'PC app': 'PC 应用',
    'Built-in display': '内置显示器',

    // ── 连接、配对与后台提示（link.js、pairing.js、kvm.js 等）────────────────
    'Another device took over': '另一台设备接管了',
    'In use by another device': '另一台设备正在用',
    'No answer': '没有回应',
    'Pairing timed out.': '配对超时。',
    'Pairing was cancelled on the other computer.': '对方取消了配对。',
    'Pairing was refused.': '配对被拒绝了。',
    'Stopped answering': '不再回应',
    'That computer is busy with another device.': '那台电脑正跟别的设备忙着。',
    'That computer isn’t a Mac. Pair from TwinDesk on it instead.': '那台电脑不是 Mac。请在它上面用 TwinDesk 配对。',
    'That computer runs a different TwinDesk version. Update both.': '那台电脑上的 TwinDesk 版本不一样。两边都更新一下。',
    'The connection closed.': '连接断开了。',
    'The other computer sent a bad pairing message.': '对方发来的配对消息不对。',
    'Another pairing is in progress': '另一个配对正在进行',
    'Not paired with this Mac': '没有跟这台 Mac 配对',
    'Pairing already started': '配对已经开始了',
    'Pairing timed out': '配对超时',
    'The Mac user denied pairing': 'Mac 这边拒绝了配对',
    'This Mac forgot the pairing': '这台 Mac 已经忘了这个配对',
    'Cursor sharing is off over Bluetooth': '走蓝牙时光标共享是关的',
    'Input came back by itself (safety timeout)': '输入自己回来了（安全超时）',
    'Nothing connected': '什么都没连',
    'The helper stopped': '后台助手停了',
    'Turned off': '已关闭',
    'Click Connect to try again': '点「连接」再试一次',
    'Trying again soon': '马上自动重试',
    'That phone isn’t nearby any more.': '那台手机不在附近了。',
    'Finder didn’t mount it': '访达没挂载上',
    'Camera is off on this computer: turn it on in TwinDesk’s Camera tab there':
      '这台电脑的摄像头是关的：去它那边 TwinDesk 的「摄像头」页打开',
    'The phone can’t share its screen': '手机没法共享屏幕',
    'the connection closed': '连接断开了',
    'the screen helper stopped': '屏幕助手停了',
    'Another connection from this device replaced this one': '这台设备的新连接顶掉了原来那条',
    'TwinDesk wants to share a folder with the other computer.': 'TwinDesk 想跟对方共享一个文件夹。',
    'TwinDesk wants to stop sharing the folder.': 'TwinDesk 想停止共享那个文件夹。',
    'files aren’t sent by ⌘C: turn on the shortcuts in Files': '⌘C 不发文件：去「文件」里把快捷键打开',
    'skipped a password (concealed item)': '跳过了一个密码（隐藏项目）',
    'not everything arrived': '没全传到',
    'checksum mismatch': '校验对不上',
    'chunks out of order': '分块顺序乱了',
    'more data than offered': '数据比说好的多',
    'size mismatch': '大小对不上',
    'Through the USB cable': '走 USB 线',

    // ── 虚拟摄像头（mac/vcam.js）───────────────────────────────────────────
    'Allow it in System Settings › General › Login Items & Extensions › Camera Extensions (macOS asks once)':
      '在「系统设置 › 通用 › 登录项与扩展 › 相机扩展」里允许它（macOS 只问一次）',
    'Install OBS Studio and press Start Virtual Camera in it once, then turn this on again':
      '装好 OBS Studio，在里面点一次「启动虚拟摄像机」，再回来打开这个',
    'It’s installed after the Mac restarts': 'Mac 重启之后就装好了',
    'Move TwinDesk to the Applications folder first: macOS installs camera extensions only from there':
      '先把 TwinDesk 放进「应用程序」文件夹：macOS 只从那里装相机扩展',
    'Not in this build': '这个版本里没有',
    'Not in this build: macOS takes camera extensions only from TwinDesk signed by its developer (a release build). Choose OBS Virtual Camera instead':
      '这个版本里没有：macOS 只接受开发者签名的 TwinDesk（正式发布版）装的相机扩展。改用 OBS 虚拟摄像机吧',
    'Turn on OBS Virtual Camera in System Settings › General › Login Items & Extensions › Camera Extensions (or press Start Virtual Camera in OBS once), then turn this on again':
      '在「系统设置 › 通用 › 登录项与扩展 › 相机扩展」里打开 OBS 虚拟摄像机（或者在 OBS 里点一次「启动虚拟摄像机」），再回来打开这个',

    // ── 手机无线调试的步骤提示（mac/phone-bridge.js）────────────────────────
    'Can’t reach the phone’s wireless debugging. Check it’s on (same Wi-Fi), or pair again if it was reset.':
      '连不上手机的无线调试。确认它开着（同一 Wi-Fi）；如果重置过，就重新配对。',
    'Can’t see the phone’s pairing code screen. Keep it open, or type its address and port.':
      '看不到手机的配对码页面。别关掉它，或者直接填它的地址和端口。',
    'Installed. The phone’s notifications can show here now.': '装好了。手机的通知现在可以显示在这里。',
    'Looking for the phone’s wireless debugging…': '正在找手机的无线调试…',
    'On the phone, allow TwinDesk to control it (the notification there)': '在手机上允许 TwinDesk 控制它（那边有通知）',
    'On the phone: Settings › Developer options › Wireless debugging › Pair device with pairing code.':
      '在手机上：设置 › 开发者选项 › 无线调试 › 用配对码配对设备。',
    'Pair this Mac with the phone once: on the phone, Wireless debugging › Pair device with pairing code.':
      '先把这台 Mac 跟手机配对一次：在手机上，无线调试 › 用配对码配对设备。',
    'Set up wireless debugging first.': '先配好无线调试。',
    'Set up wireless debugging on the Phone page first': '先在「手机」页配好无线调试',
    'Setting up the phone for Wi-Fi Direct…': '正在给手机配 Wi-Fi 直连…',
    'Setting up the phone…': '正在设置手机…',
    'Tap Allow on the phone (“Allow USB debugging?”).': '在手机上点「允许」（“允许 USB 调试？”）。',
    'The pairing code has six digits.': '配对码是六位数。',
    'The phone isn’t ready yet': '手机还没准备好',
    'The phone refused: allow “Install via USB” in Developer options (Xiaomi), then try again.':
      '手机拒绝了：在开发者选项里允许「USB 安装」（小米），再试一次。',
    'Turn on Developer options, then USB debugging and Wireless debugging on the phone (both).':
      '在手机上打开开发者选项，再把 USB 调试和无线调试两个都打开。',
    'Turn on USB debugging and Wireless debugging on the phone (both).': '在手机上把 USB 调试和无线调试两个都打开。',
    'Turning on wireless debugging…': '正在打开无线调试…',
    'Type the code the phone shows.': '输入手机上显示的码。',
    'Xiaomi blocks touch and keys: on the phone, Developer options › USB debugging (Security settings)':
      '小米会拦住触摸和按键：在手机上，开发者选项 › USB 调试（安全设置）',
    'adb or the scrcpy server is missing from this build.': '这个版本里缺 adb 或 scrcpy 服务端。',
    'macOS is blocking TwinDesk from the local network: System Settings › Privacy & Security › Local Network › TwinDesk on, then Try Again.':
      'macOS 把 TwinDesk 挡在本地网络外面了：在「系统设置 › 隐私与安全性 › 本地网络」里打开 TwinDesk，再点「重试」。',

    // 配对提示、Wi-Fi 横幅、状态里的小句子
    'Got it': '好',
    'Still connected over Bluetooth.': '仍然通过蓝牙连着。',
    'limited by': '受限于',
    'Open TwinDesk on the other computer to connect.': '请在另一台电脑上打开 TwinDesk 来连接。',
    'Control it': '控制它',
    'no screens (Screen Recording permission?)': '没有可共享的屏幕（是不是缺「屏幕录制」权限？）',
    'bad answer from the other computer': '对方回的内容看不懂',
    'Nothing to resume': '没有可以接着做的东西',
    'Let TwinDesk control System Events to offer documents: System Settings › Privacy & Security › Automation › TwinDesk':
      '让 TwinDesk 控制系统事件（System Events）才能提供文档：系统设置 › 隐私与安全性 › 自动化 › TwinDesk',
  });

  // ── 由几段拼出来的句子（号码、名字、版本、名字里的数量）──────────────────

  // ── 画面窗口（mac/pcview.html、mac/phoneview.html）──
  I.add({
  'Use this window as an extra screen of the other computer': '把这扇窗当成对方电脑的副屏',
  'Show the other computer’s main screen': '显示对方电脑的主屏',
  'Frame generation: fills in late or dropped frames': '帧生成：补上迟到或丢掉的画面',
  'Full screen (Ctrl ⌘ F)': '全屏（Ctrl ⌘ F）',
  'Stop sharing on the other computer': '停止在对方电脑上共享',
  'Connecting to the PC…': '正在连接电脑…',
  'Connecting to the phone…': '正在连接手机…',
  'Waiting for the picture…': '正在等待画面…',
  'Phone screen off: it keeps showing here, and saves the battery (right click: the power key)': '关掉手机屏幕：这里照样能看，还省电（右键是电源键）',
  'Phone screen off': '手机屏幕关闭',
  'Return sends in WhatsApp, Instagram and Telegram (⇧Return: a new line)': 'Return 键在 WhatsApp、Instagram、Telegram 里发送（⇧Return 换行）',
  'Arrow keys swipe the screen (feeds, Reels, Shorts)': '方向键滑动屏幕（信息流、Reels、Shorts）',
  'Flashlight / Torch': '手电筒',
  'Switch Camera': '切换摄像头',
  'Back (Esc)': '返回（Esc）',
  'Home': '主屏幕',
  'Recent apps': '最近的应用',
  'Zoom In': '放大',
  'Zoom Out': '缩小',
  });

  I.pattern(/^(\d+) ms buffer · (\d+) ms decode$/, (m) => `${m[1]} ms 缓冲 · ${m[2]} ms 解码`);
  I.pattern(/^(\d+) dropped · (\d+) freezes$/, (m) => `丢 ${m[1]} 帧 · 卡 ${m[2]} 次`);
  I.pattern(/^(\d+) dropped · (\d+) freezes · frame generation on$/, (m) => `丢 ${m[1]} 帧 · 卡 ${m[2]} 次 · 帧生成已开`);
  I.pattern(/^(.+) (?:aren’t|isn’t) allowed$/, (m) => `${m[1]} 没有相应权限`);
  I.pattern(/^Continue (.+) from (.+)$/, (m) => `接着 ${m[2]} 上的「${m[1]}」`);
  I.pattern(/^Send (.+) to (.+)$/, (m) => `把「${m[1]}」发到 ${m[2]}`);
  I.pattern(/^Sent to \{name\}: (.+)$/, (m) => `已发到 {name}：${m[1]}`);
  I.pattern(/^From \{name\}: (.+)$/, (m) => `来自 {name}：${m[1]}`);
  I.pattern(/^Turned (on|off) on (.+)$/, (m) => `已在 ${m[2]} 上${m[1] === 'on' ? '打开' : '关闭'}`);
  I.pattern(/^Back on (.+)$/, (m) => `已回到 ${m[1]}`);
  I.pattern(/^Cursor locked on (.+)$/, (m) => `光标锁在 ${m[1]} 上`);
  I.pattern(/^Cursor unlocked$/, () => '光标解锁了');
  I.pattern(/^Cursor sharing (on|off)( over Bluetooth)?$/, (m) => `光标共享已${m[1] === 'on' ? '打开' : '关闭'}${m[2] ? '（走蓝牙）' : ''}`);
  I.pattern(/^Received (\d+) files? from (.+)$/, (m) => `收到 ${m[2]} 发来的 ${m[1]} 个文件`);
  I.pattern(/^Opening it when (.+) connects…$/, (m) => `${m[1]} 一连上就打开…`);
  I.pattern(/^Opening (.+) on (.+)…$/, (m) => `正在 ${m[2]} 上打开 ${m[1]}…`);
  I.pattern(/^In use by (.+)$/, (m) => `${m[1]} 正在用`);
  I.pattern(/^(.+) took over$/, (m) => `${m[1]} 接管了`);
  I.pattern(/^(.+) forgot this Mac\. Pair again\.$/, (m) => `${m[1]} 已经不认得这台 Mac 了。重新配对一次。`);
  I.pattern(/^Connecting to (.+)…$/, (m) => `正在连接 ${m[1]}…`);
  I.pattern(/^Connected to (.+) over Bluetooth: calls play on this Mac$/, (m) => `已通过蓝牙连上 ${m[1]}：通话声音在这台 Mac 上放`);
  I.pattern(/^Couldn’t reach (.+) over Bluetooth( \(.+\))?\. (.+)$/, (m) => `没能通过蓝牙连上 ${m[1]}${m[2] || ''}。${m[3]}`);
  I.pattern(/^Wi-Fi with (.+) didn’t come up$/, (m) => `跟 ${m[1]} 的 Wi-Fi 没连上`);
  I.pattern(/^Moving to Wi-Fi with (.+)…$/, (m) => `正在跟 ${m[1]} 转到 Wi-Fi…`);
  I.pattern(/^(.+) isn’t on this Mac’s network\. Its screen needs Wi-Fi: switch its hotspot on, then type its name and password here\.$/,
    (m) => `${m[1]} 不在这台 Mac 的网络上。投屏要 Wi-Fi：打开它的热点，然后把名字和密码填到这里。`);
  I.pattern(/^TwinDesk on (.+) asks to pair with this Mac\. Press Pair there, then compare the codes\.$/,
    (m) => `${m[1]} 上的 TwinDesk 请求跟这台 Mac 配对。在那边点「配对」，然后核对两边的码。`);
  I.pattern(/^Check that (.+) shows the same code\.$/, (m) => `确认 ${m[1]} 显示的配对码一样。`);
  I.pattern(/^Allowed\. Waiting for “Codes match” on (.+)…$/, (m) => `已允许。等 ${m[1]} 点「验证码一致」…`);
  I.pattern(/^(.+) confirmed the code\. Click Allow if it matches\.$/, (m) => `${m[1]} 已确认配对码。对得上就点「允许」。`);
  I.pattern(/^Starting Wi-Fi for (.+)…$/, (m) => `正在为 ${m[1]} 开 Wi-Fi…`);
  I.pattern(/^Switch on (.+)’s hotspot$/, (m) => `打开 ${m[1]} 的热点`);
  I.pattern(/^(.+) isn’t on this network: a direct Wi-Fi link(?: for (the files|the screen))?\. This Mac is off its own Wi-Fi meanwhile\.$/,
    (m) => `${m[1]} 不在这张网上：改用直连 Wi-Fi${m[2] ? `传${m[2] === 'the files' ? '文件' : '屏幕'}` : ''}。这台 Mac 期间会先离开自己的 Wi-Fi。`);
  I.pattern(/^Let TwinDesk control (.+) to offer its tabs: System Settings › Privacy & Security › Automation › TwinDesk$/,
    (m) => `让 TwinDesk 控制 ${m[1]} 才能提供它的标签页：系统设置 › 隐私与安全性 › 自动化 › TwinDesk`);
  I.pattern(/^Could not show the screen: (.+)$/, (m) => `没能显示屏幕：${m[1]}`);
  I.pattern(/^Copy (\d+)$/, (m) => `复制 ${m[1]}`);
  // 画面窗口（mac/pcview.html、mac/phoneview.html）：窗口自己写死的按钮文案和提示
  I.pattern(/^The phone stopped sharing \((.+)\)\.$/, (m) => `手机不再共享了（${m[1]}）。`);

})(typeof window !== 'undefined' ? window : null);
