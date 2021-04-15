import { Fragment } from "react";

// react要求每个组件html的最外层必须是由一个标签包裹，且不能存在并列的标签。 如果确实需要并列标签且不想再添加一个父标签，可以使用Fragment作为最外层
function App() {
  return (
  <Fragment>
      <div className="App">
      <h1>This is React App.</h1>
    </div>
    <div>333</div>
  </Fragment>
  );
}

export default App;
