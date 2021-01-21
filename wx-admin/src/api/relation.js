import request from '@/utils/request'
// 获取标签列表
export function getTagList (data) {
  return request({
    url: '/wx/tag/list',
    method: 'get',
    params: data
  })
}
// 新增标签
export function addTag (data) {
  return request({
    url: '/wx/tag',
    method: 'post',
    data: data
  })
}
// 删除标签
export function deleteTag (id) {
  return request({
    url: '/wx/tag/' + id,
    method: 'delete'
  })
}
// 修改标签
export function updateTag (data) {
  return request({
    url: '/wx/tag',
    method: 'put',
    data: data
  })
}
