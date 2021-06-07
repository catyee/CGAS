import request from '@/utils/request'
// 新增管理员
export function addUser (data) {
  return request({
    url: '/system/user/',
    method: 'post',
    data: data
  })
}
// 更新管理员信息
export function updateUser (data) {
  return request({
    url: '/system/user/',
    method: 'put',
    data: data
  })
}
// 获取用户信息
export function getUser (id) {
  return request({
    url: '/system/user/' + id,
    method: 'get'
  })
}
export function getUserList (query) {
  return request({
    url: '/system/user/list',
    method: 'get',
    params: query
  })
}
// 删除用户
export function deleteUser (id) {
  return request({
    url: '/system/user/' + id,
    method: 'delete'
  })
}

// 批量启用用户
export function enableUser (ids) {
  return request({
    url: '/system/user/enable/' + ids,
    method: 'put'
  })
}
// 批量禁用用户
export function disableUser (ids) {
  return request({
    url: '/system/user/disenable/' + ids,
    method: 'put'
  })
}
// 重置密码
export function resetPwd (data) {
  return request({
    url: '/system/user/resetPwd/',
    method: 'put',
    data: data
  })
}
// 申请重置密码
export function requestReset (data) {
  return request({
    url: '/system/user/apply/resetPwd',
    method: 'put',
    data: data
  })
}
// 更新密码
export function updatePassword (data) {
  return request({
    url: '/system/user/profile/updatePwd',
    method: 'put',
    params: data
  })
}
