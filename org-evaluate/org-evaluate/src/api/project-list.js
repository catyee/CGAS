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
