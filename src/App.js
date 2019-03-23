import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium, { StyleRoot } from 'radium';

import Person from './Person/Person';

class App extends Component {
  state = {person:[
    {id:'1',name:'Dani',age:19},
    {id:'2',name:'Diana',age:21},
    {id:'3',name:'Barih',age:23},
  ],showPersons : false}

  swicthName = (newName) =>{
    this.setState({
      person:[
        {id:'1',name:newName,age:19},
        {id:'2',name:'Diana',age:21},
        {id:'3',name:'Barih',age:23},
      ]
    })
  }

  nameChangeHandler = (event,id)=>{

    const personIndex = this.state.person.findIndex(p=>
      p.id === id
    );

    const person = {...this.state.person[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.person];

    persons[personIndex] = person;

    this.setState({
      person:persons
    })
  }

  togglePersonHandle = ()=>{
    this.setState({showPersons:!this.state.showPersons});
  }

  deletePersonHandle= (personID) =>{
    const person = [...this.state.person];
    const newPerson = person.filter(person=>
      person.id != personID
    )
    this.setState({person:newPerson});
  }

  render() {

    const style = {
      backgroundColor:'green',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <StyleRoot>
        <div>
          {
            this.state.person.map((person,index)=>
              <Person 
                name={person.name} 
                age={person.age} 
                click={()=> this.deletePersonHandle(person.id)} 
                key={person.id}
                changed={(event)=>this.nameChangeHandler(event,person.id)}
              />
            )
          }
        </div>
        </StyleRoot>
      )

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor:'lightred',
        color:'black'
      }
    }

    const classes = [];

    if(this.state.person.length <= 2){
      classes.push('red');
    }

    if(this.state.person.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hello Iam React App</h1>
        <p className={classes.join(' ')}>This real working</p>

        {/* <button 
        style={style}
        onClick={()=>this.swicthName('Dani Anggara')}
        >Click Me!</button> */}

        <button 
        style={style}
        onClick={()=>this.togglePersonHandle()}
        >Toggle Me!</button>
        {persons}
      </div>
    )
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hello Iam React App'));
  }
}

export default Radium(App);
