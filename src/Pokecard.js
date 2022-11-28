import React, { Component } from 'react';
import './Pokecard.css';
/* 

let link = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/'; */
let link = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padding = (num) => {
    return num <= 999 ? `00${num}`.slice(-3) : num;
}
class Pokecard extends Component {
    render(props) {
        let imgSrc = link + padding(this.props.pId) + ".png";
        return (
            <div className='Pokecard'>
                <h3>{this.props.name}</h3>
                <img src={imgSrc} alt='pokemon' />
                <div>{this.props.type}</div>
                <div>{this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;