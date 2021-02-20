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
    let binaryData = new Array(blob)
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
  let newObj = {}
  if (obj === null) return obj
  if (typeof obj !== 'object' && typeof obj !== 'function') return obj
  if (obj instanceof RegExp) return new RegExp(obj)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj
}
