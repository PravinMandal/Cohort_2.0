import React from 'react'
import "./Dock.scss"

const Dock = ({windowState, setWindowState}) => {
  return (
    <footer className="dock">
        <div className="icons">
          <div 
            onClick={()=> {setWindowState((state)=> ({...state, note : true}))}}
            className="notes icon"><img src="/icons/note.svg" alt="" /></div>
        </div>
        <div className="icons">
          <div 
            onClick={()=> {setWindowState((state)=> ({...state, resume : true}))}}
            className="pdf icon"><img src="/icons/pdf.svg" alt="" /></div>
        </div>
        <div className="icons">
          <div 
            onClick={()=> {setWindowState((state)=>({...state, github : true}))}}
            className="github icon"><img src="/icons/github.svg" alt="" /></div>
        </div>
        <div className="icons">
          <div 
            onClick={()=> {setWindowState((state)=> ({...state, spotify : true}))}}
            className="spotify icon"><img src="/icons/spotify.svg" alt="" /></div>
        </div>
        <div className="icons">
          <div 
            onClick={()=> {window.open("https://leetcode.com/u/PravinMandal/", "_blank")}}
            className="link icon"><img src="/icons/leetcode.png" alt="" /></div>
        </div>
        <div className="icons">
          <div 
            onClick={()=> {setWindowState((state)=> ({...state, cli : true}))}}
            className="cli icon"><img src="/icons/cli.svg" alt="" /></div>
        </div>
        <div className="icons">
          <div 
            onClick={()=> {window.open("https://calendar.google.com/", "_bl")}}
            className="calendar icon"><img src="/icons/calendar.png" alt="" /></div>
          </div>
        <div className="icons">
          <div 
            onClick={()=> {window.open("mailto:pravinmandalp45@gmail.com", "_blank")}}
            className="mail icon"><img src="/icons/mail.svg" alt="" /></div>
        </div>
    </footer>
  )
}

export default Dock