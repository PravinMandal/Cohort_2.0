import React, { useState } from 'react'
import pokemon from '../assets/pokemon.png'

const Header = ({search, setsearch}) => {
  return (
    <div>
      <div className="flex justify-between items-center backdrop-blur-3xl bg-white/1 rounded-full my-2 mx-5 px-5">
        <img className="w-60 bg-transparent" src={pokemon} alt="" />
        <input className="border border-black backdrop-blur-3xl bg-white/10 rounded-full w-sm py-3 px-5 text-white text-xl" 
          type="text" 
          placeholder="Search the Pokemon"
          value={search}
          onChange={(e)=> {
            setsearch(e.target.value);
          }}
        />
        <img className="w-60 bg-transparent" src={pokemon} alt="" />
      </div>
    </div>
  )
}

export default Header