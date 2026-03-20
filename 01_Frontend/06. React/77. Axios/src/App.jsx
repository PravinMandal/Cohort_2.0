import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from "./components/Cards"

const App = () => {
  const [users, setusers] = useState([])
  const getData = async ()=> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setusers(response.data);
  }

  useEffect(()=> {
    getData();
  }, [])

  return (
    <div className="bg-black">
      <div className="flex gap-5 flex-wrap justify-around">
        {users.map((elem, idx)=> {
          return <div key={idx}>
              <Cards elem={elem}/>
          </div>
        })}
      </div>

    </div>
  )
}

export default App