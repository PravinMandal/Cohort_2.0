import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import AllCourses from "./pages/AllCourses"
import Kodr from "./pages/Kodr"
import Kodex from "./pages/Kodex"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/courses" element={<Courses/>}>
          <Route path="/courses" element={<AllCourses/>} />
          <Route path="/courses/kodr" element={<Kodr/>} />
          <Route path="/courses/kodex" element={<Kodex/>} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App