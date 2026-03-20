import React from 'react'

const Section = (props) => {
  return (
    <div className="bg-zinc-700 h-[70vh] w-full">
        This is section
        {props.children[0]}
        {props.children[1]}
    </div>
  )
}

export default Section