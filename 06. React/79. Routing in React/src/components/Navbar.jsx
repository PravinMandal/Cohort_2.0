import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between p-10 bg-gray-800 text-2xl">
        <h2>Navbar</h2>
        <div className="flex gap-10">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'/products/courses'}>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar