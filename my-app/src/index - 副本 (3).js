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
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }
    handleClick(i) {
        // 创建squares的副本 不可变性在React中非常重要 
        // 不可变性最主要的优势在于它可以帮助我们在React中创建pure components。我们可以很轻松的确定不可变数据是否发生了改变，从而确定何时对组件进行重新渲染。
        const squares = this.state.squares.slice()
        if(calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X': 'O'
        this.setState({
            squares:squares,
            xIsNext: !this.state.xIsNext
        })
    }
    //  React 中，有一个命名规范，通常会将代表事件的监听 prop 命名为 on[Event]，将处理事件的监听方法命名为 handle[Event] 这样的格式。
    renderSquare(i) {
        return (
            <Square  
                value={this.state.squares[i]} 
                onClick={() => this.handleClick(i)}
        />
        )
    }
    render() {
        const winner = calculateWinner(this.state.squares)
        let status
        if(winner) {
            status = 'Winner:' + winner
        }else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');
        }
        return(
            <div>
                <div className="status">{status}</div>
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
    render() {
        return(
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/*status*/}</div>
                    <ol>{/*TODO*/}</ol>
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