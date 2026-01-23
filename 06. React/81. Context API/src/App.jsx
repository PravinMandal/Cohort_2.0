import React from 'react'
import axios from 'axios'
import Home from "./components/Home"

const App = () => {
  const getData = async ()=> {
    const response = await axios.get('http://localhost:8000/data')
    console.log(response);
  }
  return (
    <div>
        <Home/>
    </div>
  )
}

export default App