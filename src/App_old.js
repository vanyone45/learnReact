import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {person:[
    {name:'Dani',age:19},
    {name:'Diana',age:21},
    {name:'Barih',age:23},
  ]}

  swicthName = () =>{
    this.setState({
      person:[
        {name:'Dani Angara',age:29},
        {name:'Diana Pujayanti',age:29},
        {name:'Barih Solawa',age:20},
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hello Iam React App</h1>
        <p>This real working</p>
        <button onClick={this.swicthName}>Click Me!</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>Aku hanya bisa</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    )
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello Iam React App'));
  }
}

export default App;
