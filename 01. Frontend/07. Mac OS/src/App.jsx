import React from 'react'
import "./App.scss"
import Dock from "./components/Dock/Dock"
import Nav from "./components/Nav/Nav"
import Github from "./components/Windows/GithubWindow/Github"
import Note from "./components/Windows/NoteWindow/Note"
import Resume from "./components/Windows/Resume/Resume"

const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>
      <Github/>
      <Note/>
      <Resume/>
    </main>
  )
}

export default App