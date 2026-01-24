import React, { useContext } from 'react'
import {UserDataContext} from '../context/UserContext'

const Navbar = () => {
  const data = useContext(UserDataContext)
  console.log(data)
  return (
    <div className="h-30 w-full bg-emerald-500">
      <h1>
        This is Navbar 
      </h1>
    </div>
  )
}

export default Navbar