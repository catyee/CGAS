import { Fragment } from "react";
import { HashRouter, Switch,Route, Redirect } from "react-router-dom";
import Login from './pages/login'
import Home from './pages/home'

// react要求每个组件html的最外层必须是由一个标签包裹，且不能存在并列的标签。 如果确实需要并列标签且不想再添加一个父标签，可以使用Fragment作为最外层
function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
          <Route exact path="/" component={Home}></Route>
          <Redirect to={"/home"}></Redirect>
        </Switch>
      </HashRouter>
    </Fragment>
  );
}

export default App;
