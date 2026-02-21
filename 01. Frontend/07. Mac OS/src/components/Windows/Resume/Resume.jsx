import React from 'react'
import MacWindow from "../MacWindow/MacWindow"
import './Resume.scss'

const Resume = () => {
  return (
    <div>
        <MacWindow>
            <div className="resume-content">
                <embed src="/Resume.pdf" frameborder="0"></embed>
            </div>
        </MacWindow>
    </div>
  )
}

export default Resume