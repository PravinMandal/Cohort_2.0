import React, { useState } from 'react'

const Counter = () => {
    const [num, setnum] = useState(0)
  return (
    <div className="flex flex-col p-10 gap-5">
        <h1>{num}</h1>
        <button className="w-fit px-2 py-1 bg-green-300" onClick={()=> {
            setnum(num+1);
        }}>
            Increase
        </button>
        <button className="w-fit px-2 py-1 bg-green-300" onClick={()=> {
            setnum(num-1);
        }}>
            Decrease
        </button>

        <button className="w-fit px-2 py-1 bg-green-300" onClick={()=> {
            setnum(num+10);
        }}>
            Jump by 10
        </button>
    </div>
  )
}

export default Counter