import React from 'react'
import "./Nav.scss"
import Datetime from "./Datetime"

const Nav = () => {
  return (
    <nav>
        <div className="left">
            <div className="nav-items"><img src="./nav-icons/apple.svg" alt="" /></div>
            <div className="nav-items"><p>Pravin Mandal</p></div>
            <div className="nav-items">Files</div>
            <div className="nav-items">Windows</div>
            <div className="nav-items">Terminal</div>
        </div>
        <div className="right">
            <div className="nav-items"><img src="./nav-icons/wifi.svg" alt="" /></div>
            <div className="nav-items">
                <Datetime/>
            </div>
        </div>
    </nav>
  )
}

export default Nav