import React from 'react'
import "./MacWindow.scss"
import {Rnd} from 'react-rnd'

const MacWindow = ({children, width="55vw", height="70vh", windowName, setWindowState, x, y, activeWindow, setActiveWindow}) => {
  const isActive = activeWindow === windowName
  return (
    <div className="macwindow-wrapper" style={{ zIndex: isActive ? 1000 : 100 }} onMouseDown={() => setActiveWindow(windowName)}>
        <Rnd default={{ x: x , y: y, width: width, height: height }}>
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div onClick={()=> {setWindowState((state)=> ({...state, [windowName] : false}))}} className="dot red"></div>
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