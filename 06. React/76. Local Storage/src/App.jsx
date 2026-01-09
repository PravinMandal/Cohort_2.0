import React from 'react'
import Form from "./components/Form"
import background from "./assets/10_background.png"

const App = () => {
  return (
    <div className="min-h-screen bg-fixed bg-center bg-cover bg-no-repeat overflow-x-hidden" style={{backgroundImage : `url(${background})`}}>
      <Form/>
    </div>
  )
}

export default App