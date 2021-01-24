import request from '@/utils/request'
// 新增视频
export function addVideo (data) {
  return request({
    url: '/wx/video',
    method: 'post',
    data: data
  })
}
