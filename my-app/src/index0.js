import React from "react";
import ReactDOM from "react-dom";
import './index.css'
// class Square extends React.Component {
//     render() {
//         // 每次在组件中调用setState时，React都会自动更新其子组件
//         return(
//             <button 
//                 className="square" 
//                 onClick={()=> {this.props.onClick()}}>
//                 {this.props.value}
//             </button>
//         )
//     }
// }

// 如果你想写的组件只包含一个render方法，并且不包含state，那么使用函数组件就会更简单。我们不需要定义一个继承于React.Component的类，我们可以定义一个函数，这个函数接收props作为参数，然后返回需要渲染的元素。函数组件写起来并不像class组件那么繁琐，很多组件都可以使用函数组件来写。

function Square(props) {
    // 当我们把 Square 修改成函数组件时，我们同时也把 onClick={() => this.props.onClick()} 改成了更短的 onClick={props.onClick}（注意两侧都没有括号）。
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}
class Board extends React.Component{
    //  React 中，有一个命名规范，通常会将代表事件的监听 prop 命名为 on[Event]，将处理事件的监听方法命名为 handle[Event] 这样的格式。
    renderSquare(i) {
        return (
            <Square  
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)}
        />
        )
    }
    render() {
        return(
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [
               {
                squares: Array(9).fill(null)
               }
            ],
            stepNumber: 0,
            xIsNext: true
        }
    }
    handleClick(i) {
        const history = this.state.history.slice(0,this.state.stepNumber + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()
        if(calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X': 'O'
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,

        })
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step%2) === 0
        })
    }
    render() {
        const history = this.state.history
        // 使用最新一次历史记录来确定并展示游戏的状态
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares)
        // React元素被视为JavaScript一等公民中的对象，因此我们可以把React元素在应用程序中当作参数来传递

        // 通过map方法，把历史步骤映射为代表按钮的React元素，然后可以展示出一个按钮的列表，点击这些按钮，可以“跳转”到对应的历史步骤
        const moves = history.map((step,move) => {
            const desc = move ? 
                'Go to move #' + move:
                'Go to game start'
            return (
                // 当我们需要渲染一个列表的时候，React会存储这个列表每一项的相关信息。当我们要更新这个列表时，React需要确定哪些项发生了改变。
                // React中需要给每一个列表项一个确定的key属性，它可以用来区分不同的列表项和他们的同级兄弟列表项。
                // 每当一个列表重新渲染时，React会根据每一项列表元素的key来检索上一次渲染时与每个key所匹配的列表项。
                // key是React中一个特殊的保留属性，还有一个是ref，拥有更高级的特性，当React元素被创建处理的时候，React会提取出key属性，然后把key直接存储在返回的元素上。虽然key看起来好像是props中的一个，但是你不能通过this.props.key来获取key。React会通过key来自动判断哪些组件需要更新。组件是不能访问到它的key的。
                <li key={move} >
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })
        let status;
        if(winner) {
            status = 'Winner:' + winner
        }else {
            status = 'Next player:' + (this.state.xIsNext ? 'X': 'O')
        }
        return(
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
)

function calculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i = 0; i< lines.length; i++){
        const [a,b,c] = lines[i]
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}

// 模块热替换的 API
if (module.hot) {
    module.hot.accept();
}