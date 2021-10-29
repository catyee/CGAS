# 组件允许你将UI拆分成独立可复用的代码片段，并对每个片段进行独立构思**

**组件，从概念上类似于JavaScript函数。它接受任意的入参（即props）,并返回用于描述页面展示内容的React元素。**

## 函数组件与class组件

定义组件最简单的方式就是编写js函数

function Welcome(props) {
    return <h1>hello,{props.name}</h1>
}
该函数是一个有效的React组件，因为它接收唯一带有数据的“props”（代表属性）对象并返回一个React元素。这类组件被称为“函数组件”，因为它本质上就是JavaScript函数。

你同时还可以使用ES6的class来定义组件：

class Welcome extends React.Component {
    render() {
        return <h1>Hello,{this.props.name}</h1>
    }
}


## 渲染组件

之前，我们遇到的React元素都只是DOM标签：
const element = <div />;

不过，React元素也可以是用于自定义的组件

const element = <Welcome name="Sara" />;

**当React元素是用户自定义组件时，它会将JSX所接收的属性以及子组件转换为单个对象传递给组件，这个对象被称之为“props”**

例如，这段代码会在页面上渲染 “Hello, Sara”：

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}
const element = <Welcome name="Sara" />;

ReactDOM.render(
    element,
    document.getElementById('root')
)

1. 我们调用 ReactDOM.render() 函数，并传入 <Welcome name="Sara" /> 作为参数。
2. React 调用 Welcome 组件，并将 {name: 'Sara'} 作为 props 传入。
3. Welcome 组件将 <h1>Hello, Sara</h1> 元素作为返回值。
4. React DOM将DOM高效地更新为<h1>Hello, Sara</h1>


**注意**

**组件名必须以大写字母开头。**

**React会将以小写字母开头的组件视为原生的DOM标签。例如，<div /> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome。**



## 组合组件
组件可以在其输出中引用其他组件。这就可以让我们用同一组件来抽象出任意层次的细节。按钮，表单，对话框，甚至整个屏幕的内容：在 React 应用程序中，这些通常都会以组件的形式表示。

例如，我们可以创建一个可以多次渲染 Welcome 组件的 App 组件：

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


**通常来说，每个新的React应用程序的顶层组件都是App组件。但是，如果你将React集中到现有应用程序中，你可能需要使用像Button这样的小组件，并自下而上地将这类组件逐步应用到视图层的每一处。**



## 提取组件

将组件拆分为更小的组件

例如，参考如下 Comment 组件：
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

该组件用于描述一个社交媒体网站上的评论功能，它接收author，text，date作为props

该组件由于嵌套的关系，变得难以维护，且很难复用它的各个部分。因此，让我们从中提取一些组件出来。

首先我们提取Avatar组件：
function Avatar(props) {
    return (
          <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
    )
}

**Avatar 不需知道它在 Comment 组件内部是如何渲染的。因此，我们给它的 props 起了一个更通用的名字：user，而不是 author。我们建议从组件自身的角度命名props，而不是依赖于调用组件的上下文命名。**
我们现在针对 Comment 做些微小调整：
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <!-- here -->
        <Avatar user={props.author} />
        <!-- here -->
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

接下来，我们将提取 UserInfo 组件，该组件在用户名旁渲染 Avatar 组件：
function UserInfo(props) {
    return(
        <div className="UserInfo">
            <!-- here -->
            <Avatar user={props.user} />
            <!-- here -->
            <div className="UserInfo-name">
                {props.user.name}
            </div>
      </div>
    )
}
进一步简化 Comment 组件：
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

最初看上去，提取组件可能是一件繁重的工作，但是，在大型应用中，构建可复用组件库是完全值得的。根据经验来看，如果 UI 中有一部分被多次使用（Button，Panel，Avatar），或者组件本身就足够复杂（App，FeedStory，Comment），那么它就是一个可复用组件的候选项。


## Props的只读性

**组件无论是使用函数声明还是使用class声明，都绝不能修改自身的props**

function sum(a,b) {
    return a + b
}
这样的函数被称为“纯函数”，因为该函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果

相反，下面这个函数则不是纯函数，因为它更改了自己的入参
function withdraw(account,amount) {
    account.total -= amount
}

React非常灵活，但它也有一个严格的规则

**所有React组件都必须像纯函数一样包含它们的props不被更改**


当然，应用程序的UI是动态的，并会伴随着时间的推移而变化