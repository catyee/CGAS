function getRecentlyDate (num) {
  const now = new Date().getTime()
  const ms = num * 24 * 60 * 60 * 1000
  const resultms = now - ms
  const result = new Date(resultms)
  return result
}

function formatDate (date, fmt) {
  date = new Date(date)
  let ret
  const opt = {
    'Y+': date.getFullYear().toString(),
    'm+': (date.getMonth() + 1).toString(),
    'd+': date.getDate().toString(),
    'H+': date.getHours().toString(),
    'M+': date.getMinutes().toString(),
    'S+': date.getSeconds().toString()
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  }
  for (const k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt)
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
    }
  }
  return fmt
}
// 传入时间秒s 得到时分秒
function formatTime (value) {
  var theTime = parseInt(value)// 秒
  var middle = 0// 分
  var hour = 0// 小时

  if (theTime > 60) {
    middle = parseInt(theTime / 60)
    theTime = parseInt(theTime % 60)
    if (middle > 60) {
      hour = parseInt(middle / 60)
      middle = parseInt(middle % 60)
    }
  }
  var result = '' + parseInt(theTime) + '秒'
  if (middle > 0) {
    result = '' + parseInt(middle) + '分' + result
  }
  if (hour > 0) {
    result = '' + parseInt(hour) + '小时' + result
  }
  return result
}

export default {
  formatDate,
  formatTime,
  getRecentlyDate
}
