import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Page2 from "./components/Page2"
import Page2Section2 from "./components/Page2Section2"
import Page3 from "./components/Page3"
import Page4 from "./components/Page4"

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Page2/>
        <Page2Section2/>
        <Page3/>
        <Page4/>
    </div>
  )
}

export default App