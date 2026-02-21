import React from 'react'
import "./Dock.scss"

const Dock = () => {
  return (
    <footer className="dock">
        <div className="icons">
          <div className="github icon"><img src="/icons/github.svg" alt="" /></div>
        </div>
        <div className="icons">
          <div className="notes icon"><img src="/icons/note.svg" alt="" /></div>
        </div>
        <div className="icons">
          <div className="pdf icon"><img src="/icons/pdf.svg" alt="" /></div>
        </div>
        <div className="icons">
          <div className="calendar icon"><img src="/icons/calender.svg" alt="" /></div>
        </div>
        <div className="icons">
          <div className="spotify icon"><img src="/icons/spotify.svg" alt="" /></div>
        </div>
        <div className="icons">
          <div className="mail icon"><img src="/icons/mail.svg" alt="" /></div>
        </div>
        <div className="icons">
          <div className="link icon"><img src="/icons/link.svg" alt="" /></div>
        </div>
        <div className="icons">
          <div className="cli icon"><img src="/icons/cli.svg" alt="" /></div>
        </div>
    </footer>
  )
}

export default Dock