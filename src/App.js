import React, { Component } from "react";
import "./App.css";
import Pokecard from "./Pokecard";
import data from "./data";
import Colorcontainer from './colorContainer'
import Todolist from './Todolist'

class App extends Component {
  state = {
    cards: data,
  };
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <div className="card-container">
          {this.state.cards.map((card) => (
            <Pokecard
              key={card.id}
              image={card.image}
              name={card.name}
              type={card.type}
              id={card.id}
            />
          ))}
        </div>
        <Colorcontainer />
        <Todolist />
      </div>
    );
  }
}

export default App;
