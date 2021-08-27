# 1. Getting Started

event-based program이다.

<hr>

## 주요 컴포넌트
 - service worker
 - content script
 - options page
 - UI elements

확장 컴포넌트들(Extension components)은 HTML, CSS 그리고 JS에 의해 개발된다.

<hr>


## Create the manifest
 - create new directory
 - create `manifest.json` and add below code
```js
{
  "name": "Getting Started Example",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3
}
```
- open `chrome://extensions`
- click `Load unpacked`
- select directory which include the `manifest.json`

<hr>

## Add functionality and the background script
 - edit `manifest.json` to add service worker
```js
{
  "name": "Getting Started Example",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3,
  /////////////////////////Add/////////////////////////
  "background": {
    "service_worker": "background.js"
  }
  /////////////////////////////////////////////////////
}
```
 - create `background.js`
```js
// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
```
 - Add the storage permission : 대부분의 API들은 storage API를 포함하고 있고 이 기능을 사용하려면 허가를 해야한다.

```js
{
    "name": "Getting Started Example",
    "description": "Build an Extension!",
    "version": "1.0",
    "manifest_version": 3,
    "background": {
        "service_worker": "background.js"
    },
    /////////////////////////Add/////////////////////////
    "permissions": [
        "storage"
    ]
    /////////////////////////////////////////////////////
}
```

<hr>


## User interface

 - `popup.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="button.css">
  </head>
  <body>
    <button id="changeColor"></button>
  </body>
</html>
```

 - `manifest.json`

```js
{
  "name": "Getting Started Example",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3,
  "background": {
    "service_worker": "background.js"
  },
  "permissions": ["storage"],
  /////////////////////////Add/////////////////////////
  "action": {
    "default_popup": "popup.html"
  }
  /////////////////////////////////////////////////////
}
```

 - button.css

```css
button {
  height: 30px;
  width: 30px;
  outline: none;
  margin: 10px;
  border: none;
  border-radius: 2px;
}

button.current {
  box-shadow: 0 0 0 2px white,
              0 0 0 4px black;
}
```

 - `manifest.json`

Designation for toolbar icons
 
```js
{
  "name": "Getting Started Example",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3,
  "background": {
    "service_worker": "background.js"
  },
  "permissions": ["storage"],
  "action": {
    "default_popup": "popup.html",
    /////////////////////////Add/////////////////////////
    "default_icon": {
      "16": "/images/get_started16.png",
      "32": "/images/get_started32.png",
      "48": "/images/get_started48.png",
      "128": "/images/get_started128.png"
    }
    /////////////////////////////////////////////////////
  }
}
```
display images on the extension management page, the permissions warning, and favicon
 
```js
{
  "name": "Getting Started Example",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3,
  "background": {
    "service_worker": "background.js"
  },
  "permissions": ["storage"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "/images/get_started16.png",
      "32": "/images/get_started32.png",
      "48": "/images/get_started48.png",
      "128": "/images/get_started128.png"
    }
  },
  /////////////////////////Add/////////////////////////
  "icons": {
    "16": "/images/my16.png",
    "32": "/images/my32.png",
    "48": "/images/my48.png",
    "128": "/images/my128.png"
  }
  /////////////////////////////////////////////////////
}
```
 - `popup.js`

```js
// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});
```

 - `popup.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="button.css">
  </head>
  <body>
    <button id="changeColor"></button>
    /////////////////////////Add/////////////////////////
    <script src="popup.js"></script>
    /////////////////////////////////////////////////////
  </body>
</html>
```


<hr>




<hr>


<hr>


<hr>

<hr>

<hr>


<hr>

<hr>


<hr>


<hr>