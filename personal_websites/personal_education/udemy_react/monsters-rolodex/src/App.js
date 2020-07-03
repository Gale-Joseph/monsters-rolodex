import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

import './App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField:''
    };
  }
   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users=>this.setState({monsters:users}))
   }

   /*normally you need to bind functions with a 'this' component in the 
   constructor method. Arrow functions auto bind to the place where 'this' is
   first declared, in our case in the App class*/
   handleChange = e=>{
     this.setState({ searchField: e.target.value });
   };
  //We will use props and no children to populate monster list
  render(){
    const {monsters,searchField } = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className = 'App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />        
        <CardList monsters={filteredMonsters}/>        
      </div>
    );
  }
}

export default App;