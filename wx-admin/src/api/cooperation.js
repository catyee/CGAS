import request from '@/utils/request'
// 获取合作列表
export function getCooperationList (query) {
  return request({
    url: '/wx/cooperate/list',
    method: 'get',
    params: query
  })
}
