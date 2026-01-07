import React, { useState } from 'react'

const User = () => {
    const arr = ['Pravin', 'dipanshu', 'rushi', 'tanishq', 'saideep'];
    const [num, setnum] = useState(0);
  return (
    <div className="flex flex-col p-10 gap-3">
        <h1>{arr[num]}</h1>
        <button className="w-fit px-2 py-1 bg-green-300" onClick={()=> {
            if(num < arr.length-1) {
                setnum(num+1);
            } else {
                setnum(0);
            }
        }}>
            Change
        </button>
    </div>
  )
}

export default User