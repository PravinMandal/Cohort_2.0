import React, { useEffect, useState } from 'react'
import Cards from "./Cards";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [role, setrole] = useState('')
    const [desc, setdesc] = useState('')
    const [allUsers, setallUsers] = useState([]);

    const submitHandler = (e)=> {
        e.preventDefault();
        setallUsers([...allUsers, {name, email, role, desc}]);
        setName('');
        setEmail('');
        setrole('');
        setdesc('');
    }

    useEffect(()=> {
        console.log(allUsers)
    }, [allUsers])
         
  return (
    <div className="flex flex-col p-10 gap-20">
        <form onSubmit={(e)=> {
            submitHandler(e);
        }} className="flex flex-col gap-5 justify-center">
            <div className="flex gap-10 justify-around flex-wrap">
                <input 
                    className="w-90 px-5 py-2 bg-[rgba(73,70,70,0.28)] backdrop-blur-xl border text-white border-white placeholder-white rounded-3xl"
                    type="text" 
                    placeholder="Enter Your Name" 
                    required
                    value={name}
                    onChange={(e)=> {
                        setName(e.target.value);
                    }}
                />
                <input 
                    className="w-90 px-5 py-2 bg-[rgba(73,70,70,0.28)] backdrop-blur-xl border text-white border-white placeholder-white rounded-3xl"
                    type="text" 
                    placeholder="Enter Your Mail" 
                    required
                    value={email}
                    onChange={(e)=> {
                        setEmail(e.target.value);
                    }}
                />
                <input 
                    className="w-90 px-5 py-2 bg-[rgba(73,70,70,0.28)] backdrop-blur-xl border text-white border-white placeholder-white rounded-3xl"
                    type="text" 
                    placeholder="Enter Your Role" 
                    required
                    value={role}
                    onChange={(e)=> {
                        setrole(e.target.value);
                    }}
                />
                <input 
                    className="w-90 px-5 py-2 bg-[rgba(73,70,70,0.28)] backdrop-blur-xl border text-white border-white placeholder-white rounded-3xl"
                    type="text" 
                    placeholder="Enter Your Description" 
                    required
                    value={desc}
                    onChange={(e)=> {
                        setdesc(e.target.value);
                    }}
                />
            </div>
            <div className="flex justify-center items-center">
                <button className="bg-[rgba(73,70,70,0.28)] backdrop-blur-xl border border-white text-white w-fit active:scale-97 rounded-3xl px-4 py-1">
                    Submit
                </button>
            </div>
        </form>
        
        <div className="flex justify-center flex-wrap gap-40">
            {allUsers.map((elem, idx)=> {
                return <Cards key={idx} {...elem} index={idx} />
            })}
        </div>
    </div>
  )
}

export default Form