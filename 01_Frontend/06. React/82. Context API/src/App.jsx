import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Section from "./components/Section"

const App = () => {
  return (
    <div className="text-white">
      <Navbar/>
      <Section>
        <h2>Hulk</h2>
        <h2>Batman</h2>
      </Section>
      <Footer/>
    </div>
  )
}

export default App