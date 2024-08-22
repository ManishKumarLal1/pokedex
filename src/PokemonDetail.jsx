import React,{ useEffect, useState }from 'react'
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemonDetail = async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await res.json();
                setPokemon(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchPokemonDetail();
    }, [id]);

    if (!pokemon) {
        return <p>Loading...</p>;
    }

  return (
    <div className="pokemon-detail-container">
            <div className="pokemon-detail-header">
                <img className="pokemon-detail-image" src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h1 className="pokemon-detail-name">{pokemon.name} <span className='spanID'>#{pokemon.id}</span></h1>
            </div>
            <div className='pokemon-info pokemon-highlight'>
            <p>
                {pokemon.types.map((i)=> i.type.name).join(", ")}
            </p>
        </div>
            <div className="pokemon-details-info">
                <h2>Stats</h2>
                <ul className="pokemon-details-stats">
                    {pokemon.stats.map(stat => (
                        <li key={stat.stat.name}>
                            <strong>{stat.stat.name}:</strong> {stat.base_stat}
                        </li>
                    ))}
                </ul>
                <h2>Details</h2>
                <ul className="pokemon-details">
                    <li><strong>Height:</strong> {pokemon.height}</li>
                    <li><strong>Weight:</strong> {pokemon.weight}</li>
                    <li><strong>Base Experience:</strong> {pokemon.base_experience}</li>
                    <li><strong>Abilities:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</li>
                </ul>
            </div>
        </div>
  )
}

export default PokemonDetail
