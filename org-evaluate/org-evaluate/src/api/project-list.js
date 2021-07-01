import request from '@/utils/request'
// 新增机构 项目
export function addProject (data) {
  return request({
    url: '/pg/project/',
    method: 'post',
    data: data
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
