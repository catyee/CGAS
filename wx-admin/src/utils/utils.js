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
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}
// 密码校验规则 – 至少1个大写英文字母
// – 至少1个小写英文字母
// – 至少1位数字
// – 至少1个特殊字符
// – 最少8个长度
export const pwdRule = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/

export const checkPwdSimple = function (value) {
  if (!/(?=.*?[A-Z])/.test(value)) {
    return '必须包含大写字母'
  }
  if (!/(?=(.*[a-z]){1,})/.test(value)) {
    return '必须包含小写字母'
  }
  if (!/(?=(.*[\d]){1,})/.test(value)) {
    return '必须包含数字'
  }
  if (!/(?=(.*[\W]){1,})/.test(value)) {
    return '必须包含特殊字符'
  }
  if (!/(?!.*\s).{8,}/.test(value)) {
    return '至少为8位'
  }

  return true
  // if (!/(?=.*?[A-Z])/.test(value)) {
  //   return '至少包含1个大写英文字母'
  // }
}
