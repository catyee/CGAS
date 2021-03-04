import request from '@/utils/request'
// 导出评估表格
export function exportTable (query) {
  return request({
    url: '/asess/export',
    headers: {
      'Content-Type': 'text/plain'
    },
    method: 'post',
    data: query
  })
}
// export function download (filename) {
//   return request({
//     url: '/common/download?fileName=' + filename + '&delete=true',
//     method: 'get'
//   })
// }
