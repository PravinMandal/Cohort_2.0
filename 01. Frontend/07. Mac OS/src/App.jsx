import React from 'react'
import "./App.scss"
import Dock from "./components/Dock/Dock"
import Nav from "./components/Nav/Nav"

const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>
    </main>
  )
}

export default App