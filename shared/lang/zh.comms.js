// TwinDesk — Copyright (C) 2026 inukaasith, Erdoğan Yeşil. GPL-3.0, see LICENSE.
// 中文词条 —— zh.comms。英文原串做 key，中文做值。
// 动态句子（带设备名/数字）用 I18n.pattern(/正则/, (m) => `...$1...`)，放在同一个文件里。
// 覆盖：shared/ui-calls.js（通话）、shared/ui-messages.js（短信）、shared/ui-hub.js（这两页共用的
// 顶部提示、蓝牙/Wi-Fi 提示）、windows/ui-notifs.js（通知）。
(function (g) {
  const I = g && g.I18n ? g.I18n : require('../i18n.js');
  I.add({
    // ── 通话页（shared/ui-calls.js）────────────────────────────────────────────
    'Answer and make your phone’s calls here.': '在这里接听和拨打手机电话。',
    'Answer': '接听',
    'Decline': '拒接',
    'Mute': '静音',
    'Unmute': '取消静音',
    'End': '挂断',
    'Call': '通话',
    'Keypad': '拨号键盘',
    'Enter a number': '输入号码',
    'Number': '号码',
    'Contacts': '联系人',
    'Search contacts': '搜索联系人',
    'Show more': '显示更多',
    'Talk and listen on this computer': '在本机上通话和收听',
    'Talk and listen on {me}': '在 {me} 上通话和收听',
    'Which phone': '哪台是手机',
    'Sound': '声音',
    'Sound here': '声音在本机',
    'Sound on the phone': '声音在手机',
    'Starting…': '正在启动…',
    'Connect': '连接',
    'Open Bluetooth settings': '打开蓝牙设置',
    'Forget?': '忽略？',
    'Bluetooth setup': '蓝牙设置',
    '3. Confirm the code on both': '3. 在两台设备上确认配对码',
    '2. Pair from {me}': '2. 从 {me} 发起配对',
    'Over classic Bluetooth, which carries the calls’ sound': '走经典蓝牙，通话声音由此传输',
    'TwinDesk connects as soon as they’re paired': '配对完成后 TwinDesk 会立即连接',
    'Recent': '最近通话',
    'Now': '当前',
    'No contacts match': '没有匹配的联系人',
    'No contacts on the phone': '手机上还没有联系人',
    'No calls yet': '暂无通话',
    'Unknown number': '未知号码',
    'Incoming': '来电',
    'Outgoing': '去电',
    'Missed': '未接',
    'Declined': '已拒接',
    'Blocked': '已拦截',
    'Voicemail': '语音留言',

    // ── 短信页（shared/ui-messages.js）─────────────────────────────────────────
    'New message': '新消息',
    'Earlier messages': '更早的消息',
    'To: a number': '收件人：号码',
    'To': '收件人',
    'Text message': '短信内容',
    'Message': '短信',
    'Answer group conversations on the phone.': '群聊请在手机上回复。',
    'Choose a conversation': '选择一个会话',
    'No conversations': '暂无会话',
    'Sending…': '发送中…',
    'Not sent': '未发送',
    'Allow sending on the phone to answer here': '请在手机上允许发送，才能在这里回复',

    // ── 通话/短信页共用的顶部条与蓝牙提示（shared/ui-hub.js）──────────────────
    'Allow on the phone': '在手机上允许',
    'your phone': '你的手机',
    'Wi-Fi only': '仅限 Wi-Fi',
    'Only available over Wi-Fi: you’re connected over Bluetooth. Connect with Wi-Fi Direct, or join the same Wi-Fi network.': '仅在 Wi-Fi 下可用：你当前通过蓝牙连接。请用 Wi-Fi Direct 连接，或加入同一 Wi-Fi 网络。',
    'Wi-Fi Direct didn’t come up': 'Wi-Fi Direct 没能建立',
    'Try again': '再试一次',
    'Connect with Wi-Fi Direct': '用 Wi-Fi Direct 连接',
    'Through wireless debugging': '通过无线调试',
    'Photos and videos': '照片和视频',
    'its calls': '它的通话',
    'who is calling and the call history': '来电显示和通话记录',
    'making calls': '拨打电话',
    'answering and ending calls': '接听和挂断通话',
    'contact names': '联系人姓名',
    'reading texts': '读取短信',
    'sending texts': '发送短信',
    'Install puts it on the phone through wireless debugging; your settings stay.': '「安装」会通过无线调试把它装到手机上，你的设置会保留。',
    'Set up wireless debugging on the Phone page, then Install.': '先在「手机」页设置好无线调试，再点「安装」。',
    'Paired with this computer over Bluetooth': '已通过蓝牙与本机配对',

    // ── 通知页（windows/ui-notifs.js）─────────────────────────────────────────
    'See one computer’s notifications on the other.': '在一台电脑上查看另一台电脑的通知。',
    'Hide message text': '隐藏消息正文',
    'Only the app and the title': '只显示应用和标题',
    'Show {name}’s notifications on {me}': '在 {me} 上显示 {name} 的通知',
    'Show {me}’s notifications on {name}': '在 {name} 上显示 {me} 的通知',
    'Recent Notifications': '最近通知',
    'Notification': '通知',
    'As Windows notifications, from TwinDesk': '以 Windows 通知的形式，来自 TwinDesk',
    'Windows’ notification list can’t be read': '无法读取 Windows 的通知列表',
    'Also switches it on the other computer': '同时会在另一台电脑上打开',
    'As native notifications there': '在那边以系统通知的形式',
    'No notifications yet': '暂无通知',
    'Incoming notifications from WhatsApp, Instagram, and other apps will appear here in real-time.': '来自 WhatsApp、Instagram 等应用的收到通知会实时显示在这里。',
    'Apps show up here after their first notification while sending is on': '发送打开后，应用发出第一条通知后就会出现在这里',
  });

  // ── 通话页：正在进行的通话、拨号、通话记录 ──────────────────────────────────
  I.pattern(/^Incoming call( · .+)?$/, (m) => `来电${m[1] || ''}`);
  I.pattern(/^Calling · (.+) · Sound here$/, (m) => `正在呼叫 · ${m[1]} · 声音在本机`);
  I.pattern(/^Calling · (.+) · Sound on the phone$/, (m) => `正在呼叫 · ${m[1]} · 声音在手机`);
  I.pattern(/^Calling · (.+)$/, (m) => `正在呼叫 · ${m[1]}`);
  I.pattern(/^On a call · (.+) · Sound here$/, (m) => `通话中 · ${m[1]} · 声音在本机`);
  I.pattern(/^On a call · (.+) · Sound on the phone$/, (m) => `通话中 · ${m[1]} · 声音在手机`);
  I.pattern(/^On a call · (.+)$/, (m) => `通话中 · ${m[1]}`);
  I.pattern(/^(Incoming|Outgoing|Missed|Declined|Blocked|Voicemail)( · .+)$/, (m) => `${I.T(m[1])}${m[2]}`);
  I.pattern(/^(\d+) numbers$/, (m) => `${m[1]} 个号码`);
  I.pattern(/^Off: calls sound on (.+)$/, (m) => `关：通话声音在 ${m[1]}`);
  I.pattern(/^When (.+) is connected$/, (m) => `当 ${m[1]} 连接时`);
  I.pattern(/^Which one is (.+)\?$/, (m) => `哪一台是 ${m[1]}？`);

  // ── 通话页：蓝牙配对设置的步骤与状态 ───────────────────────────────────────
  I.pattern(/^1\. On (.+): Settings › Bluetooth › Pair new device$/, (m) => `1. 在 ${m[1]} 上：设置 › 蓝牙 › 配对新设备`);
  I.pattern(/^(.+) can be found while that screen is open$/, (m) => `${m[1]} 在该页面打开时可以被发现`);
  I.pattern(/^In \{me\}’s Bluetooth settings, add a device and pick (.+)$/, (m) => `在 {me} 的蓝牙设置里添加设备，然后选择 ${m[1]}`);
  I.pattern(/^Pairing… Confirm the code on (.+) and on \{me\}$/, (m) => `配对中… 请在 ${m[1]} 和 {me} 上确认配对码`);
  I.pattern(/^Pairing… Confirm it on (.+) and on \{me\}$/, (m) => `配对中… 请在 ${m[1]} 和 {me} 上确认配对码`);
  I.pattern(/^Looking for (.+)… TwinDesk connects as soon as they’re paired$/, (m) => `正在查找 ${m[1]}… 配对完成后 TwinDesk 会立即连接`);
  I.pattern(/^Paired with (.+)$/, (m) => `已与 ${m[1]} 配对`);
  I.pattern(/^(.+) and \{me\} forget each other, over classic Bluetooth and LE, then pair again from the start$/, (m) => `${m[1]} 和 {me} 会互相取消配对（经典蓝牙和 LE 都算），之后需要从头重新配对`);
  I.pattern(/^(.+) and \{me\} are paired over Bluetooth LE only, which can’t carry a call: Forget below, then pair them again in Bluetooth settings$/, (m) => `${m[1]} 和 {me} 只通过蓝牙 LE 配对，无法承载通话：请在下方点「忽略」取消配对，然后到蓝牙设置里重新配对`);
  I.pattern(/^(.+) keeps its old pairing with \{me\}: forget \{me\} in Bluetooth settings on (.+) \(they opened there\), then pair them again in Bluetooth settings$/, (m) => `${m[1]} 还保留着与 {me} 的旧配对：请在 ${m[2]} 的蓝牙设置里取消与 {me} 的配对（那边的设置页是它打开的），然后到蓝牙设置里重新配对`);
  I.pattern(/^Bluetooth is off on (.+)$/, (m) => `${m[1]} 上的蓝牙已关闭`);
  I.pattern(/^Not paired with (.+) over classic Bluetooth: pair them in Bluetooth settings, as below\. TwinDesk connects once they are$/, (m) => `未与 ${m[1]} 通过经典蓝牙配对：按下面的步骤在蓝牙设置里配对。配对完成后 TwinDesk 会自动连接`);

  // ── 通话/短信页顶部条：没开、没连、没权限（shared/ui-hub.js 的 UI.hubTop）───
  I.pattern(/^Off\. When you switch it on, (.+) asks for what it needs\.$/, (m) => `已关闭。打开后，${m[1]} 会请求所需的权限。`);
  I.pattern(/^Connect (.+) to use (.+): click it at the top of the sidebar\.$/, (m) => `连接 ${m[1]} 后才能使用 ${m[2]}：点侧边栏顶部的那台设备。`);
  I.pattern(/^Waiting for (.+)… TwinDesk on it needs to be up to date for (.+)\.$/, (m) => `正在等待 ${m[1]}… 上面的 TwinDesk 需要更新到最新版才能使用 ${m[2]}。`);
  I.pattern(/^Files needs Android 11 or later on (.+)\. Mount works through ADB instead\.$/, (m) => `在 ${m[1]} 上使用文件功能需要 Android 11 或更高版本。挂载可以改走 ADB。`);
  I.pattern(/^(.+) need TwinDesk with notifications on (.+) \(Android doesn’t let downloaded apps read texts\)\. Install puts it on the phone through wireless debugging; your settings stay\.$/, (m) => `${m[1]}需要 ${m[2]} 上开着通知权限的 TwinDesk（Android 不允许下载安装的应用读取短信）。「安装」会通过无线调试把它装到手机上，你的设置会保留。`);
  I.pattern(/^(.+) need TwinDesk with notifications on (.+) \(Android doesn’t let downloaded apps read texts\)\. Set up wireless debugging on the Phone page, then Install\.$/, (m) => `${m[1]}需要 ${m[2]} 上开着通知权限的 TwinDesk（Android 不允许下载安装的应用读取短信）。先在「手机」页设置好无线调试，再点「安装」。`);
  I.pattern(/^Allow All files access for TwinDesk on (.+): it reads and writes the phone’s storage itself, no ADB\. Android opens the setting there\.$/, (m) => `允许 ${m[1]} 上的 TwinDesk 访问所有文件：它自己读写手机存储，不需要 ADB。Android 会在那边打开相应设置。`);
  I.pattern(/^Allow (.+) to share its photos and videos with TwinDesk\.$/, (m) => `允许 ${m[1]} 把照片和视频共享给 TwinDesk。`);
  I.pattern(/^Allow (.+) on (.+): TwinDesk asks for (.+)\.$/, (m) => `允许 ${m[2]} 上的${m[1]}：TwinDesk 需要 ${m[3].split(', ').map(I.T).join('、')}。`);
  I.pattern(/^Only the photos you chose on (.+) show here\.$/, (m) => `这里只显示你在 ${m[1]} 上选中的照片。`);
  I.pattern(/^Some of (.+) needs more on (.+): (.+)\.$/, (m) => `${m[1]}中的一部分需要在 ${m[2]} 上再授权：${m[3].split(', ').map(I.T).join('、')}。`);
  I.pattern(/^Check (.+): Android asks there\.$/, (m) => `请在 ${m[1]} 上确认：Android 会在那边询问。`);
  I.pattern(/^Tap the notification on (.+)\.$/, (m) => `点按 ${m[1]} 上的通知。`);

  // ── 蓝牙下需要 Wi-Fi 的页面（shared/ui-hub.js 的 UI.wifiGate）────────────────
  I.pattern(/^Only available over Wi-Fi Direct\. Connecting…$/, () => '仅在 Wi-Fi Direct 下可用。正在连接…');
  I.pattern(/^Only available over Wi-Fi Direct or the same Wi-Fi network: you’re connected over Bluetooth\.$/, () => '仅在 Wi-Fi Direct 或同一 Wi-Fi 网络下可用：你当前通过蓝牙连接。');
  I.pattern(/^Only available over Wi-Fi Direct: you’re connected over Bluetooth\. Or join the same Wi-Fi network\.$/, () => '仅在 Wi-Fi Direct 下可用：你当前通过蓝牙连接。也可以加入同一 Wi-Fi 网络。');
  I.pattern(/^Only available over Wi-Fi Direct\. (.+)\.$/, (m) => `仅在 Wi-Fi Direct 下可用。${m[1]}。`);

  // ── 手机声音怎么到这台电脑（shared/ui-hub.js 的 UI.phoneSound，声音页在用）──
  I.pattern(/^Playing\. (.+) captures it, so it plays there too \(wireless debugging moves it off the phone\)$/, (m) => `播放中。声音由 ${m[1]} 采集，所以那边也会播放（无线调试会把声音从手机上移开）`);
  I.pattern(/^Tap Start on (.+) \(its notification, or Sound in TwinDesk there\)$/, (m) => `在 ${m[1]} 上点「开始」（它的通知里，或那边 TwinDesk 的「声音」）`);
  I.pattern(/^Asking (.+)…$/, (m) => `正在询问 ${m[1]}…`);
  I.pattern(/^Over Wi-Fi: through wireless debugging, or captured by (.+)$/, (m) => `通过 Wi-Fi：走无线调试，或由 ${m[1]} 采集`);

  // ── 短信页：没发出去的那条 ────────────────────────────────────────────────
  I.pattern(/^Not sent: (.+)$/, (m) => `未发送：${m[1]}`);

  // ── 通知页：今天的条数（windows/ui-notifs.js）──────────────────────────────
  I.pattern(/^(\d+) shown$/, (m) => `已显示 ${m[1]} 条`);
  I.pattern(/^(\d+) sent$/, (m) => `已发送 ${m[1]} 条`);

  // ── 通话页：蓝牙耳机连在本机时，通话声音只能留在手机上（windows/callaudio.js 的 LIMIT，
  //     主进程当数据传给渲染进程，显示处是 shared/ui-calls.js:236 的 audioRow.setHint）──
  I.add({
    'Through this PC’s wired or built-in speakers and microphone only. Windows keeps calls on the phone while a Bluetooth headset is connected to this PC, so no app can bring them to the headset': '只能用这台电脑的有线或内置音箱和麦克风。蓝牙耳机连到这台电脑上时，Windows 会把通话留在手机里，所以任何应用都没法把通话转到耳机上',
  });
})(typeof window !== 'undefined' ? window : null);
