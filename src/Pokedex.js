import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

export default class Pokedex extends Component {
    static defaultProps = {
        pokemonList: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ],
        title: "Pokedex",
    };

    render() {
        return (
            <div className='Pokedex'>
                <p className={this.props.isWinner ? "Winner" : "Loser"}>{this.props.isWinner ? <h3>{this.props.title} Won</h3> : <h3>{this.props.title} Lost</h3>}</p>
                <h3>Total Experince: {this.props.totalExp}</h3>
                <div className='Pokedex-cards'>
                    {this.props.pokemonList.map((p) => {
                        return <Pokecard name={p.name} exp={p.base_experience} type={p.type} pId={p.id} />
                    })}
                </div>
            </div >

        )
    }
}
