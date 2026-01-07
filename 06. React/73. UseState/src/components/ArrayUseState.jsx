import React, { useState } from 'react'

const ArrayUseState = () => {
    const [Marks, setMarks] = useState([67,83,27,12,89]);
    function graceStudent() {
        const newMarks = Marks.map((elem)=> {
            if(elem<=33) return elem+5;
            return elem;
        })
        console.log('hello');
        setMarks(newMarks);
    }

  return (
    <div className="p-5">
        {Marks.map((elem, idx)=> {
            return <h1>Student {idx+1} : {elem} ({elem>33 ? 'Pass' : 'Fail'})</h1>
        })}
        <button className="active:scale-97 px-3 py-1 bg-green-400" onClick={graceStudent}>
            Grace
        </button>
    </div>
  )
}

export default ArrayUseState