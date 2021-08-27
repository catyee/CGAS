import './home.scss'
import Header from '../../components/header'
const { Component } = require("react");

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="home" param1="abc">home</div>
            </div>
        )
    }
}
export default Home