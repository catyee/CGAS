
let baseUrl = '' // 这里是一个默认的url，可以没有
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = 'http://192.168.1.13:8080' // 开发环境url
    break
    //   case 'ceshi': // 注意这里的名字要和步骤二中设置的环境名字对应起来
    //     baseUrl = 'http://localhost:3000/' // 测试环境中的url
    //     break
  case 'production':
    baseUrl = 'http://' + window.location.host + '/api' // 生产环境url
    // baseUrl = 'http://101.201.211.8:8080'
    break
}

export default baseUrl
