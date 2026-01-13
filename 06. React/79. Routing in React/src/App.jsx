import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Products from "./pages/Products"
import Navbar from "./components/Navbar"
import Men from "./pages/Men"
import Women from "./pages/Women"
import AnyCourse from "./pages/AnyCourse"
import Course from "./pages/Course"
import CourseDetails from "./pages/CourseDetails"
import RandomAbout from "./pages/RandomAbout"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />

        {/* Nested Routes */}
        <Route path="/products/men" element={<Men/>} />
        <Route path="/products/women" element={<Women/>} />
        <Route path="/products/courses" element={<Course/>} />

        {/* Dynamic Routes */}
        <Route path="/about/:id" element={<RandomAbout/>} />
        <Route path="/products/courses/:courseId" element={<AnyCourse/>} />

        {/* Nested Dynamic Routes */}
        <Route path="/products/courses/:courseId/details" element={<CourseDetails/>}  />

        {/* Not Found Page */}
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App