import { Component } from "react";
import './login.scss'

class Login extends Component{
    render() {
        return (
            <div className="login">  
             login
             {/*   <button onClick={this.gotoHome.bind(this)}></button> */}
              <button onClick={() => {this.gotoHome()}}>跳转到home</button>
           
            </div>
        )
    }
    gotoHome() {
        this.props.history.push('/home')
    }
}
export default Login