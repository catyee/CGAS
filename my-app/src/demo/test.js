import {React} from 'react'
import ReactDOM from "react-dom";
// React组件使用一个名为render()的方法，接收输入的数据并返回需要展示的内容。在示例中这种类似XML的写法被称为JSX。被传入的数据可在组件中通过this.props在render()访问
class HelloMessage extends React.Component {
    render() {
        return(
            <div>
                hello {this.props.name}
            </div>
        )
    }
}
ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('hello-example')
)



// 除了使用外部数据（通过this.props访问）以外，组件还可以维护其内部的状态数据（通过this.state访问）。当组件的状态数据改变时，组件会再次调用render()方法重新渲染对应的标记
class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: 0
        }
    }
    tick() {
        this.setState(state =>({
            seconds: state.seconds + 1
        }))
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(),1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render() {
        return(
            <div>
                Seconds: {this.state.seconds}
            </div>
        )
    }
}
ReactDOM.render(
    <Timer/>,
    document.getElementById('timer-example')
)

// 使用props和state，我们可以创建一个简易的Todo应用。在示例中，我们使用state来保存现有的代办事项列表以及用户的输入。尽管事件处理日看似被内联地渲染，但是它们其实只会被事件委托进行收集和调用。

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {items:[],text: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    {/* htmlFor属性设置或返回label的for属性的值，for属性指定label要绑定到哪一个表单元素 */}
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input 
                        id="new-todo" 
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        )
    }
    handleChange(e) {
        this.setState({text:e.target.value})
    }
}

// React允许你结合其他框架或库一起使用

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props)
        this.md = new Remarkable()
        this.handleChange = this.handleChange.bind(this)
        this.state = {value: 'Hello, **world**'}
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }
    getRawMarkup() {
        return {_html:this.md.render(this.state.value)}
    }
    render() {
        return(
            <div className="MarkdownEditor">
                <h3>Input</h3>
                <label htmlFor="markdown-content">
                    Enter some markdown
                </label>
                <textarea  
                    id="markdown-content"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                    />
                <h3>Output</h3>
                <div 
                className="content"
                dangerouslySetInnerHTML={this.getRawMarkup()}
                ></div>
            </div>
        )
    }
}
ReactDOM.render(
    <MarkdownEditor/>,
    document.getElementById('markdown-example')
)