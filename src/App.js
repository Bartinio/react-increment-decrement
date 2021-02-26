import React, {Component} from 'react';
import './App.css';
import Count from './components/Count';

class App extends Component {
  state = {
    count: 0
  }
  hendleClickPlus = () => {
    this.setState({count: this.state.count + 1})
  }
  hendleClicMinus = () => {
    this.setState({count: this.state.count - 1})
  }

    render() {
      return (
        <div className="App">
            Hello From React
            <br />
            <button onClick={this.hendleClicMinus} className="btn"> - </button>
            <p className="para">{this.state.count}</p>
            <button onClick={this.hendleClickPlus} className="btn"> + </button>
            <hr />
            <Count />
        </div>
      );
    } 
}

export default App;
