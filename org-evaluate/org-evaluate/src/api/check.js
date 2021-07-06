import request from '@/utils/request'
// 新建检查信息
export function addEvaluate (data) {
  return request({
    url: '/pg/assess',
    method: 'post',
    data: data
  })
}
// 修改评估信息
export function updateEvaluate (data) {
  return request({
    url: '/pg/assess',
    method: 'put',
    data: data
  })
}
// 获取评估信息
export function getEvaluate (id) {
  return request({
    url: '/pg/assess/' + id,
    method: 'get'
  })
}

// 导出评估表格
export function exportTable (query) {
  return request({
    url: '/pdf/export',
    headers: {
      'Content-Type': 'text/plain'
    },
    method: 'post',
    data: query
  })
}
// 复查
export function reviewEvaluate (data) {
  return request({
    url: '/pg/assess/review',
    method: 'get',
    params: data
  })
}
