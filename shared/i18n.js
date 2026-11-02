// TwinDesk — Copyright (C) 2026 inukaasith, Erdoğan Yeşil. GPL-3.0, see LICENSE.
// 中文界面（zh-CN）+ 中英文切换。代码里继续写英文，显示前用 T() 查表换成中文。
//   渲染进程：当作普通脚本加载（windows/app.html、windows/mesh/app.html，在所有 UI 模块之前），
//             T 挂在 window 上，UI 代码里直接写 T('Open')。语言取自 preload 暴露的 macshare.lang。
//   主进程：  require('./shared/i18n') 之后用 I18n.T('Open')（那边常有 const T = P.T，别用裸 T）；
//             settings.ui.lang 里存着当前语言，启动时 setLang 一下。
// 词条按用途分文件放在 shared/lang/，各自 I18n.add({...})；动态句子用 I18n.pattern(正则, 函数)。
'use strict';

const I18n = (function () {
  const dict = Object.create(null); // 英文 → 中文，整串精确匹配
  const pats = [];                  // [正则, (匹配) => 中文]：名字、数字拼出来的句子
  let lang = 'zh';                  // 'zh' | 'en'：英文模式直接原样返回，词条一个都不用撤

  function add(entries) {
    if (!entries) return api;
    for (const k of Object.keys(entries)) dict[k] = entries[k];
    return api;
  }

  // 例：pattern(/^Coming in phase (\d+)$/, (m) => `第 ${m[1]} 阶段推出`)
  function pattern(re, fn) {
    pats.push([re, fn]);
    return api;
  }

  function setLang(l) {
    lang = l === 'en' ? 'en' : 'zh';
    api.lang = lang;
    return lang;
  }

  function lookup(s) {
    const hit = dict[s];
    if (hit !== undefined) return hit;
    const t = s.trim();
    if (t !== s) { // 拼接时常带首尾空格（' ' + x）：空白留着，中间照样查
      const h2 = dict[t];
      if (h2 !== undefined) {
        const lead = s.slice(0, s.length - s.trimStart().length);
        const tail = s.slice(s.trimEnd().length);
        return lead + h2 + tail;
      }
    }
    for (let i = 0; i < pats.length; i++) {
      const m = pats[i][0].exec(s);
      if (!m) continue;
      const r = pats[i][1](m);
      if (r !== null && r !== undefined) return r; // 返回 null 表示「这条不算」，继续往下试
    }
    return s;
  }

  // 不是字符串、空串、英文模式、查不到 → 原样返回（宁可显示英文，也不要显示 undefined 或乱改数据）。
  function T(s) {
    if (typeof s !== 'string' || s === '') return s;
    if (lang === 'en') return s;
    return lookup(s);
  }

  // 调试用：哪些串还没翻译。
  function missing(s) {
    if (typeof s !== 'string' || s === '' || !/[A-Za-z]/.test(s)) return false;
    return lookup(s) === s;
  }

  // app.html 里写死的文案：<span data-t="Not paired"></span>（英文原文当 key），
  // 属性同理：<elem data-ta="title|Multi-device is on: Mesh mode, in beta">。
  function applyDom() {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
    for (const el of document.querySelectorAll('[data-t]')) el.textContent = T(el.dataset.t);
    for (const el of document.querySelectorAll('[data-ta]')) {
      const [attr, key] = String(el.dataset.ta).split('|');
      if (attr && key !== undefined) el.setAttribute(attr, T(key));
    }
  }

  const api = { T, add, pattern, dict, patterns: pats, missing, setLang, applyDom, lang, locale: 'zh-CN' };
  return api;
})();

if (typeof module === 'object' && module && module.exports) {
  // 主进程：词条照样全部装上，托盘菜单、通知、对话框才能用。
  module.exports = I18n;
  require('./lang/zh.core.js');
  require('./lang/zh.media.js');
  require('./lang/zh.comms.js');
  require('./lang/zh.io.js');
  require('./lang/zh.devices.js');
  require('./lang/zh.settings.js');
  require('./lang/zh.pages.js');
} else if (typeof window !== 'undefined') {
  window.I18n = I18n;
  window.T = I18n.T;
  // 语言来自主进程（settings.ui.lang），preload 在页面脚本之前就把它同步取回来了。
  // app.html 里写死的文案由 shared/i18n-dom.js 在词典装好之后填（它排在 shared/lang/*.js 后面）。
  try {
    if (window.macshare && window.macshare.lang) I18n.setLang(window.macshare.lang);
    document.documentElement.lang = I18n.lang === 'en' ? 'en' : 'zh-CN';
  } catch (_) { /* 不是主窗口（或 preload 还没就绪）：默认中文 */ }
}
