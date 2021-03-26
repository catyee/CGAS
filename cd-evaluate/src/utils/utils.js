// export function isContainEle (list, ) {
//     list.filters()
// }

// 下载文件保存
export function downSaveAs (blob, filename, extension) {
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, filename)
  } else {
    const link = document.createElement('a')
    const body = document.querySelector('body')
    const binaryData = new Array(blob)
    console.log(binaryData, 'binaryData')
    // binaryData.push(blob)
    console.log(extension)
    link.href = window.URL.createObjectURL(new Blob(binaryData, { type: 'application/pdf' })) // 创建对象url
    link.download = filename

    // fix Firefox
    link.style.display = 'none'
    body.appendChild(link)

    link.click()
    body.removeChild(link)

    window.URL.revokeObjectURL(link.href) // 通过调用 URL.createObjectURL() 创建的 URL 对象
  }
}

// 深拷贝
export function deepClone (obj) {
  const newObj = {}
  if (obj === null) return obj
  if (typeof obj !== 'object' && typeof obj !== 'function') return obj
  if (obj instanceof RegExp) return new RegExp(obj)
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}
// 判断字符串是否为空
export function isEmpty (str) {
  if (!String.prototype.trim) {
    // eslint-disable-next-line no-extend-native
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
    }
  }
  if (typeof str === 'number') return false
  if (str === null || str === undefined || !str.trim().length) {
    return true
  }
}
// 验证身份证
export function isSfz (idcard) {
  idcard = idcard.trim()
  var Errors = [1, '身份证号码位数不对', '出生日期错误', '身份证号码错误', '身份证地区非法']
  var area = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: 'xinjiang', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外' }
  var Y, JYM
  var S, M, ereg, Err
  var arr = []
  arr = idcard.split('')
  if (area[parseInt(idcard.substr(0, 2))] == null) {
    Err = Errors[4]
    return Err
  }
  switch (idcard.length) {
    case 15:
      if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 === 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 === 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 === 0)) {
        ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/ // 测试出生日期的合法性
      } else {
        ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/ // 测试出生日期的合法性
      }
      if (ereg.test(idcard)) {
        Err = Errors[0]
      } else {
        Err = Errors[2]
      }
      return Err
    case 18:
      if (parseInt(idcard.substr(6, 4)) % 4 === 0 || (parseInt(idcard.substr(6, 4)) % 100 === 0 && parseInt(idcard.substr(6, 4)) % 4 === 0)) {
        ereg = /^[1-9][0-9]{5}(18|19|([23]\d))[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/ // 闰年出生日期的合法性正则表达式
      } else {
        ereg = /^[1-9][0-9]{5}(18|19|([23]\d))[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/ // 平年出生日期的合法性正则表达式
      }
      if (ereg.test(idcard)) {
        S = (parseInt(arr[0]) + parseInt(arr[10])) * 7 + (parseInt(arr[1]) + parseInt(arr[11])) * 9 + (parseInt(arr[2]) + parseInt(arr[12])) * 10 + (parseInt(arr[3]) + parseInt(arr[13])) * 5 + (parseInt(arr[4]) + parseInt(arr[14])) * 8 + (parseInt(arr[5]) + parseInt(arr[15])) * 4 + (parseInt(arr[6]) + parseInt(arr[16])) * 2 + parseInt(arr[7]) * 1 + parseInt(arr[8]) * 6 + parseInt(arr[9]) * 3
        Y = S % 11
        M = 'F'
        JYM = '10X98765432'
        M = JYM.substr(Y, 1)
        if (M === arr[17]) {
          Err = Errors[0]
        } else {
          Err = Errors[3]
        }
      } else {
        Err = Errors[2]
      }
      return Err
    default:
      Err = Errors[1]
      return Err
  }
}
// 校验手机号码
export function isPhone (val) {
  var patrn = /^(((1[3456789][0-9]{1})|(15[0-9]{1}))+\d{8})$/
  if (!patrn.test(val) || val === '') {
    return false
  } else {
    return true
  }
}
// 防抖
export function _debounce (fn, delay) {
  var delay1 = delay || 200
  var timer
  return function () {
    var th = this
    var args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      timer = null
      fn.apply(th, args)
    }, delay1)
  }
}
// 节流
export function _throttle (fn, interval) {
  var last
  var timer
  var interval1 = interval || 200
  return function () {
    var th = this
    var args = arguments
    var now = +new Date()
    if (last && now - last < interval) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        fn.apply(th, args)
      }, interval1)
    } else {
      last = now
      fn.apply(th, args)
    }
  }
}
