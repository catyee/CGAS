  
import FastClick from 'fastclick'

const u = navigator.userAgent
const deviceIsIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
FastClick.prototype.focus = function (targetElement) {
  var length
  if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length
    targetElement.setSelectionRange(length, length)
    targetElement.focus()
  } else {
    targetElement.focus()
  }
}
// var deviceIsWindowsPhone = navigator.userAgent.indexOf('Windows Phone') >= 0
// var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone

FastClick.prototype.needsClick = function (target) {
  switch (target.nodeName.toLowerCase()) {
    // Don't send a synthetic click to disabled inputs (issue #62)
    case 'button':
    case 'select':
    case 'textarea':
      if (target.disabled) {
        return true
      }

      break
    case 'input':

      // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
      if ((deviceIsIOS && target.type === 'file') || target.disabled) {
        return true
      }

      break
    case 'label':
    case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
    case 'video':
      return true
  }

  return (/\bneedsclick\b/).test(target.className) || /\bvjs/.test(target.className)
}
FastClick.attach(document.body)