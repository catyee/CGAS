import request from '@/utils/request'
export function getRegisterList (data) {
  return request({
    url: '/pg/register/list',
    method: 'get',
    params: data
  })
}
// 新建登记
export function addRegister (data) {
  return request({
    url: '/pg/register',
    method: 'post',
    data: data
  })
}
// 查询历史登记
export function getlastRegister (data) {
  return request({
    url: '/pg/register/lastRegister',
    method: 'get',
    params: data
  })
}
// 编辑登记
export function updateRegister (data) {
  return request({
    url: '/pg/register',
    method: 'put',
    data: data
  })
}
// 获取登记详情
export function getRegister (data) {
  return request({
    url: '/pg/register/' + data,
    method: 'get'
    // params: {
    //   registerId: data
    // }
  })
}
// 删除登记
export function removeRegister (id) {
  return request({
    url: '/pg/register/' + id,
    method: 'delete'
  })
}
