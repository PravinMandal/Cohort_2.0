import React from 'react'
import Navbar from "./components/Navbar"

const App = () => {
  const name = "Pravin";
  function clickit() {
    console.log("Clicked!!!");
  }
  return (
    <div className="flex flex-col gap-5 m-1">
        <Navbar title="Pravin" color="red" links={["Home", "About", "Account", "Help"]} />
        <Navbar title="Apple" color="green" links={["Home", "Iphone", "Mac", "Ipad", "About"]} />
        <Navbar title="Sheryians" color="pink" links={["Home", "Courses", "Bootcamp", "Classroom", "Contact Us", "About"]} />
        
        {/* Conditional Rendering */}
        {name=="Pravin" ? <Navbar title="Pravin" color="red" links={["Home", "About", "Account", "Help"]} /> : <Navbar title="Sheryians" color="pink" links={["Home", "Courses", "Bootcamp", "Classroom", "Contact Us", "About"]} />}

        <button onClick={clickit} className="active:scale-90 w-fit px-10 py-5 rounded-4xl bg-emerald-500">
          Download
        </button>
    </div>
  )
}

export default App