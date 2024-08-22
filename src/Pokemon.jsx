import React, { useEffect, useState } from 'react'
import "./index.css"
import PokemonCard from './PokemonCard';

const Pokemon = () => {
    const [pokemon,setPokemon]= useState([]);
    const [totalPage,setTotalPage]= useState(0);
    const [currentPage, setCurrentPage]= useState(1)
    const [search,setSearch]= useState("");
    const pageSize= 52;
    
    const pokemonData= async(page)=>{
        const offset= (page-1)*pageSize;
        const API=`https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
        try {
           const res= await fetch(API);
           const data= await res.json();
           //console.log(data);
           const currentPokemonData= data.results.map(async (i)=>{
           const res= await fetch(i.url)
           const data= await res.json();
           return data;
        })
           const detailedResponse= await Promise.all(currentPokemonData);
           console.log(detailedResponse)
           setPokemon(detailedResponse);
           setTotalPage(Math.ceil(data.count/pageSize));
           
        } catch (error) {
           console.log(error) 
        }
    }
    useEffect(()=>{
        pokemonData(currentPage);
    },[currentPage])
    const handlePreviousPage=()=>{
        if(currentPage>1){
            setCurrentPage(currentPage-1)
        }
    }
    const handleNextPage=()=>{
        if(currentPage< totalPage){
            setCurrentPage(currentPage+1)
        }

    }
    const searchData= pokemon.filter((i)=>{
        return i.name.toLowerCase().includes(search.toLowerCase())
    })
  return (
    <>
    <section className='container'>
        <header>
        <h1>Pokemon</h1>
        </header>
        <div className='pokemon-search'>
        <input type="text" placeholder='Search pokemon' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        
        <div>
        <ul className='cards'>
            {
                searchData.map((i)=>{
                   return <PokemonCard key={i.id} pokemonData={i}/>
                })
            }
        </ul>   
        </div>
        <div className="pagination-controls">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPage}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPage}>
                        Next
                    </button>
                </div>
    </section>
      
    </>
  )
}

export default Pokemon
