# React是什么
- React是一个声明式，高效且灵活的用于构建用户界面的JavaScript库，使用React可以将一些简短、独立的代码片段组合成复杂的UI界面，这些代码片段被称作“组件”

- React中**拥有多种不同类型的组件**，我们先从React.Component的子类开始介绍：
```
    class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Oculus</li>
                </ul>
            </div>
    );
  }
}

// 用法示例: <ShoppingList name="Mark" />
```
我们通过使用组件来告诉React我们希望在屏幕上看到什么，当数据发生改变时，React会高效地更新并渲染我们的组件。

**其中ShoppingList是一个React组件类，或者说是一个React组件类型。一个组件接收一些参数，我们把这些参数叫做props，然后通过render方法返回需要展示在屏幕上的视图的层次结构**

**render方法的返回值描述了你希望在屏幕上看到的内容。React根据描述，然后把结果展示出来。更确切地来说，render方法返回了一个React元素，这是一种对渲染内容的轻量级描述。大多数的React开发者使用了一种名为“JSX”的特殊语法，JSX可以让你更轻松地书写这些结构。语法<div/>会被编译成React.createElement('div')**
上述的代码等同于：

return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);

**在JSX中，可以任意使用JavaScript表达式。只需要用一个大括号把表达式括起来。每一个React元素事实上都是一个JavaScript对象，你可以在你的程序中把它保存在变量中或者作为参数传递**

**当你遇到需要同时获取多个子组件数据，或者两个组件之间需要相互通讯的情况时，需要把子组件的state数据提升至其共同的父组件中保存。之后父组件可以通过props将状态数据传递到子组件中。这样应用当中所有组件的状态数据就能够更方便地同步共享了。**

// 当我们需要渲染一个列表的时候，React会存储这个列表每一项的相关信息。当我们要更新这个列表时，React需要确定哪些项发生了改变。
// React中需要给每一个列表项一个确定的key属性，它可以用来区分不同的列表项和他们的同级兄弟列表项。
// 每当一个列表重新渲染时，React会根据每一项列表元素的key来检索上一次渲染时与每个key所匹配的列表项。
// key是React中一个特殊的保留属性，还有一个是ref，拥有更高级的特性，当React元素被创建处理的时候，React会提取出key属性，然后把key直接存储在返回的元素上。虽然key看起来好像是props中的一个，但是你不能通过this.props.key来获取key。React会通过key来自动判断哪些组件需要更新。组件是不能访问到它的key的。

我们强烈建议，每次只要你构建动态列表的时候，都要指定一个合适的key。如果你没有找到一个合适的key，那么你就需要考虑重新整理你的数据结构了。
**组件的key值并不需要在全局都保证唯一，只需要在当前的同一级元素之前保证唯一即可**