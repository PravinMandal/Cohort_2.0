import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Cards = (props) => {
  const [color, setColor] = useState('gray');

  // 1. Create a map for the API colors to Tailwind classes with Opacity
  // 'bg-red-500/30' means Red background with 30% opacity (Glass effect)
  const colorClasses = {
    red: 'bg-red-500/15',
    blue: 'bg-blue-500/15',
    yellow: 'bg-yellow-400/15', // Yellow-400 is readable, 500 is too dark
    green: 'bg-green-500/15',
    black: 'bg-slate-800/15',
    brown: 'bg-amber-700/15',
    purple: 'bg-purple-500/15',
    pink: 'bg-pink-500/15',
    gray: 'bg-gray-500/15',
    white: 'bg-gray-200/15',
  };

  const getColor = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${props.id}`);
      setColor(response.data.color.name);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=> {
    getColor();
  }, [props.id])

  return (
    <div className="px-5 py-10">
      <div className={`flex flex-col justify-between items-center w-95 h-115 backdrop-blur-3xl rounded-2xl p-5 gap-5 border border-white/20 shadow-lg transition-colors duration-500 ${colorClasses[color] || 'bg-white/10'}`}>
        <div className="flex justify-center items-center w-full h-full">
            <img 
                className="h-40 w-40 object-contain drop-shadow-md" 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`} 
                alt={props.name} 
            />
        </div>
        
        <div className="mb-5">
            <h2 className="text-3xl text-white font-bold capitalize drop-shadow-md">
                {props.name}
            </h2>
        </div>
      </div>
    </div>
  )
}

export default Cards