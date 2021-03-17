import React, { Component } from 'react';
import {CardList} from './components/Card-list/card-list.component.jsx';
import { CardListFunction } from './components/Card-list/card-list.component.jsx';
import { CardListArrowPropsFunction } from './components/Card-list/card-list.component.jsx'
import { CardListArrowFunction } from './components/Card-list/card-list.component.jsx'

import { SearchBox } from './components/search-box/search-box.component.jsx';

import './App.css';
/* Quick note on quotes for string interpolation

Just a quick note to remember to use the back tick  ` and 
NOT regular single or double quotes (' and ") for string 
interpolation on our image src. This is an easy mistake to 
make as you cannot interpolate the strings when using regular 
quotes, you must use back ticks! */


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  // Class Methods and Arrow Functions
  /* 
    Se eu escrever o método com a sintax abaixo, ...
    handleChange(e) {
      this.setState({ searchField: e.target.value });
    }

    é necessário fazer o BIND manualmente dentro co CONSTRUTOR
    this.handleChange = this.handleChange.bind(this); 

    ...MAS... se eu escrever o método com a sintax => ....
    handleChange = (e) => {
      this.setState({ searchField: e.target.value });
    }
    não preciso fazer o BIND no CONSTRUCTOR.
  */
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    //const monsters = this.state.monsters;
    //const searchField = this.state.monsters;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters' 
          handleChange={ this.handleChange }
        />
        <CardList monsters={filteredMonsters}/>
    </div>
    );
  }
}


export default App;