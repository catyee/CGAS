import React from "react";
import ReactDOM from "react-dom";
import './index.css'
class Square extends React.Component {
    // 使用组件的私有属性state存储当前每个方格的值，并且在每次方格被点击的时候改变这个值
    // 添加一个构造函数，用来初始化state
    constructor(props) {
        // 在JavaScript class中，每次你定义其子类的构造函数时，都需要调用super方法。因此，在所有含有构造函数的React组件中，构造函数必须以super(props)开头
        super(props);
        this.state = {
            value: null
        }
    }
    render() {
        // 每次在组件中调用setState时，React都会自动更新其子组件
        return(
            <button className="square" 
                   onClick={()=> {this.setState({value: 'X'})}}>
                {this.state.value}
            </button>
        )
    }
}
class Board extends React.Component{
    renderSquare(i) {
        return <Square  value={i}/>;
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