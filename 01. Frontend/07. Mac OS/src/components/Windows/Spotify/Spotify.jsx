import React from 'react'
import MacWindow from "../MacWindow/MacWindow"
import "./Spotify.scss"

const Spotify = ({windowName, setWindowState, activeWindow, setActiveWindow}) => {
  return (
    <MacWindow width='40vw' height='60vh' windowName={windowName} setWindowState={setWindowState} activeWindow={activeWindow} setActiveWindow={setActiveWindow} x={400} y={70}>
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius: '12px'}}
                src="https://open.spotify.com/embed/playlist/2fwmGQAXgrf1JwM6KNCzq4?utm_source=generator&theme=0" 
                width="100%" height="352" frameBorder="0" allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">    
            </iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify