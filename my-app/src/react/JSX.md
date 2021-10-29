ReactDOM.render(
    <h1>hello,world</h1>,
    document.getElementById('root')
)

# JSX语法
const element = <h1>hello,world</h1>
我们建议在React中配合使用JSX。
JSX可以很好地描述UI应该呈现出它应有交互的本质形式。
JSX可能会使人联想到模板语言，但它具有JavaScript的全部功能。
JSX可以生成React“元素”


## 为什么使用JSX
React认为渲染逻辑本质上与其他UI逻辑内在耦合，比如，在UI中需要绑定处理事件、在某些时刻状态发生变化时需要通知到UI,以及需要在UI中展示准备好的数据。
React并没有采用将标记与逻辑进行分离到不同文件这种人为地分离方式，而是通过将二者共同存放在称之为“组件”的松散耦合单元之中，来实现关注点分离。

React不强制使用JSX，但是大多数人发现，在JavaScript代码中将JSX和UI放在一起时，会在视觉上有辅助作用。它还可以使React显示更多有用的错误和警告信息。

## 在JSX中嵌入表达式
const name = 'Josh Perez'
const element = <h1>hello, {name}</h1>
ReactDOM.render(
    element,
    document.getELementById('root')
)

**在JSX语法中，你可以在大括号内放置任何有效的js表达式**，user.firstName 或 formatName(user) 都是有效的 JavaScript 表达式。

**为了便于阅读，我们会将JSX拆分为多行。同事，我们建议将内容包裹在括号中，虽然这样做不是强制要求的，但是这可以避免遇到自动插入分号陷阱。**

const element = (
    <h1>
        hello, {name}
    </h1>
)

## JSX也是一个表达式
在编译之后，JSX表达式会被转为普通JavaScript函数调用，并且对其取值后得到JavaScript对象
也就是说，你可以在if语句和for循环的代码块中使用JSX，将JSX赋值给变量，把JSX当作参数传入，以及从函数中返回JSX
function greeting(user) {
    if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

## JSX特定属性

**你可以通过使用引号，来将属性值指定为字符串字面量**

const element = <div tabIndex="0"></div>

**也可以使用大括号，来在属性值中插入一个JavaScript表达式**

const element = <img src={user.avatarUrl}></img>

**在属性中嵌入JavaScript表达式时，不要在大括号外面加上引号。你应该仅使用引号（对于字符串）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。

注意：

**因为JSX语法上更接近js而不是html，所以React DOM使用camelCase(小驼峰命名)来定义属性的名称，而不使用html属性名称的命名约定**
例如JSX里的class 变成了className，而tabindex则变为tabIndex



## 使用JSX指定子元素
假如一个标签里面没有内容，你可以使用/>来闭合标签，就像XML语法一样
const element = <img src={user.avatarUrl}/>

JSX标签里能够包含很多子元素

const element = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here</h2>
    </div>
)


## JSX防止注入攻击

你可以安全地在JSX当中插入用户输入的内容

const title = response.potentiallyMaliciousInput
//直接使用是安全的
const element = <h1>{title}</h1>

React DOM在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止XSS(跨站脚本)攻击。


## JSX表示对象

**Babel会把JSX转移成一个名为React.createElement()函数调用。**
以下两种示例代码完全等效：
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：
// 注意：这是简化过的结构
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};

**这些对象被称为“React元素”。它们描述了你希望在屏幕上看到的内容。React通过读取这些对象，然后使用它们来构建DOM以及保持随时更新。**

提示：

**我们推荐在你使用的编辑器中，使用 “Babel” 提供的语言定义，来正确地高亮显示 ES6 和 JSX 代码。本网站使用与其兼容的 Oceanic Next 配色方案。**

