import { Component } from 'react';
import './App.css';
import {FunctionComponent, ClassComponent} from './test'

class App extends Component {
  state = {
    functionC : false,
    classC : false,
  }
  render(){
    return (
      <div className="App">
        <h1 className="heading">Styling using Functional and Class Component</h1>
        <button className="button1" onClick={()=>{if(this.state.functionC){this.setState({functionC : false})}else{this.setState({functionC : true})}}}>To see styling in functional component</button>
        <button className="button2" onClick={()=>{if(this.state.classC){this.setState({classC : false})}else{this.setState({classC : true})}}}>To see styling in class component</button>
        <div className="cofc">
          <div style={{visibility:this.state.functionC ? "visible":"hidden"}}>
            <FunctionComponent />
          </div>
          <div style={{visibility:this.state.classC ? "visible":"hidden"}}>
            <ClassComponent />
          </div>
        </div>

      </div>
    )
  }
}

export default App;
