- 支持scss 需要npm run eject less stylus需要配置
- react-router react-router-dom react-router-native
 1. react-router 只实现了路由的核心功能
 2. react-router-dom 基于react-router，加入了一些浏览器运行环境下的一些功能，例如：link组件，会渲染一个a标签，BrowserRouter和HashRouter，前者使用pushState和popState事件构建路由，后者使用window.location.hash和hashchange事件构建路由
 3. react-router-native，基于react-router，类似react-router-dom，加入了react-native运行环境下的一些功能
 app.js
 ```
import React, { Fragment } from 'react'
import Login from './pages/login'
import Home from './pages/home'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Redirect to={"/home"} />
        </Switch>
      </HashRouter>
    </Fragment>
  )
}
 ```
 7.1 安装redux
执行：

npm install  redux --save
仅安装redux也是可以使用的，但是比较麻烦。redux里更新store里的数据，需要手动订阅(subscribe)更新。可以借助另一个插件（react-redux）提高开发效率。

7.2 安装react-redux
执行：

npm install react-redux --save
react-redux允许通过connect方法，将store中的数据映射到组件的props，省去了store订阅。原state中读取store的属性改用props读取。

由于store（7.5小节）还没讲到，react-redux使用方法在7.6小节介绍。

7.3 安装redux-thunk
执行：

npm install redux-thunk --save
redux-thunk允许在actionCreators里返回函函数。这样可以把业务逻辑（例如接口请求）集中写在actionCreator.js，方便复用的同时，可以使组件的主文件更简洁。