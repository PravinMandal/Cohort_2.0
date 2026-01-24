import React, { useContext } from 'react'
import { UserDataContext } from "../context/UserContext"

const Footer = () => {
  const user = useContext(UserDataContext)
  // console.log(user)
  return (
    <div className="h-30 w-full bg-blue-500 absolute bottom-0">
        This is footer
    </div>
  )
}

export default Footer