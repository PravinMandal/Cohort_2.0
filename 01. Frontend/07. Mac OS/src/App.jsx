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
  const [activeWindow, setActiveWindow] = useState(null)
  return (
    <main>
      <Nav/>
      <Dock windowState={windowState} setWindowState={setWindowState} setActiveWindow={setActiveWindow} />
      {windowState.github && <Github windowName="github" windowState={windowState} setWindowState={setWindowState} activeWindow={activeWindow} setActiveWindow={setActiveWindow} />}
      {windowState.note && <Note windowName="note" windowState={windowState} setWindowState={setWindowState} activeWindow={activeWindow} setActiveWindow={setActiveWindow} />}
      {windowState.resume && <Resume windowName="resume" windowState={windowState} setWindowState={setWindowState} activeWindow={activeWindow} setActiveWindow={setActiveWindow} />}
      {windowState.spotify && <Spotify windowName="spotify" windowState={windowState} setWindowState={setWindowState} activeWindow={activeWindow} setActiveWindow={setActiveWindow} />}
      {windowState.cli && <Cli windowName="cli" windowState={windowState} setWindowState={setWindowState} activeWindow={activeWindow} setActiveWindow={setActiveWindow} />}
    </main>
  )
}

export default App