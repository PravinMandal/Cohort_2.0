import React from 'react'

const Navbar = (props) => {
  return (
    <div style={{backgroundColor : props.color}} className="flex px-5 py-2 justify-between" >
        <h1 className="text-2xl">{props.title}</h1>
        <div className="flex gap-10 text-xl">
            {props.links.map((elem)=> {
                return <h3>{elem}</h3>
            })}
        </div>
    </div>
  )
}

export default Navbar