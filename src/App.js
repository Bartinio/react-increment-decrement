import React, {Component, useState} from 'react';
import './App.css';
import Count from './components/Count';
import Array from './components/Array';



function App() {
  const [count, setCount] = useState(0);

  
  return (
    <div >
      <h1>You've click {count} times</h1>
      <button onClick={() => {setCount(count - 1)}}> - </button>
      <button onClick={() => {setCount(count)}}> Reset </button>
      <button onClick={() => {setCount(count + 1)}}> + </button>
    </div>
  );
}
export default App;







// class App extends Component {
//   state = {
//     count: 0
//   }
//   hendleClickPlus = () => {
//     this.setState({count: this.state.count + 1})
//   }
//   hendleClicMinus = () => {
//     this.setState({count: this.state.count - 1})
//   }

//     render() {
//       return (
//         <div className="App">
//             Hello From React
//             <br />
//             <button onClick={this.hendleClicMinus} className="btn"> - </button>
//             <p className="para">{this.state.count}</p>
//             <button onClick={this.hendleClickPlus} className="btn"> + </button>
//             <hr />
//             <Count />
//             <hr />
//             <Array />
//         </div>
//       );
//     } 
// }

// export default App;
