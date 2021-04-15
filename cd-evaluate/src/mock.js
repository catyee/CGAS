// 引入mockjs
import Mock from 'mockjs'
// eslint-disable-next-line no-unused-vars
const Random = Mock.Random
console.log(process.env.VUE_APP_BASE_API)
const path = process.env.VUE_APP_BASE_API + '/pg/register/list'
// 使用mockjs模拟数据
Mock.mock(RegExp(path + '.*'), 'get', options => {
  const data = {
    code: 200,
    total: 1,
    'rows|5': [
      {
        // 'name|rule': value
        'registerId|+1': 1, // id
        registerYear: '@DATE', // 随机生成日期时间

        name: '@CNAME'// 随机生成中文名字
      }
    ]

    // data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
  }
  return Mock.mock(data)
})
