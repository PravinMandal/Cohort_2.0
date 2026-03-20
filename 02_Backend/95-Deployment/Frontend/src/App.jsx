import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from "react"

const App = () => {
  const [notes, setnotes] = useState([])
  const [EditingId, setEditingId] = useState(null)
  const [EditDescription, setEditDescription] = useState("")

  function getSetData() {
    axios.get("https://cohort-2-0-mxy7.onrender.com/notes")
    .then((res)=> {
      setnotes(res.data.allnote)
    })
  }

  function createNote(e) {
    e.preventDefault()
    const {title, description} = e.target.elements
    axios.post("https://cohort-2-0-mxy7.onrender.com/notes",{
      title : title.value,
      description : description.value
    }).then(()=> {
      getSetData()
    })
  }

  function handleDeleteNote(noteId) {
    axios.delete("https://cohort-2-0-mxy7.onrender.com/notes/"+noteId)
    .then(()=> {
      getSetData();
    })
  }

  function handleEditNotes(noteId, description) {
    axios.patch("https://cohort-2-0-mxy7.onrender.com/notes/"+noteId, {
      description : description
    })
    .then(()=> {
      getSetData()
    })
  }

  useEffect(()=> {
    getSetData();
  }, [])
  
  return (
    <>
      <form className="note-create-form" onSubmit={createNote}>
        <input name="title" type="text" placeholder="Enter Title" />
        <input name="description" type="text" placeholder="Enter description" />
        <button>Create</button>
      </form>
      <div className="notes">
          {
            notes.map((note) => {
              return <div className="note">
                <h1>{note.title}</h1>

                {(EditingId === note._id) ? (
                  <>
                    <input
                      type="text" 
                      value={EditDescription}
                      onChange={(e)=> {setEditDescription(e.target.value)}}
                    />
                    <button onClick={()=> {
                      handleEditNotes(note._id, EditDescription)
                      setEditingId(null)
                    }}>
                      Save
                    </button>
                    <button onClick={()=> {setEditingId(null)}}>
                      cancel
                    </button>
                  </>
                ) : (
                  <h4>{note.description}</h4>
                )}

                <button onClick={()=> {
                  handleDeleteNote(note._id)
                }}>Delete</button>

                {EditingId !== note._id && (
                  <button style={{margin : "1rem"}} onClick={()=> {
                    setEditingId(note._id)
                    setEditDescription(note.description)
                  }}>Edit</button>
                )}
              </div>
      
            })
          }
      </div>
    </>
  )
}

export default App