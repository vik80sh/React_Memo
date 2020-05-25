import React, { Component } from 'react'
import Home from './Home'
import ReactMemo from './ReactMemo'

class App extends Component {
    state = {
        dataValue: "Vikash"
    }
    // componentDidMount() {
    //     this.timer = setInterval(() => { this.setState({ dataValue: "Vikash" }) }, 1000);
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timer)
    // }

    render() {
        return (
            <div className="App" style={{textAlign:"center"}}>
                <Home />
                <p>-------------------- Homp Page --------------------</p>
                <ReactMemo data={this.state.dataValue}></ReactMemo>
            </div>
        );
    }
}


export default App;