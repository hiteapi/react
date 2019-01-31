import React, { Component } from 'react';
import './App.css';
import hiteAPIHelloWorld from './apis/hiteapi-hello-world';

const renderLine = (helloWorld, key) => <li key={key}><b>{key}</b>: {helloWorld[key]}</li>

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      status: "initial",
      helloWorld: {}
    };
  }
  
  componentDidMount () {
    this.fetchHelloWorld();
  }

  fetchHelloWorld = async () => {
    this.setState({
      state: "calling HITE API",
      helloWorld: {}
    });
    
    try {
      const helloWorld = await hiteAPIHelloWorld();
      this.setState({
	status: "done",
	helloWorld
      });
    } catch (error) {
      this.setState({
	status: "error"
      });
    }
  }
  
  render() {
    const {status, helloWorld} = this.state
    
    return (
      <div className="App">
	
        {status === "calling HITE API" && <h3>Calling API</h3>}
        {status === "error" && <h3>Oops... error!</h3>}
        {status === "done"  &&
         <div className="helloWorld-container">
           <h1>{ helloWorld.label }</h1>
           <h2>{ helloWorld.options.label }</h2>
         </div>
        }
      </div>
    )
  }
}

export default App;
