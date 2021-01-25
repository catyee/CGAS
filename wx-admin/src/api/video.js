import request from '@/utils/request'
// 新增视频
export function addVideo (data) {
  return request({
    url: '/wx/video',
    method: 'post',
    data: data
  })
}
// 获取视频列表
export function getVideoList (data) {
  return request({
    url: '/wx/video/list',
    method: 'get',
    params: data
  })
}
// 获取视频详情id
export function getVideo (id) {
  return request({
    url: '/wx/video/' + id,
    method: 'get'
  })
}
// 删除视频
export function removeVideo (id) {
  return request({
    url: '/wx/video/' + id,
    method: 'delete'
  })
}
