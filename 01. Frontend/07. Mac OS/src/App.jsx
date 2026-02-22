import React, { useState } from 'react'
import "./App.scss"
import Dock from "./components/Dock/Dock"
import Nav from "./components/Nav/Nav"
import Github from "./components/Windows/GithubWindow/Github"
import Note from "./components/Windows/NoteWindow/Note"
import Resume from "./components/Windows/Resume/Resume"
import Spotify from "./components/Windows/Spotify/Spotify"
import Cli from "./components/Windows/Cli/Cli"

const App = () => {
  const [windowState, setWindowState] = useState({
    github : false,
    note : false,
    resume : false,
    spotify : false,
    cli : false
  })
  return (
    <main>
      <Nav/>
      <Dock windowState={windowState} setWindowState={setWindowState} />
      {windowState.github && <Github windowName="github" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.note && <Note windowName="note" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.resume && <Resume windowName="resume" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.spotify && <Spotify windowName="spotify" windowState={windowState} setWindowState={setWindowState} />}
      {windowState.cli && <Cli windowName="cli" windowState={windowState} setWindowState={setWindowState} />}
    </main>
  )
}

export default App