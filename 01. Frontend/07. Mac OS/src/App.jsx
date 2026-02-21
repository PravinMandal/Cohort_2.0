import React from 'react'
import "./App.scss"
import Dock from "./components/Dock/Dock"
import Nav from "./components/Nav/Nav"
import Github from "./components/Windows/Github"

const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>
      <Github/>
    </main>
  )
}

export default App