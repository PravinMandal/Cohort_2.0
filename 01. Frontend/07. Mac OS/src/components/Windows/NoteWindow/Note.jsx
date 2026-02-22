import React, { useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark  } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import MacWindow from "../MacWindow/MacWindow"
import "./Note.scss"

const Note = ({windowName, setWindowState, activeWindow, setActiveWindow}) => {
    const [MarkDown, setMarkDown] = useState(null)
    useEffect(()=> {
        fetch("/Note.txt")
        .then(res => res.text())
        .then(text => setMarkDown(text))
    }, [])
  return (
    <div>
        <MacWindow windowName={windowName} setWindowState={setWindowState} activeWindow={activeWindow} setActiveWindow={setActiveWindow} x={600} y={30}>
            <div className="note-window">
                {MarkDown ? <SyntaxHighlighter language="typescript" style={atelierDuneDark }>{MarkDown}</SyntaxHighlighter> : <p>Loading...</p>}
            </div>
        </MacWindow>
    </div>
  )
}

export default Note