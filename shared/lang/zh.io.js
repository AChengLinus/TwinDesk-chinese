// TwinDesk — Copyright (C) 2026 inukaasith, Erdoğan Yeşil. GPL-3.0, see LICENSE.
// 中文词条 —— zh.io。英文原串做 key，中文做值。
// 动态句子（带设备名/数字）用 I18n.pattern(/正则/, (m) => `...$1...`)，放在同一个文件里。
// 覆盖：Files（文件）、Mount（挂载）、Terminal（终端）、Audio（声音）、Apps（应用）、
// Clipboard（剪贴板）、Keyboard（键盘）。
(function (g) {
  const I = g && g.I18n ? g.I18n : require('../i18n.js');
  I.add({
    // ---- Files（文件）----
    'Drag files between your computers, or share a folder.': '在电脑之间拖拽文件，或共享一个文件夹。',
    '{Name}’s folder here': '{Name} 的文件夹挂载到本机',
    '{me}’s folder on {name}': '把 {me} 的文件夹共享到 {name}',
    'Open {name}’s shared folder': '打开 {name} 的共享文件夹',
    'Share a folder with {name}': '与 {name} 共享文件夹',
    'Take files from {name} on {me}': '在 {me} 上接收 {name} 的文件',
    'Send files from {me} to {name}': '从 {me} 向 {name} 发送文件',
    'Drop files or folders here': '把文件或文件夹拖到这里',
    'Connect to send files': '连接后才能发送文件',
    'Send files': '发送文件',
    'Copy and paste files with shortcuts': '用快捷键复制和粘贴文件',
    'Copy and paste files': '复制和粘贴文件',
    'Drag files across the screen edge': '拖拽文件穿过屏幕边缘',
    'Drag files between computers': '在电脑之间拖拽文件',
    'Drag through the screen edge and drop anywhere': '拖过屏幕边缘，然后放到任意位置',
    'Pasting…': '正在粘贴…',
    'Into the app in front (a chat, a mail…), or the File Explorer folder in front, else the Desktop': '粘贴到前台的应用（聊天、邮件…）或前台的文件资源管理器文件夹，否则粘贴到桌面',
    'Recent': '最近',
    'Shared': '已共享',
    'Setting up…': '正在设置…',
    'Removing…': '正在移除…',
    'Over Bluetooth: Open connects it with Wi-Fi Direct': '通过蓝牙：点「打开」会用 Wi-Fi Direct 连接',
    'Waiting for {name} to share one': '等待 {name} 共享文件夹',
    'Esc cancels': '按 Esc 取消',
    'Sent': '已发送',
    'Not sent:': '未发送：',
    'Nothing sent': '没有发送过文件',
    'Not received': '未接收',
    'Not received:': '未接收：',
    'Received from {name}': '已从 {name} 接收',
    'Nothing received': '没有接收过文件',

    // ---- Mount（挂载）----
    'The phone’s storage as a drive in Explorer, through ADB: the cable (USB debugging) or wireless debugging.': '把手机的存储当作资源管理器里的驱动器，通过 ADB：数据线（USB 调试）或无线调试。',
    'Unmount': '取消挂载',
    'Show the phone in Explorer': '在资源管理器中显示手机',
    'Switch it on to mount the phone': '打开开关即可挂载手机',
    'Phone Page': '手机页面',
    'Drive': '驱动器',
    'Mounting…': '正在挂载…',
    'Plug the phone in with USB debugging on, or connect it with wireless debugging, then Mount.': '用数据线连接手机并打开 USB 调试，或用无线调试连接它，然后点「挂载」。',
    'Mount works through ADB, and Developer options are off on the phone. Switch on Developer options and Wireless debugging (Phone page), or plug the phone in with USB debugging on. Phone Files works without ADB.': '挂载需要 ADB，但手机上的「开发者选项」是关闭的。请在手机页面打开「开发者选项」和「无线调试」，或用数据线连接手机并打开 USB 调试。手机文件不需要 ADB。',
    'Mount works through ADB, and wireless debugging is off on the phone. Switch it on (Phone page), or plug the phone in with USB debugging on. Phone Files works without ADB.': '挂载需要 ADB，但手机上的「无线调试」是关闭的。请在手机页面打开它，或用数据线连接手机并打开 USB 调试。手机文件不需要 ADB。',

    // ---- Terminal（终端）----
    'Open a terminal on the other computer.': '在另一台电脑上打开终端。',
    'SSH server': 'SSH 服务器',
    'Open Terminal': '打开终端',
    'Shell on {name}': '{name} 上的终端',
    'In any terminal': '在任何终端里',
    'Let {name} open a terminal on {me}': '允许 {name} 在 {me} 上打开终端',
    'Open a terminal on {name} from {me}': '从 {me} 在 {name} 上打开终端',
    'Asking {name}…': '正在询问 {name}…',
    'Ready': '就绪',
    'Not available': '不可用',
    'Stopped': '已停止',
    'Asks for administrator rights once': '会请求一次管理员权限',
    'Not ready yet': '尚未就绪',
    'Set up the SSH server first': '请先设置 SSH 服务器',
    'Turn on Remote Login on {name}': '在 {name} 上打开「远程登录」',
    'Set up the SSH server on {name}': '在 {name} 上设置 SSH 服务器',

    // ---- Audio（声音）----
    'Hear one computer on the other.': '在一台电脑上听到另一台电脑的声音。',
    'Volume': '音量',
    'Mute {me} while sending': '发送时静音 {me}',
    'Play {name}’s sound on {me}': '在 {me} 上播放 {name} 的声音',
    'Play {me}’s sound on {name}': '在 {name} 上播放 {me} 的声音',
    'Playing on {name}': '{name} 上正在播放',

    // ---- Apps（应用）----
    'Use apps from the other computer in their own windows.': '在独立窗口里使用另一台电脑的应用。',
    'Search apps': '搜索应用',
    'Open {name}’s apps on {me}': '在 {me} 上打开 {name} 的应用',
    'Pick one below': '从下面选一个',
    'Open {me}’s apps on {name}': '在 {name} 上打开 {me} 的应用',
    'Pick them over there': '到那边选择',
    'Mac apps': 'Mac 应用',
    'None open': '没有打开的应用',
    'No app matches': '没有匹配的应用',
    'No apps yet': '还没有应用',
    'Click Refresh to ask {name} for its apps.': '点「刷新」向 {name} 请求应用列表。',
    'Pin to Start': '固定到「开始」',
    'Turned off on {name}': '已在 {name} 上关闭',

    // ---- Clipboard（剪贴板）----
    'Copy on one computer, paste on the other.': '在一台电脑上复制，在另一台电脑上粘贴。',
    'Copy on {name}, paste on {me}': '在 {name} 上复制，在 {me} 上粘贴',
    'Copy on {me}, paste on {name}': '在 {me} 上复制，在 {name} 上粘贴',
    'Sync': '同步',
    'Instantly': '立即',
    'When you switch': '切换电脑时',
    'As soon as you copy': '一复制就同步',
    'When you move to the other computer': '切换到另一台电脑时',
    'Skip passwords': '跳过密码',
    'From password managers': '来自密码管理器',
    'Largest text': '最长文本',
    'Recent items': '最近条目',
    'Never saved to disk': '不写入磁盘',
    '10 items': '10 项',
    '20 items': '20 项',
    '50 items': '50 项',
    '100 items': '100 项',
    'Pictures and screenshots you copy, up to 10 MB, both ways': '复制的图片和截图，最大 10 MB，双向同步',
    'Pictures and screenshots you copy, up to 10 MB, both ways. Not over Bluetooth': '复制的图片和截图，最大 10 MB，双向同步。蓝牙下不可用',
    'Longer text isn’t sent. Pictures: up to 10 MB': '更长的文本不会发送。图片上限 10 MB',
    'Longer text isn’t sent': '更长的文本不会发送',
    'Sent to {name}': '已发送给 {name}',
    'From {name}': '来自 {name}',
    'To {name}': '发往 {name}',
    '(whitespace)': '（空白）',
    'Nothing yet': '还没有内容',
    'Recent items are off': '最近条目已关闭',

    // ---- Keyboard（键盘）----
    'Type on whichever computer the pointer is on.': '在指针所在的电脑上打字。',
    'Hotkey': '热键',
    'Double-tap to turn cursor sharing on or off': '双击可打开或关闭光标共享',
    'Switch the keyboard with the hotkey': '用热键切换键盘',
    'Hotkey on {name}': '{name} 上的热键',
    'Swap Ctrl and Command': '交换 Ctrl 和 Command',
    '⌘ works as Ctrl': '⌘ 当作 Ctrl 使用',
    'So ⌘C copies here': '所以 ⌘C 会在这里复制',
    'Shortcuts on {name}': '{name} 上的快捷键',
    'Ctrl works as ⌘, so Ctrl+C copies there': 'Ctrl 当作 ⌘ 使用，所以 Ctrl+C 会在那边复制',
    'Type on {me} with {name}’s keyboard': '用 {name} 的键盘在 {me} 上输入',
    'Type on {name} with {me}’s keyboard': '用 {me} 的键盘在 {name} 上输入',
    'Only when Cursor is off': '仅在「光标」关闭时可用',
    'Right now': '当前状态',
  });

  // 运行时拼出来的句子。顺序：更具体的写在前面（lookup 按加入顺序逐个试）。
  const P = (re, fn) => I.pattern(re, fn);

  // Files（文件）
  P(/^They go to (.+)’s Downloads, or the folder chosen there for received files$/, (m) => `${m[1]} 的「下载」文件夹，或那边为已接收文件选定的文件夹`);
  P(/^They go to (.+)’s Downloads$/, (m) => `${m[1]} 的「下载」文件夹`);
  P(/^Select files, press (.+), then (.+) on (.+)$/, (m) => `选中文件，在 ${m[3]} 上按 ${m[1]}，再按 ${m[2]}`);
  P(/^([\d.]+ MB) of ([\d.]+ MB) · (\d+) more waiting$/, (m) => `${m[1]} / ${m[2]} · 还有 ${m[3]} 个在等待`);
  P(/^([\d.]+ MB) of ([\d.]+ MB)$/, (m) => `${m[1]} / ${m[2]}`);
  P(/^Pasting (.+) to (.+) · (\d+) of (\d+)$/, (m) => `正在把 ${m[1]} 粘贴到 ${m[2]} · 第 ${m[3]}/${m[4]} 个`);
  P(/^Sending (.+) to (.+) · (\d+) of (\d+)$/, (m) => `正在发送 ${m[1]} 到 ${m[2]} · 第 ${m[3]}/${m[4]} 个`);
  P(/^Pasting (.+) to (.+)$/, (m) => `正在把 ${m[1]} 粘贴到 ${m[2]}`);
  P(/^Sending (.+) to (.+)$/, (m) => `正在发送 ${m[1]} 到 ${m[2]}`);
  P(/^Sending (.+) \((\d+) of (\d+)\)$/, (m) => `正在发送 ${m[1]}（第 ${m[2]}/${m[3]} 个）`);
  P(/^ \((\d+) of (\d+)\)$/, (m) => `（第 ${m[1]}/${m[2]} 个）`);
  P(/^ · (\d+) of (\d+)$/, (m) => ` · 第 ${m[1]}/${m[2]} 个`);
  P(/^(.+) copied (\d+) items · press (.+)$/, (m) => `${m[1]} 复制了 ${m[2]} 个项目 · 按 ${m[3]}`);
  P(/^(.+) copied (.+) · press (.+)$/, (m) => `${m[1]} 复制了 ${m[2]} · 按 ${m[3]}`);
  P(/^Receiving (\d+) files? from \{name\}$/, (m) => `正在从 {name} 接收 ${m[1]} 个文件`);

  // Mount（挂载）
  P(/^As a drive in This PC \((.+)\), through the cable\.$/, (m) => `作为「此电脑」中的驱动器（${m[1]}），通过数据线连接。`);
  P(/^As a drive in This PC \((.+)\), over wireless debugging\.$/, (m) => `作为「此电脑」中的驱动器（${m[1]}），通过无线调试连接。`);
  P(/^As a drive in This PC, through the cable\.$/, () => '作为「此电脑」中的驱动器，通过数据线连接。');
  P(/^As a drive in This PC, over wireless debugging\.$/, () => '作为「此电脑」中的驱动器，通过无线调试连接。');

  // Clipboard（剪贴板）
  P(/^Turn on Pictures on (.+) too \(TwinDesk 2\.3 or later there\)$/, (m) => `也请在 ${m[1]} 上打开「图片」（那边需要 TwinDesk 2.3 或更新版本）`);
  P(/^Last item not sent: (.+)\.$/, (m) => `上一项未发送：${m[1]}。`);
  P(/^(To|From) \{name\} · ([^·]+) · ([^·]+)$/, (m) => `${m[1] === 'To' ? '发往 {name}' : '来自 {name}'} · ${m[2]} · ${m[3]}`);
  P(/^(Screenshot|Picture) · (\d+) × (\d+)$/, (m) => `${m[1] === 'Screenshot' ? '截图' : '图片'} · ${m[2]} × ${m[3]}`);

  // Apps（应用）
  P(/^(.+)’s apps$/, (m) => `${m[1]} 的应用`);
  P(/^(\d+) open here$/, (m) => `此处已打开 ${m[1]} 个`);
  P(/^(\d+) open on \{name\}$/, (m) => `已在 {name} 上打开 ${m[1]} 个`);
  P(/^Open (.+) on \{name\}$/, (m) => `在 {name} 上打开 ${m[1]}`);
  P(/^Pin (.+) to Start$/, (m) => `把 ${m[1]} 固定到「开始」`);

  // Audio（声音）
  P(/^Playing on (.+)$/, (m) => `正在 ${m[1]} 上播放`);
  P(/^Playing (.+)$/, (m) => `正在播放 ${m[1]} 的声音`);
  P(/^Turned off on (.+)$/, (m) => `已在 ${m[1]} 上关闭`);

  // Keyboard（键盘）
  P(/^Double-tap to type on (.+) and back$/, (m) => `双击可在 ${m[1]} 上输入并切回`);
  P(/^Set in TwinDesk on (.+)$/, (m) => `在 ${m[1]} 上的 TwinDesk 里设置`);

  // 其余「状态短句 + 名字/文件名」（较宽，放最后）
  P(/^Not sent: (.+)$/, (m) => `未发送：${m[1]}`);
  P(/^Not received: (.+)$/, (m) => `未接收：${m[1]}`);
  P(/^Received (.+)$/, (m) => `已接收 ${m[1]}`);
  P(/^Sent (.+)$/, (m) => `已发送 ${m[1]}`);
  P(/^Copying (.+)$/, (m) => `正在复制 ${m[1]}`);
  P(/^Dragging (.+)$/, (m) => `正在拖入 ${m[1]}`);
  P(/^Drive (.+)$/, (m) => `${m[1]} 盘`);
  P(/^To (.+)$/, (m) => `发送到 ${m[1]}`);
  P(/^As (.+)$/, (m) => `以 ${m[1]} 身份登录`);
})(typeof window !== 'undefined' ? window : null);
