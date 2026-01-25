import React, { useContext } from 'react'
import { themeDataContext } from "../contexts/ThemeContext"

const Section = () => {
    const [theme, setTheme] = useContext(themeDataContext)
  return (
    <div className="sec">
        <h1>Section</h1>
        <h2>{theme}</h2>
    </div>
  )
}

export default Section