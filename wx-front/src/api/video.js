import request from '@/JS/ajax'

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

// 获取相关推荐视频 参数为tags:1,2,3
export function getRelatedVideo(data) {
  return request({
    url: '/wx/video/list/relate',
    method: 'get',
    params: data
  })
}