// TwinDesk — Copyright (C) 2026 inukaasith, Erdoğan Yeşil. GPL-3.0, see LICENSE.
// 词条：一对一（关掉多设备时的经典界面）的页面文案 —— windows/ui-overview.js、
// windows/ui-share.js、windows/ui-cursor.js、windows/ui-phone.js、windows/ui-multi.js。
// 多设备（Mesh）界面的页面在 windows/mesh/ 下，词条仍在各自的 zh.*.js 里。
(function (g) {
  const I = g && g.I18n ? g.I18n : require('../i18n.js');

  I.add({
    // ── 连接页（windows/ui-overview.js）──────────────────────────────────────
    'Paired ✓': '已配对 ✓',
    'Taking over…': '正在接管…',

    // ── 光标页（windows/ui-cursor.js）────────────────────────────────────────
    'Wireless Debugging': '无线调试',
    'Control the phone with': '控制手机的方式',
    'Where the other computer is': '另一台电脑的位置',
    'Automatic: Accessibility until wireless debugging is set up': '自动：无线调试设置好之前用辅助功能',
    'Accessibility: TwinDesk on the phone taps and types. Works over Wi-Fi, Wi-Fi Direct and Bluetooth, no developer options': '辅助功能：手机上的 TwinDesk 代为点按和输入。支持 Wi-Fi、Wi-Fi Direct 和蓝牙，无需开发者选项',

    // ── 多设备页（windows/ui-multi.js，一对一里的开关）───────────────────────
    'Computers and phones connected at the same time: one clipboard and one set of notifications for all, each screen edge leading to another device, a phone and a computer together': '多台电脑和手机同时连接：所有设备共用一个剪贴板和一套通知，屏幕的每条边都能通向另一台设备，手机和电脑也能一起用',
  });

  // ── 连接页：配对进度、按地址连接（名字、地址、配对码拼出来的句子）────────────
  I.pattern(/^Can’t reach (.+) at (.+)\. Is TwinDesk open there, on the same Wi-Fi\?$/, (m) => `连不上 ${m[1]}（${m[2]}）。那边的 TwinDesk 开着吗？两台设备在同一 Wi-Fi 下吗？`);
  I.pattern(/^Check the code: (\S+) (\S+) \(the same on (.+)\?\)$/, (m) => `核对配对码：${m[1]} ${m[2]}（与 ${m[3]} 上的一致吗？）`);
  I.pattern(/^(.*?)\s*The firewall blocks TwinDesk here: Fix firewall above\.$/, (m) => (m[1] ? m[1].trim() + ' ' : '') + 'TwinDesk 在这里被防火墙挡住了：请在上面修复防火墙。');

  // ── 光标页：控制手机的方式（ADB 或辅助功能）───────────────────────────────
  I.pattern(/^ADB: full control through wireless debugging( \(not set up yet\))?$/, (m) => 'ADB：通过无线调试完全控制' + (m[1] ? '（尚未设置）' : ''));

})(typeof window !== 'undefined' ? window : null);
