import React, { useState } from 'react'
import Navbar from "./Navbar"
import Allsections from "./Allsections"
import Footer from "./Footer"

const Home = () => {
  const courseData = {
    coursename : 'Cohort 2.0',
    instructor : 'Sarthak',
    duration : '6 Months'
  }

  const [theme, setTheme] = useState('light');
  const changeTheme = (newTheme)=> {
    setTheme(newTheme);
  }

  return (
    <div className="m-10">
      <h1>Theme is {theme}</h1>
      <Navbar theme={theme} changeTheme = {changeTheme}/>
    </div>
  )
}

export default Home