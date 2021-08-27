# 1. Getting Started

event-based program이다.

<hr>

## 주요 컴포넌트
 - service worker
 - content script
 - options page
 - UI elements

확장 컴포넌트들(Extension components)은 HTML, CSS 그리고 JS에 의해 개발된다.

최대 사이즈는 `800px * 600px` 인것으로 확인

# <주요 이슈>
## - Content Security Policy 문제(해결) :
 - how to solve

You should refactor your code to not use inline JavaScript and instead attach your event listeners with element.addEventListener.


 - reference

   - `[1]` https://developer.chrome.com/docs/apps/contentSecurityPolicy/#JSExecution

   - `[2]` https://www.w3.org/TR/CSP2/#script-src

   - `[3]` https://www.reddit.com/r/learnprogramming/comments/gu7pfh/chrome_extension_refused_to_execute_inline_event/

