import React from 'react'
import MacWindow from "../MacWindow/MacWindow"
import './Resume.scss'

const Resume = ({windowName, setWindowState, activeWindow, setActiveWindow}) => {
  return (
    <div>
        <MacWindow windowName={windowName} setWindowState={setWindowState} activeWindow={activeWindow} setActiveWindow={setActiveWindow} x={30} y={120}>
            <div className="resume-content">
              <embed src="/Resume.pdf" type="" />    
            </div>
        </MacWindow>
    </div>
  )
}

export default Resume