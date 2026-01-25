import React, { useContext } from 'react'
import { themeDataContext } from "../contexts/ThemeContext"

const Navbar = () => {
    const [theme, setTheme] = useContext(themeDataContext)
  return (
    <div className="nav">
        <h1>Navbar</h1>
        <h2>{theme}</h2>
        <button onClick={()=> {
            theme == 'light' ? setTheme('Dark') : setTheme('light')
        }}>change Theme</button>
    </div>
  )
}

export default Navbar