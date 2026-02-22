import React from 'react'
import MacWindow from "../MacWindow/MacWindow"
import './Resume.scss'

const Resume = ({windowName, setWindowState}) => {
  return (
    <div>
        <MacWindow windowName={windowName} setWindowState={setWindowState} x={30} y={120}>
            <div className="resume-content">
              <embed src="/Resume.pdf" type="" />    
            </div>
        </MacWindow>
    </div>
  )
}

export default Resume