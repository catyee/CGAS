import request from '@/utils/request'
// 获取合作列表
export function getCooperationList (query) {
  return request({
    url: '/wx/cooperate/list',
    method: 'get',
    params: query
  })
}

// 导出合作列表
export function exportCooperationList (ids) {
  return request({
    url: '/wx/cooperate/export/' + ids,
    method: 'get'
  })
}
// 获取意见列表
export function getSuggestList (query) {
  return request({
    url: '/wx/suggest/list',
    method: 'get',
    params: query
  })
}

// 导出意见列表
export function exportSuggestList (ids) {
  return request({
    url: '/wx/suggest/export/' + ids,
    method: 'get'
  })
}
