import request from '@/JS/ajax'
// 新增合作
export function addCooperation (data) {
    return request({
      url: '/wx/cooperate',
      method: 'post',
      data: data
    })
  }
  // 新增意见
export function addSuggest (data) {
    return request({
      url: '/wx/suggest',
      method: 'post',
      data: data
    })
  }