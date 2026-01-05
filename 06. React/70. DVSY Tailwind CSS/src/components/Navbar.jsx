import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between m-5">
        <h1>DVSY</h1>
        <div className="flex gap-3">
            <div className="flex justify-center items-center px-3 py-2 bg-[#232324] rounded-sm text-sm font-light text-gray-200">
                <h2>DESIGNERS</h2>
            </div>
            <div className="flex justify-center items-center px-3 py-2 bg-[#232324] rounded-sm text-sm font-light text-gray-200">
                <h2>COLLABS</h2>
            </div>
            <div className="flex justify-center items-center px-3 py-2 bg-[#232324] rounded-sm text-sm font-light text-gray-200">
                <h2>EVENTS</h2>
            </div>
            <div className="flex justify-center items-center px-3 py-2 bg-[#232324] rounded-sm text-sm font-light text-gray-200">
                <h2>BLOG</h2>
            </div>
            <div className="flex justify-center items-center px-3 py-2 bg-[#232324] rounded-sm text-sm font-light text-gray-200">
                <h2>CARD</h2>
            </div>
            <div className="flex justify-center items-center px-3 py-2 bg-[#e35156] rounded-sm text-sm font-medium text-black">
                <h2>GET IN TOUCH</h2>
            </div>
        </div>
    </div>
  )
}

export default Navbar