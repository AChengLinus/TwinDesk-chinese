// TwinDesk — Copyright (C) 2026 inukaasith. GPL-3.0, see LICENSE.
// Small API for the PC-screen viewer window.
'use strict';

const { contextBridge, ipcRenderer } = require('electron');

// 界面语言（settings.ui.lang）：shared/i18n.js 的浏览器分支读 window.macshare.lang
contextBridge.exposeInMainWorld('macshare', { lang: ipcRenderer.sendSync('uiLang') === 'en' ? 'en' : 'zh' });

contextBridge.exposeInMainWorld('pcview', {
  on: (fn) => ipcRenderer.on('pcview', (_e, m) => fn(m)), // offer | rtc2.ice | blur | input | volume
  send: (msg) => ipcRenderer.send('pcview:out', msg),
  state: (s) => ipcRenderer.send('pcview:state', s),
  ready: () => ipcRenderer.send('pcview:ready'),
  ctl: (m) => ipcRenderer.send('pcview:ctl', m), // Toolbar: {share?, mode?, framegen?, fullScreen?}
});
