// TwinDesk — Copyright (C) 2026 inukaasith, Erdoğan Yeşil. GPL-3.0, see LICENSE.
// app.html 里写死的文案（data-t / data-ta）在词典都装好之后换一遍。
// 单独一个文件就是为了执行顺序：这两个 app.html 里它排在 shared/lang/*.js 之后。
'use strict';
if (typeof window !== 'undefined' && window.I18n) window.I18n.applyDom();
