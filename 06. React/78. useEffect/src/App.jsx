import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [pokename, setpokename] = useState('')
  const [num, setnum] = useState(0)

  const getData = async ()=> {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
    console.log(response.data.results[Math.floor(Math.random()*20)].name);
  }

  useEffect(function() {
    getData();
  },[num]) //[] change hoga tabhi chalega, side stack mai chalta hai
  //dependency blank([]) rakhenge toh ek hi baar chalega


  return (
    <div>
      <h2>{num}</h2>
      <button
        onClick={()=> {
          setnum(num+1);
        }}
      >Click</button>
    </div>
  )
}

export default App