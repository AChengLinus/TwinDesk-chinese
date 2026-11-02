// TwinDesk — Copyright (C) 2026 inukaasith, Erdoğan Yeşil. GPL-3.0, see LICENSE.
// 中文词条 —— zh.core：外壳（侧栏/配对/状态）、通用按钮与状态词、功能插图、运行时拼出来的句子。
// 英文原串做 key，中文做值；动态句子用 I18n.pattern(/正则/, (m) => `...${m[1]}...`)，
// 正则必须锚定 ^...$，并且「更具体的写在前面」（查表时按加入顺序匹配）。
(function (g) {
  const I = g && g.I18n ? g.I18n : require('../i18n.js');

  I.add({
    // ── 侧栏页签（tab 标题；各页自己也有词条，这里保证导航先中文化）────────────────
    'Overview': '概览',
    'Calls': '通话',
    'Messages': '短信',
    'Photos': '照片',
    'Phone Files': '手机文件',
    'Receive screen': '接收屏幕',
    'Share screen': '共享屏幕',
    'Cursor': '光标',
    'Keyboard': '键盘',
    'Clipboard': '剪贴板',
    'Notifications': '通知',
    'Files': '文件',
    'Mount': '挂载',
    'Terminal': '终端',
    'Audio': '声音',
    'Apps': '应用',
    'Multi-device': '多设备',
    'General': '通用',
    'About': '关于',
    'Phone': '手机',

    // ── 外壳：侧栏状态条、设备磁贴、配对横幅 ──────────────────────────────────
    'Not paired': '未配对',
    'Pairing…': '配对中…',
    'Reconnecting…': '正在重新连接…',
    'Identity changed': '设备身份已改变',
    'Connected': '已连接',
    'Connecting…': '连接中…',
    'Nearby · Click to connect': '附近 · 点击连接',
    'Not on Linux yet': '暂不支持 Linux',
    'Cancel': '取消',
    'Close': '关闭',
    'Allow': '允许',
    'Deny': '拒绝',
    'Codes match': '验证码一致',
    'Waiting for the code…': '正在等待配对码…',
    'Forget': '忽略',
    'This PC': '本机',
    'the other computer': '另一台电脑',
    'beta': '测试版',
    ' to ': ' 到 ',

    // ── 通用按钮 / 动作 ───────────────────────────────────────────────────
    'Done': '完成',
    'Fix': '修复',
    'Install': '安装',
    'Uninstall': '卸载',
    'Open': '打开',
    'Save': '保存',
    'Send': '发送',
    'Copy': '复制',
    'Paste': '粘贴',
    'Delete': '删除',
    'Remove': '移除',
    'Rename': '重命名',
    'Refresh': '刷新',
    'Retry': '重试',
    'Try Again': '再试一次',
    'Skip for now': '暂时跳过',
    'Set up': '设置',
    'Next': '下一步',
    'Back': '返回',
    'OK': '正常',
    'Show': '显示',
    'Hide': '隐藏',
    'Search': '搜索',
    'Clear': '清空',
    'Apply': '应用',
    'Edit': '编辑',
    'New Folder': '新建文件夹',
    'Select All': '全选',
    'Choose…': '选择…',
    'Change…': '更改…',
    'Dismiss': '收起',
    'Show the settings': '显示设置',
    'Learn more': '了解更多',
    'Get started': '开始使用',

    // ── 通用状态 / 名词 ───────────────────────────────────────────────────
    'On': '已开启',
    'Off': '已关闭',
    'All': '全部',
    'None': '无',
    'Default': '默认',
    'Auto': '自动',
    'Manual': '手动',
    'Settings': '设置',
    'Status': '状态',
    'Details': '详细信息',
    'Permissions': '权限',
    'Accessibility': '辅助功能',
    'Problem': '问题',
    'Warning': '警告',
    'Error': '错误',
    'Loading…': '加载中…',
    'Checking…': '检查中…',
    'Installing…': '安装中…',
    'Waiting…': '等待中…',
    'Searching…': '搜索中…',
    'Running': '运行中',
    'Not running': '未运行',
    'Installed': '已安装',
    'Not installed': '未安装',
    'Not connected': '未连接',
    'Disconnected': '已断开',
    'Online': '在线',
    'Offline': '离线',
    'Paired': '已配对',
    'Enabled': '已启用',
    'Disabled': '已禁用',
    'Never': '从不',
    'never': '从未',
    'just now': '刚刚',
    'Press keys…': '请按键…',
    'Hardware': '硬件',
    'Software': '软件',
    'Version': '版本',
    'Updates': '更新',
    'Privacy': '隐私',
    'Licence': '许可',
    'Source code': '源代码',
    'Storage': '存储',
    'Folder': '文件夹',
    'Downloads': '下载',
    'Pictures': '图片',
    'Screenshots': '截图',
    'Videos': '视频',
    'Documents': '文档',
    'Desktop': '桌面',
    'Network': '网络',
    'Firewall': '防火墙',
    'Bluetooth': '蓝牙',
    'Address': '地址',
    'Port': '端口',
    'Speed': '速度',
    'Quality': '画质',
    'Resolution': '分辨率',
    'Encoder': '编码器',
    'Decoder': '解码器',
    'Codec': '编解码器',
    'Frames dropped': '丢帧',
    'Delay': '延迟',
    'Fastest': '最快',
    'Smooth': '平滑',
    'Balanced': '均衡',
    'Sharing off': '共享已关闭',

    // ── 快捷键名字（shared/protocol.js 的 hotkeyName）────────────────────────
    'Left Ctrl': '左 Ctrl',
    'Right Ctrl': '右 Ctrl',
    'Left Alt': '左 Alt',
    'Right Alt': '右 Alt',
    'Left Shift': '左 Shift',
    'Right Shift': '右 Shift',
    'Left Windows key': '左 Win 键',
    'Right Windows key': '右 Win 键',
    'Ctrl (either side)': 'Ctrl（任一侧）',
    'Alt (either side)': 'Alt（任一侧）',
    'Shift (either side)': 'Shift（任一侧）',
    'Windows key (either side)': 'Win 键（任一侧）',
    'Ctrl+Alt+C': 'Ctrl+Alt+C',

    // ── 设置页里到处出现的几句 ─────────────────────────────────────────────
    'Checking…': '检查中…',
    'Needs a fix': '需要修复',
    'Restart TwinDesk if it stays like this.': '如果一直这样，请重启 TwinDesk。',

    // ── 功能插图（shared/feature-art.js 的 TEXT 表）─────────────────────────
    'Cursor sharing': '光标共享',
    'Keyboard sharing': '键盘共享',
    'Clipboard sync': '剪贴板同步',
    'Notification sync': '通知同步',
    'Sound sharing': '声音共享',
    'App sharing': '应用共享',
    'Second screen': '第二块屏幕',
    'Remote screen': '远程屏幕',
    'Screen sharing': '屏幕共享',
    'File sharing': '文件共享',
    'Remote terminal': '远程终端',
    'Phone drive': '手机磁盘',
    'Phone calls': '手机通话',
    'Text messages': '短信',
    'Phone photos': '手机照片',
    'Phone files': '手机文件',
    'Camera sharing': '摄像头共享',
    'Phone as a remote': '手机当遥控器',

    'Push the pointer past the edge of the screen and it carries on onto the other device. One mouse or trackpad for both.': '把指针推过屏幕边缘，它就会接着出现在另一台设备上。一只鼠标或触控板同时控制两台。',
    'This keyboard types on whichever device the pointer is on, shortcuts included.': '指针在哪台设备上，这个键盘就在哪台设备上打字，快捷键也一样。',
    'Copy something on one device and paste it on the other. It goes across by itself.': '在一台设备上复制，到另一台设备上粘贴，剪贴板内容会自动传过去。',
    'Notifications from the other device show up on this one, and the other way round.': '另一台设备上的通知会显示在这台上，反过来也一样。',
    'Play one device’s sound on the other’s speakers or headphones.': '把一台设备的声音放到另一台设备的扬声器或耳机上播放。',
    'Open an app of the other device: it runs there and shows up here in a window of its own.': '打开另一台设备上的应用：它在那里运行，在这里以独立窗口显示。',
    'This screen becomes a second screen for the other device: move windows across onto it.': '这块屏幕会成为另一台设备的第二块屏幕：把窗口移过去即可。',
    'The other device’s screen in a window here, to see it and use it from here.': '在窗口里显示另一台设备的屏幕，在这里就能查看和操作。',
    'This screen in a window on the other device, to show it or use it from there.': '把这块屏幕放进另一台设备的窗口里，从那台设备上查看或操作。',
    'Drag files across the screen edge, take in files sent your way, or share a folder.': '把文件拖过屏幕边缘，接收对方发来的文件，或共享一个文件夹。',
    'Open a terminal on the other computer from this one. No passwords needed.': '在这台电脑上打开另一台电脑的终端，不需要输入密码。',
    'The phone’s storage as a drive here, to open and copy its files like any other folder.': '把手机存储当作这里的一个磁盘，像打开普通文件夹一样查看和复制文件。',
    'Answer and make your phone’s calls on this computer, and talk through it.': '在这台电脑上接打手机电话，并用它通话。',
    'Read and send your phone’s texts here.': '在这里读取并发送手机的短信。',
    'See your phone’s photos and videos and copy them here.': '查看手机上的照片和视频，并复制到这台电脑。',
    'Browse the phone’s storage and copy files to and from it, no cable needed.': '浏览手机存储并在两者之间复制文件，不需要数据线。',
    'The other device’s camera here: see its picture, or pick it as a camera in any app.': '在这里使用另一台设备的摄像头：查看画面，或在任意应用里把它选作摄像头。',
    'Use the phone as this computer’s touchpad, keyboard or gamepad.': '把手机当作这台电脑的触控板、键盘或手柄。',

    // ── 设置/安装引导（windows/ui-setup.js 走 UI.row，模板里的 {me} 保留）────────
    'Set up TwinDesk': '设置 TwinDesk',
    'Firewall and network': '防火墙与网络',
    'Mouse and keyboard helper': '鼠标与键盘助手',
    'TwinDesk virtual display': 'TwinDesk 虚拟显示器',
    'A few things before {me} can share with the other computer.': '让 {me} 能与另一台电脑共享之前，需要先完成几件事。',
    'You can change these later in General and Display.': '之后可以在「通用」和「显示」里修改。',
    ' Fix asks for administrator rights once.': ' 「修复」会请求一次管理员权限。',
    'Optional. Adds an extra screen for the other computer (Extend). Installs a display driver and asks for administrator rights once.': '可选。为另一台电脑增加一块额外屏幕（扩展）。会安装显示驱动，并请求一次管理员权限。',
    'A password is needed to change this.': '更改此项需要密码。',
    'Screen Recording': '屏幕录制',
    'Screen recording': '屏幕录制',
    'Input Monitoring': '输入监控',
    'Files and Folders': '文件与文件夹',
    'Notifications': '通知',
    'Camera': '摄像头',
    'Microphone': '麦克风',

    // ── 托盘 / 菜单栏（shared/traymenu.js，主进程）────────────────────────────
    'Connect To': '连接到',
    'Nobody nearby': '附近没有设备',
    'Connect by Address…': '按地址连接…',
    'Look Again': '重新扫描',
    'Open TwinDesk…': '打开 TwinDesk…',
    'Quit TwinDesk': '退出 TwinDesk',
    'Bring Mouse and Keyboard Back': '把鼠标和键盘收回本机',
    'Cursor Sharing': '光标共享',
    'Mouse and Keyboard': '鼠标与键盘',
    'Share Keyboard': '共享键盘',
    'Show a Popup When Switching': '切换时显示弹窗',
    'Screen': '屏幕',
    'Clipboard and Sound': '剪贴板与声音',
    'Share Clipboard': '共享剪贴板',
    'Send Sound': '发送声音',
    'Drag Files Across the Screen Edge': '拖拽文件跨屏幕边缘',
    'Connection': '连接',
    'Open Log Folder': '打开日志文件夹',
    'Later': '稍后',
    'Share Screen': '共享屏幕',
    'Receive Screen': '接收屏幕',
    'Disconnect': '断开',
    'Other Computer': '另一台电脑',
    'Not connected': '未连接',

    // ── 切屏提示（windows/hud.js 在显示前统一查表，windows/mesh/main.js 拼句子）────────
    'Cursor sharing on': '光标共享已开启',
    'Cursor sharing off': '光标共享已关闭',
    'Cursor sharing off over Bluetooth': '蓝牙下光标共享已关闭',
    'Cursor unlocked': '光标已解锁',
    'Back on {me}': '已回到 {me}',
    'Opening it when wireless debugging is ready…': '无线调试就绪后就会打开…',
    'Opening it when the phone is ready…': '手机就绪后就会打开…',

    // ── 文件传输/复制粘贴的提示（shared/fclip.js、sendto.js、apps.js、peerapps.js、camshare.js、
    //    clipimage.js 拼好后交给 hud.show；带名字的走下面的 pattern）──────────────────
    'Those files aren’t there any more': '那些文件已经不在了',
    'Select files in File Explorer first': '请先在文件资源管理器里选择文件',
    'Nothing to copy there': '那里没有可复制的内容',
    'Nothing to send': '没有可发送的内容',
    'Not connected yet': '还没连接',
    'Files stopped': '文件传输已停止',
    'Not everything arrived': '并非所有内容都送达',
    'Click to view update details.': '点击查看更新详情。',
    'Nothing arrived': '什么也没有收到',
  });

  // ── 第二批补充（第二轮 sweep 查出的缺口）────────────────────────────────
  I.add({
    // 光标页（UI.cursorLock / UI.inputStatus，在 windows/ui-kit.js 里）
    'Cursor lock': '光标锁定',
    'Lock the cursor': '锁定光标',
    'Lock key': '锁定快捷键',
    'Scroll Lock or F13–F24 on its own, or a combination with Ctrl, Alt or Win': '单独按 Scroll Lock 或 F13–F24，或与 Ctrl、Alt、Win 组合',
    'Keyboard and mouse': '键盘和鼠标',
    // 界面语言（General › App › Language，windows/ui-general.js）
    'Language': '语言',
    'Every TwinDesk window and the tray menu': '所有 TwinDesk 窗口和托盘菜单都会跟着换',
    // app.html 里写死的几处（data-t / data-ta 由 shared/i18n.js 的 applyDom 填）
    'Sections': '分区',
    'Multi-device is on: Mesh mode, in beta': '已开启多设备：Mesh 模式（测试版）',
    'Pairing': '配对中',
    'Code': '配对码',
    // 播放器里的「下一首」（'Next' 本身是向导按钮的「下一步」，所以源码里改成了 'Next track'）
    'Next track': '下一首',
    // 多设备页的测试版徽章（大写 B）
    'Beta': '测试版',
    // 关于页的 CPU 架构串（shared/about.js 的 ARCH 表）
    '64-bit Intel/AMD (x64)': '64 位 Intel/AMD（x64）',
    'ARM 64-bit (arm64)': '64 位 ARM（arm64）',
    '32-bit (x86)': '32 位（x86）',
    // 屏幕选择器（windows/{,mesh/}pcscreen.js 拼出来的显示器名）
    'Monitor': '显示器',
    'Built-in screen': '内置屏幕',
    '(main)': '（主显示器）',
  });

  // ── 文件传输/复制粘贴的提示 ────────────────────────────────────────────
  I.pattern(/^(\d+) file(?:s)?$/, (m) => `${m[1]} 个文件`);
  I.pattern(/^(\d+) item(?:s)?$/, (m) => `${m[1]} 项`);
  I.pattern(/^(\d+) photo(?:s)?$/, (m) => `${m[1]} 张照片`);
  I.pattern(/^(\d+) video(?:s)?$/, (m) => `${m[1]} 个视频`);
  I.pattern(/^(\d+) folder(?:s)?$/, (m) => `${m[1]} 个文件夹`);
  I.pattern(/^(?:Pasting|Receiving) (.+) from (.+) · (.+ %)$/, (m) => `正在从 ${m[2]} 传输 ${I.T(m[1])} · ${m[3]}`);
  I.pattern(/^Sending (.+) to (.+ · .+ %)$/, (m) => `正在把 ${I.T(m[1])} 发送到 ${m[2]}`);
  I.pattern(/^Sending (.+) to (.+)$/, (m) => `正在把 ${I.T(m[1])} 发送到 ${m[2]}`);
  I.pattern(/^Sent (.+) to (.+)$/, (m) => `已把 ${m[1]} 发送到 ${m[2]}`);
  I.pattern(/^Sending once (.+) is connected$/, (m) => `${m[1]} 连上后就发送`);
  I.pattern(/^Pasting (.+) from (.+)$/, (m) => `正在从 ${m[2]} 粘贴 ${I.T(m[1])}`);
  I.pattern(/^Receiving (.+) from (.+)$/, (m) => `正在从 ${m[2]} 接收 ${I.T(m[1])}`);
  I.pattern(/^Pasting (.+) into (.+)$/, (m) => `正在把 ${I.T(m[1])} 粘贴到 ${m[2]}`);
  I.pattern(/^Pasting (.+)…$/, (m) => `正在粘贴 ${I.T(m[1])}…`);
  I.pattern(/^Copied (.+) for (.+)$/, (m) => `已为 ${m[2]} 复制 ${I.T(m[1])}`);
  I.pattern(/^Nothing copied on (.+)$/, (m) => `${m[1]} 上没有可粘贴的内容`);
  I.pattern(/^Couldn’t read (.+)$/, (m) => `读不到 ${m[1]}`);
  I.pattern(/^Not everything arrived on (.+)$/, (m) => `并非所有内容都送达 ${m[1]}`);
  I.pattern(/^On (.+): some files didn’t make it$/, (m) => `${m[1]}：部分文件没能传过去`);
  I.pattern(/^Opening (.+) on (.+)…$/, (m) => `正在 ${m[2]} 上打开 ${m[1]}…`);
  I.pattern(/^(.+) is viewing this computer’s camera$/, (m) => `${m[1]} 正在查看这台电脑的摄像头`);
  I.pattern(/^The camera didn’t start: (.+)$/, (m) => `摄像头没能启动：${m[1]}`);
  I.pattern(/^(Screenshot|Picture) from (.+) copied: paste it with (.+)$/, (m) => `已复制 ${m[2]} 的${m[1] === 'Screenshot' ? '截图' : '图片'}：用 ${m[3]} 粘贴`);
  I.pattern(/^(.+) disconnected$/, (m) => `${m[1]} 已断开`);
  I.pattern(/^(.+): they’re on the clipboard, paste them with (.+)$/, (m) => `${m[1]}：内容已在剪贴板里，用 ${m[2]} 粘贴`);
  // 通知（windows 的 toast 助手 / 更新提醒）
  I.pattern(/^(.+) · (.+ %)$/, (m) => `${I.T(m[1])} · ${m[2]}`);
  I.pattern(/^Received (.+)$/, (m) => (m[1].includes(' from ') ? null : `已收到 ${I.T(m[1])}`));
  I.pattern(/^From (.+)$/, (m) => `来自 ${m[1]}`);
  I.pattern(/^Sent (.+)$/, (m) => `已发送 ${m[1]}`);
  I.pattern(/^Sending (.+)$/, (m) => `正在发送 ${m[1]}`);
  I.pattern(/^TwinDesk (\d[\d.]*) is available$/, (m) => `TwinDesk ${m[1]} 已发布`);
  I.pattern(/^You have (.+)\. Click to view update details and release notes\.$/, (m) => `当前版本是 ${m[1]}。点击查看更新详情和发行说明。`);

  // ── 切屏提示（hud）里拼出来的句子（hud.show 显示前统一查表）───────────────
  I.pattern(/^Received (\d+) file(?:s)? from (.+)$/, (m) => `已从 ${m[2]} 收到 ${m[1]} 个文件`);
  I.pattern(/^Turned (on|off) on (.+)$/, (m) => `已在 ${m[2]} 上${m[1] === 'on' ? '开启' : '关闭'}`);
  I.pattern(/^With (.+)\. Double-tap (.+) to turn it off$/, (m) => `正在与 ${m[1]} 共用。双击 ${m[2]} 可关闭`);
  I.pattern(/^It comes back on Wi-Fi\. Double-tap (.+) to turn it on$/, (m) => `连上 Wi-Fi 会自动恢复。双击 ${m[1]} 可开启`);
  I.pattern(/^Double-tap (.+) to turn it off$/, (m) => `双击 ${m[1]} 可关闭`);
  I.pattern(/^Double-tap (.+) to turn it on$/, (m) => `双击 ${m[1]} 可开启`);
  I.pattern(/^Typing on (.+)$/, (m) => `正在 ${m[1]} 上打字`);
  I.pattern(/^Using (.+)$/, (m) => `正在使用 ${m[1]}`);
  I.pattern(/^(.+) is using \{me\}$/, (m) => `${m[1]} 正在使用 {me}`);
  I.pattern(/^Cursor locked on (.+)$/, (m) => `光标已锁定在 ${I.T(m[1])} 上`);
  I.pattern(/^Moving to Wi-Fi with \{name\}…$/, () => '正在与 {name} 切换到 Wi-Fi…');
  I.pattern(/^Wi-Fi with \{name\} didn’t come up$/, () => '与 {name} 的 Wi-Fi 没能连上');
  I.pattern(/^Opening it when \{name\} connects…$/, () => '{name} 连上后就会打开…');

  // ── 运行时拼出来的句子：更具体的写前面 ─────────────────────────────────────
  // 托盘/菜单栏（windows/main.js、windows/mesh/main.js 拼的 label，traymenu 查表）
  I.pattern(/^Lock Cursor on (.+) \((.+)\)$/, (m) => `在 ${m[1]} 上锁定光标（${m[2]}）`);
  I.pattern(/^Use Mouse and Keyboard on (.+)$/, (m) => `在 ${m[1]} 上使用鼠标和键盘`);
  I.pattern(/^Let (.+) Control (.+)$/, (m) => `允许 ${m[1]} 控制 ${m[2]}`);
  I.pattern(/^Copy and Paste Files \((.+), (.+)\)$/, (m) => `复制粘贴文件（${m[1]}，${m[2]}）`);
  I.pattern(/^Download TwinDesk (.+)…$/, (m) => `下载 TwinDesk ${m[1]}…`);
  I.pattern(/^Disconnect (.+)$/, (m) => `断开 ${m[1]}`);
  I.pattern(/^Take Over (.+)$/, (m) => `接管 ${m[1]}`);
  I.pattern(/^(.+) \((Mac|Linux|Phone|PC)\)$/, (m) => `${m[1]}（${m[2] === 'Phone' ? '手机' : m[2]}）`);
  // 必须排在 ^Connected to (.+)$ 之前：那条的 (.) 会一路吃到句尾，把整句都当设备名。
  I.pattern(/^Connected to (.+)\. Double-tap (.+) to turn cursor sharing off\.$/, (m) => `已连接到 ${m[1]}。双击 ${m[2]} 关闭光标共享。`);
  I.pattern(/^Connected to (.+)$/, (m) => `已连接到 ${m[1]}`);
  I.pattern(/^Waiting for Allow on (.+)…$/, (m) => `正在等待 ${m[1]} 上点「允许」…`);
  I.pattern(/^Waiting for (.+)…$/, (m) => `正在等待 ${m[1]}…`);
  I.pattern(/^Check that (.+) shows the same code, then click Codes match\.$/, (m) => `请确认 ${m[1]} 上显示的配对码与此处一致，然后点「验证码一致」。`);
  I.pattern(/^Check that (.+) shows the same code, then click Allow\.$/, (m) => `请确认 ${m[1]} 上显示的配对码与此处一致，然后点「允许」。`);
  I.pattern(/^(.+) is on the USB cable\. Click Allow to pair\.$/, (m) => `${m[1]} 已用 USB 线连接。点「允许」开始配对。`);
  I.pattern(/^TwinDesk on (.+) asks to pair with this PC\. Press Pair there, then compare the codes\.$/, (m) => `${m[1]} 上的 TwinDesk 请求与本机配对。请在那边点「配对」，然后核对配对码。`);
  I.pattern(/^Press Pair on (.+)$/, (m) => `请在 ${m[1]} 上点「配对」`);
  I.pattern(/^Pairing with (.+)$/, (m) => `正在与 ${m[1]} 配对`);
  I.pattern(/^(.+) wants to pair$/, (m) => `${m[1]} 请求配对`);
  I.pattern(/^Connecting to (.+)…$/, (m) => `正在连接 ${m[1]}…`);
  I.pattern(/^(.+) is reached through (.+)$/, (m) => `${m[1]} 经 ${m[2]} 连接`);
  I.pattern(/^Connect to (.+)$/, (m) => `连接到 ${m[1]}`);
  I.pattern(/^Forget (.+)$/, (m) => `忽略 ${m[1]}`);
  I.pattern(/^via (.+)$/, (m) => `经 ${m[1]}`);
  I.pattern(/^Phase (\d+)$/, (m) => `第 ${m[1]} 阶段`);
  // 侧栏频道标题只在设备名不带空格时对上；带空格就保留英文，不会误伤别的句子。
  I.pattern(/^([^ ]+) on ([^ ]+)$/, (m) => `${m[2]} 上的 ${m[1]}`);

  // 光标/键盘页的「现在在哪台设备上」
  I.pattern(/^Locked · On ([^ ]+)$/, (m) => `已锁定 · 在 ${m[1]} 上`);
  I.pattern(/^On ([^ ]+)$/, (m) => `在 ${m[1]} 上`);
  I.pattern(/^(.+) is using (.+)$/, (m) => `${m[1]} 正在使用 ${m[2]}`);
  I.pattern(/^Cursor sharing is off\. Double-tap (.+) to turn it on\.$/, (m) => `光标共享已关闭。双击 ${m[1]} 开启。`);
  I.pattern(/^Cursor sharing is off over Bluetooth\. It comes back on Wi-Fi, or double-tap (.+) to turn it on\.$/, (m) => `蓝牙下光标共享已关闭。连上 Wi-Fi 会自动恢复，或双击 ${m[1]} 开启。`);
  I.pattern(/^Waiting for (.+)$/, (m) => `正在等待 ${I.T(m[1])}`);
  I.pattern(/^Double-tap (.+) to turn cursor sharing off$/, (m) => `双击 ${m[1]} 关闭光标共享`);
  I.pattern(/^Double-tap (.+) to come back and turn cursor sharing off$/, (m) => `双击 ${m[1]} 回到本机并关闭光标共享`);
  I.pattern(/^Double-tap (.+) to take it back$/, (m) => `双击 ${m[1]} 收回控制`);
  I.pattern(/^If it does not come back, double-tap (.+)\.$/, (m) => `如果没回来，双击 ${m[1]}。`);

  // 光标锁（UI.cursorLock）的三句提示 + 可选的锁定键说明
  I.pattern(/^Keeps the pointer on one computer, even when the mouse is plugged into another\.$/, () => '把指针留在一台电脑上，即使鼠标插在另一台电脑上。');
  I.pattern(/^The pointer stays on (.+): the screen edges don’t cross\.$/, (m) => `指针停留在 ${m[1]} 上：屏幕边缘不再穿越。`);
  I.pattern(/^Keeps the pointer on (.+), where it is now, even when the mouse is plugged into another computer\.$/, (m) => `把指针留在 ${m[1]} 上（当前所在位置），即使鼠标插在另一台电脑上。`);
  I.pattern(/^ *While the pointer is on (.+), (.+) on either keyboard locks or unlocks it \(each computer has its own key\)\.$/, (m) => ` 指针在 ${m[1]} 上时，任一键盘上的 ${m[2]} 都能锁定或解锁它（每台电脑各用各的键）。`);

  // 设备磁贴的副标题："Connected · 85%" / "85 ms · 85%"
  // （更具体的必须在通用那条之前："Connected · linked to 2"）
  I.pattern(/^Connected · linked to (\d+)$/, (m) => `已连接 · 已关联 ${m[1]} 台`);
  I.pattern(/^Connected( · .*)$/, (m) => `已连接${m[1]}`);

  // 编码器实现："Hardware (x264)"
  I.pattern(/^Hardware \((.+)\)$/, (m) => `硬件（${m[1]}）`);
  I.pattern(/^Software \((.+)\)$/, (m) => `软件（${m[1]}）`);

  // 关于页的系统版本串（shared/about.js）："Windows 11 (build 26200)"
  I.pattern(/^Windows (\d+) \(build (\d+)\)$/, (m) => `Windows ${m[1]}（内部版本 ${m[2]}）`);

  // 相对时间（UI.ago）
  I.pattern(/^(\d+) s ago$/, (m) => `${m[1]} 秒前`);
  I.pattern(/^(\d+) min ago$/, (m) => `${m[1]} 分钟前`);
  I.pattern(/^(\d+) h ago$/, (m) => `${m[1]} 小时前`);

  // ── 第三批补充：侧栏页签的标题/描述与 Mesh 介绍弹窗 ──────────────────────────
  I.add({
    // 光标页（windows/ui-cursor.js、windows/mesh/ui-cursor.js）；
    // 它的描述已在 zh.settings.js（光标页那批）里，这里不重复。
    'Mouse': '鼠标',
    // 文件页（windows/ui-files.js；heading 与 title 同串）
    'File Sharing': '文件共享',
    'Send files and folders between your devices, or share a folder.': '在你的设备之间互发文件和文件夹，或共享一个文件夹。',
    // 手机投屏页（shared/ui-mirror.js）
    'Mirroring': '投屏',
    'The phone’s screen in a window, with touch, mouse and keyboard.': '把手机屏幕放进一个窗口，可用触摸、鼠标和键盘操作。',
    'Open any phone app in its own window.': '在独立窗口中打开任意手机应用。',
    // ReZume 页（shared/ui-rezume.js）：标题按 Handoff 的中文叫法译作「接力」。
    'ReZume': '接力',
    'Like Handoff on Apple devices: go on here with what you were doing on the other device, and the other way round.': '就像 Apple 设备上的「接力」：在这里接着做另一台设备上正在做的事，反过来也行。',
    // 摄像头页（shared/ui-camera.js）
    'The other device’s camera here, and as a camera other apps can pick.': '把另一台设备的摄像头接到这里，也能作为摄像头供其他应用选用。',
    // 手机文件页（shared/ui-pfiles.js）
    'Browse the phone’s storage and copy files both ways. No wireless debugging needed.': '浏览手机存储，双向复制文件。无需无线调试。',
    // 侧栏磁贴下面拼出来的副标题（shared/sidebar-model.js 拼「via another device」）：整句查表，
    // 因为 /^via (.+)$/ 不会再把里面的 'another device' 翻一遍。
    'via another device': '经另一台设备',
    // 多设备（Mesh）介绍弹窗（shared/mesh-intro.js）
    'Every device linked to every other: one clipboard and one set of notifications for all, and the mouse and keyboard across all of them.': '每台设备都彼此相连：所有设备共用一个剪贴板和一套通知，鼠标和键盘也能在所有设备之间使用。',
    'Turn on Multi-device? ': '要开启多设备吗？ ',
    'Mesh · Beta': 'Mesh · 测试版',
    'Mesh mode is still in beta, and you may run into some issues with it.': 'Mesh 模式仍在测试中，可能会遇到一些问题。',
    'If you connect only two devices, keep it off.': '如果只连接两台设备，建议保持关闭。',
    'TwinDesk restarts when you turn it on or off.': '开启或关闭时 TwinDesk 会重启。',
    'Turn on': '开启',
  });

  // 配对提示里的一句（windows/app.js 的 p.qr 分支，整句已包 T，这里补句子）
  I.pattern(/^(.+) scanned the QR code\. Click Allow to pair\.$/, (m) => `${m[1]} 已扫描二维码。点「允许」开始配对。`);

  // 通用页的卡片标题与提示（windows/ui-general.js；卡片标题不在 UI.tab 里，得单独收）
  I.add({
    'Startup': '启动',
    'Appearance': '外观',
    'Network and Bluetooth': '网络与蓝牙',
    'TwinDesk waits in the tray': 'TwinDesk 会待在托盘里',
    'When the mouse and keyboard move between devices': '当鼠标和键盘在设备之间切换时',
    // 功能插图（shared/feature-art.js）里 ReZume 那条的说明；标题「接力」上面已有
    'Like Handoff on Apple devices: go on here with the page, document or phone app you were using on the other device, and the other way round.':
      '就像 Apple 设备上的「接力」：在这里接着看/改另一台设备上正在用的网页、文档或手机应用，反过来也行。',
  });
})(typeof window !== 'undefined' ? window : null);
