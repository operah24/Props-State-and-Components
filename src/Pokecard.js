import React, { Component } from 'react'

export class Pokecard extends Component {
    render() {
        return (
            <div className="card">
                <h3 className="title">{this.props.name}</h3>
                <img className="image" src={this.props.image} alt=""/>
                <h5>Type: {this.props.type}</h5>
            </div>
        )
    }
}

export default Pokecard
