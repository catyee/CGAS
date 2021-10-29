import React from "react";
import ReactDOM from "react-dom";
import './index.css'
class Square extends React.Component {
    render() {
        // 每次在组件中调用setState时，React都会自动更新其子组件
        return(
            <button 
                className="square" 
                onClick={()=> {this.props.onClick()}}>
                {this.props.value}
            </button>
        )
    }
}
class Board extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null)
        }
    }
    handleClick(i) {
        // 创建squares的副本 不可变性在React中非常重要 
        // 不可变性最主要的优势在于它可以帮助我们在React中创建pure components。我们可以很轻松的确定不可变数据是否发生了改变，从而确定何时对组件进行重新渲染。
        const squares = this.state.squares.slice()
        squares[i] = 'X'
        this.setState({squares:squares})
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
        const status = 'Next player: X';
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
// 模块热替换的 API
if (module.hot) {
    module.hot.accept();
}