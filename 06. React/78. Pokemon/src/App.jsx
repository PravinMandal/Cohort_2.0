import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from "./components/Header";
import background from './assets/background.png'
import Cards from "./components/Cards";

const App = () => {
  const [pokedata, setpokedata] = useState([])
  const [search, setsearch] = useState('')

  const getData = async ()=> {
    const rawdata = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=200');
    setpokedata(rawdata.data.results);
    // console.log(pokedata);
  }

  const filteredPokemon = pokedata.filter((pokemon)=> {
    return pokemon.name.toLowerCase().startsWith(search.toLowerCase());
  });

  useEffect(()=>{
    getData();
  }, [])
  return (
    <div className="min-h-screen bg-fixed bg-center bg-cover bg-no-repeat overflow-x-hidden" style={{backgroundImage : `url(${background})`}}>
      <Header search={search} setsearch={setsearch}/>
      <div className="flex justify-around flex-wrap">
        {filteredPokemon.map((pokemon, idx) => {
          const pokeId = pokemon.url.split('/')[6]
          return <Cards key={pokeId} name={pokemon.name} id={pokeId}/>
        })}
      </div>
    </div>
  )
}

export default App