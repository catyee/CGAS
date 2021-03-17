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

// 产生评估编号
export function getCode (data) {
  return request({
    url: '/pg/assess/generate_code',
    method: 'get',
    params: data
  })
}
// 新建评估信息
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
// h获取评估信息
export function getEvaluate (id) {
  return request({
    url: '/pg/assess/' + id,
    method: 'get'
  })
}
