import React, { Component } from 'react';
import Pokedex from './Pokedex';

export default class Pokegame extends Component {
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

    };
    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokemonList];
        while (hand1.length < hand2.length) {
            let ind = Math.floor(Math.random() * hand2.length);
            let pokemon = hand2.splice(ind, 1)[0];
            hand1.push(pokemon);
        }
        let totalExp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let totalExp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

        return (
            <div>
                <Pokedex pokemonList={hand1} title="Hand1" isWinner={totalExp1 > totalExp2} totalExp={totalExp1} />
                <Pokedex pokemonList={hand2} title="Hand2" isWinner={totalExp1 < totalExp2} totalExp={totalExp2} />
            </div>
        );
    }
}
