<hr><hr>

# 1. Getting Started

Event-based Program

<hr>

## - 공식 문서

[Chrome Developers](https://developer.chrome.com/docs/extensions/mv3/getstarted/)

<hr>

##  - 주요 컴포넌트
 - service worker
 - content script
 - options page
 - UI elements

확장 컴포넌트들(Extension components)은 HTML, CSS 그리고 JS에 의해 개발된다.

최대 사이즈는 `800px * 600px` 인것으로 확인

<hr><hr>

<br><br><br><br><br>
<br><br><br><br><br>

<hr><hr>

# <주요 이슈>

<hr>

## - Content Security Policy 문제(해결) :

Refused to execute inline event handler because it violates the following Content Security Policy directive: "script-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-...'), or a nonce ('nonce-...') is required to enable inline execution. Note that hashes do not apply to event handlers, style attributes and javascript: navigations unless the 'unsafe-hashes' keyword is present.


 - how to solve

You should refactor your code to not use inline JavaScript and instead attach your event listeners with element.addEventListener.


 - reference

   - `[1]` https://developer.chrome.com/docs/apps/contentSecurityPolicy/#JSExecution

   - `[2]` https://www.w3.org/TR/CSP2/#script-src

   - `[3]` https://www.reddit.com/r/learnprogramming/comments/gu7pfh/chrome_extension_refused_to_execute_inline_event/


<hr><hr>

<br><br><br><br><br>
<br><br><br><br><br>
