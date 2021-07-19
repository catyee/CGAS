import request from '@/utils/request'
// 新增机构 项目
export function addProject (data) {
  return request({
    url: '/pg/project/',
    method: 'post',
    data: data
  })
}
// 修改机构 项目
export function updateProject (data) {
  return request({
    url: '/pg/project/',
    method: 'put',
    data: data
  })
}
// 删除机构 项目
export function deleteProject (id) {
  return request({
    url: '/pg/project/' + id,
    method: 'delete'
  })
}
// 获取机构 项目 列表
export function getProjectList (data) {
  return request({
    url: '/pg/project/list/',
    method: 'get',
    params: data
  })
}
// 获取项目对应的检查列表
export function getCheckListByProjectId (data) {
  return request({
    url: '/pg/assess/list/simple',
    method: 'get',
    params: data
  })
}
