import React, { useContext } from 'react'
import { themeDataContext } from "../contexts/ThemeContext"

const Footer = () => {
    const [theme, setTheme] = useContext(themeDataContext)
  return (
    <div className="foot">
        <h1>Footer</h1>
        <h2>{theme}</h2>
    </div>
  )
}

export default Footer