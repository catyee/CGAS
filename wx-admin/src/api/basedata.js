import request from '@/utils/request'
// 基础数据维护相关接口
// 获取基础数据维护列表
export function getBasedataList (query) {
  return request({
    url: '/saddms/data/list',
    method: 'get',
    params: query
  })
}

// 增加基础数据维护
export function addBasedata (data) {
  return request({
    url: '/saddms/data',
    method: 'post',
    data: data
  })
}

// 获取基础数据维护详情
export function getBasedata (id) {
  return request({
    url: '/saddms/data/' + id,
    method: 'get'
  })
}

// 编辑基础数据维护详情
export function updateBasedata (data) {
  return request({
    url: '/saddms/data',
    method: 'put',
    data: data
  })
}
// 删除基础数据维护
export function deleteBasedata (id) {
  return request({
    url: '/saddms/data/' + id,
    method: 'delete'
  })
}
