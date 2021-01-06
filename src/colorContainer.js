import React, { Component } from "react";
import Colordiv from "./colorDiv";

export class Colorcontainer extends Component {
  state = {
    colors: [
      "orange",
      "yellow",
      "red",
      "green",
      "grey",
      "purple",
      "hotpink",
      "gold",
      "silver",
      "navy",
      "violet",
      "indianred",
      "yellowgreen",
      "saddlebrown",
      "maroon",
      "orangered",
      "pink",
      "olive",
      "peru",
      "black",
      "salmon",
      "tan",
      "teal",
      "tomato",
    ],
  };
  handleClick= (e)=>{
      e.target.style.backgroundColor = this.state.colors[Math.floor(Math.random()*this.state.colors.length)]
    
  }
  render() {
    return (
      <div>
        <h1>Color</h1>
        <div className="color-container">
          {this.state.colors.map((c, index)=> <Colordiv key={index} bg = {c}   handleClick= {this.handleClick}  />)}
        
        </div>
      </div>
    );
  }
}

export default Colorcontainer;
