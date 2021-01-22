import request from '@/utils/request'
import { relations } from '@/libs/constant'
// 获取标签列表
export function getTagList (data) {
  return request({
    url: '/wx/tag/list',
    method: 'get',
    params: data
  })
}
// 新增标签
export function addTag (data) {
  return request({
    url: '/wx/tag',
    method: 'post',
    data: data
  })
}
// 删除标签
export function deleteTag (id) {
  return request({
    url: '/wx/tag/' + id,
    method: 'delete'
  })
}
// 修改标签
export function updateTag (data) {
  return request({
    url: '/wx/tag',
    method: 'put',
    data: data
  })
}

// 添加关系
export function addRelation ({ tag1, tag2, currentRelation }) {
  let data
  // 后端要求格式 相关{relateTags: 'tag1,tag2'} 隶属于 {parentTags: 'tag2,tag1'}
  switch (currentRelation) {
    case relations[0]:
      data = {
        relateTags: `${tag1},${tag2}`
      }
      break
    case relations[1]:
      data = {
        parentTags: `${tag2},${tag1}`
      }
      break
  }
  return request({
    url: '/wx/tag/relate',
    method: 'post',
    data: data
  })
}

// 获取关系列表
export function getRelationList () {
  return request({
    url: '/wx/tag/relate/list',
    method: 'get'
  })
}
