import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [notes, setnotes] = useState([
    {
      title : "This is Title 1",
      description : "This is description 1"
    },
    {
      title : "This is Title 2",
      description : "This is description 2"
    },
    {
      title : "This is Title 3",
      description : "This is description 3"
    }
  ])
  axios.get('http://localhost:3000/notes').then(
    (res)=> {
      setnotes(res.data.allnote)
    }
  )
  return (
    <div className="notes">
        {
          notes.map((note) => {
            return <div className="note">
              <h1>{note.title}</h1>
              <h4>{note.description}</h4>
            </div>
    
          })
        }
    </div>
  )
}

export default App