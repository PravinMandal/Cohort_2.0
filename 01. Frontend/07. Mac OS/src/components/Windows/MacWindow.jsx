import React from 'react'
import "./MacWindow.scss"
import {Rnd} from 'react-rnd'

const MacWindow = ({children}) => {
  return (
    <div className="macwindow-wrapper">
        <Rnd bounds="window" default={{ x: 350 , y: 50, width: "55vw", height: "70vh" }}>
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="user"><i className="ri-folder-fill"></i><p>PravinMandal -- zsh</p></div>
                </div>
                <div className="main-children">
                    {children}
                </div>
            </div>
        </Rnd>
    </div>
  )
}

export default MacWindow