import React from 'react'

const Cards = (props) => {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);
  return (
    <div className="w-100 h-80 rounded-xl p-10 text-white" style={{backgroundColor : `rgb(${color1},${color2},${color3})`}}>
        <h2>{props.elem.name}</h2>
        <h2>{props.elem.email}</h2>
    </div>
  )
}

export default Cards