import React from 'react'
import { Link } from 'react-router-dom';

const PokemonCard = ({key,pokemonData}) => {
  return (
    <li className='pokemon-card'>
      <Link to={`/pokemon/${pokemonData.id}`}>
        <figure>
            <img src={pokemonData.sprites.other.home.front_default} alt={pokemonData.name} className='pokemon-image'/>
        </figure>
        <h1 className='pokemon-name'>{pokemonData.name}</h1>
        <div className='pokemon-info pokemon-highlight'>
            <p>
                {pokemonData.types.map((i)=> i.type.name).join(", ")}
            </p>
        </div>
        <div className='grid-three-cols'>
          <div className='pokemon-info'>
          <p>
             {pokemonData.height}
          </p>
          <span>Height </span>
          </div>
          <div className='pokemon-info'>
          <p>
             {pokemonData.weight} 
          </p>
          <span>Weight </span>
          </div>
          <div className='pokemon-info'>
          <p>
         {pokemonData.abilities.map((i)=> i.ability.name).join(", ")} 
          </p>
          <span>Ability </span>
          </div>
          <div className='pokemon-info'>
          <p>
             {pokemonData.base_experience} 
          </p>
          <span>Experience </span>
          </div>
          <div className='pokemon-info'>
          <p>
             {pokemonData.stats[0].base_stat} 
          </p>
          <span>Base Stat </span>
          </div>
          <div className='pokemon-info'>
          <p>
             {pokemonData.stats[5].base_stat} 
          </p>
          <span>Speed </span>
          </div>
        </div>
        </Link>
    </li>

  )
}

export default PokemonCard
