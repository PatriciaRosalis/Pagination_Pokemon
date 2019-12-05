import React from 'react';
import './PokemonList.css'

export default function PokemonList({ pokemon }) {
  return (
    <div className="container">
      <img src={"../images/pokemon.jpg"} alt="pikachu" />

      {pokemon.map(p => (
        <div key={p} className="container-list" >
          <li >{p}</li>
        </div>
      ))}
    </div>
  )
}
