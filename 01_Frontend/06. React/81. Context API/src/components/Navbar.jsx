import React, { useState } from 'react'

const Navbar = (props) => {
  const [newTheme, setnewTheme] = useState('')
  return (
    <div>
      <form
        className="flex items-center"
        onSubmit={(e)=> {
          e.preventDefault();
          props.changeTheme(newTheme);
          setnewTheme('');
        }}
      >
        <input type="text" placeholder="Enter the theme"
          className="h-10 w-fit bg-gray-200 p-3"
          onChange={(e)=> {
            setnewTheme(e.target.value);
          }}
          value={newTheme}
        />
        <button className="h-10 w-fit p-3 bg-gray-200 active:scale-97">Submit</button>
      </form>
    </div>
  )
}

export default Navbar