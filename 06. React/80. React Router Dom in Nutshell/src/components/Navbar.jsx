import React from 'react'
import { NavLink } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Courses from "../pages/Courses"

const Navbar = () => {
  return (
    <div className="Nav">
        <NavLink 
            to="/"
            style={({isActive})=>({
                color: isActive ? 'red' : 'white'
            })}
        >
            Home
        </NavLink>

        <NavLink 
            to="/about"
            style={({isActive})=>({
                color: isActive ? 'red' : 'white'
            })}
        >
            About
        </NavLink>

        <NavLink 
            to="/courses"
            style={({isActive})=>({
                color: isActive ? 'red' : 'white'
            })}
        >
            Courses
        </NavLink>
    </div>
  )
}

export default Navbar