# 1. Getting Started

event-based program이다.

<hr>

## 주요 컴포넌트
 - service worker
 - content script
 - options page
 - UI elements

확장 컴포넌트들(Extension components)은 HTML, CSS 그리고 JS에 의해 개발된다.

## 주요 이슈
 - Content Security Policy
https://developer.chrome.com/docs/apps/contentSecurityPolicy/#JSExecution

https://www.w3.org/TR/CSP2/#script-src


https://www.reddit.com/r/learnprogramming/comments/gu7pfh/chrome_extension_refused_to_execute_inline_event/

```
You should refactor your code to not use inline JavaScript and instead attach your event listeners with element.addEventListener.
```