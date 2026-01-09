import React, { useState } from 'react'

const App = () => {
  const [Name, setName] = useState('')
  const submitHandler = (e)=> {
    e.preventDefault();
    setName('')
  }
  return (
    <div className="p-10 h-screen bg-black text-white">
      <form 
        className="flex gap-5"
        onSubmit={(e)=> {
          submitHandler(e);
        }}
      >
        <input 
          className="placeholder-black text-black bg-amber-50 w-80 px-3 py-2 rounded-3xl"
          type="text" 
          placeholder="Enter Your Name"
          value={Name}
          onChange={(e)=> {
            setName(e.target.value);
          }}
        />
        <button className="px-2 py-1 bg-blue-500 rounded-3xl">
          Submit
        </button>
      </form>
    </div>
  )
}

export default App