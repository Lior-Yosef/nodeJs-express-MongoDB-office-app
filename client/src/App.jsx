import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { GetAllUser } from './service/User-service'

function App() {
  const GetAll =()=>{
    GetAllUser()
    .then(user => console.log(user))
    .catch((err)=>{console.log(err)})
  }

  return (
    <div className="App">
      <button onClick={GetAll}> see users </button>
    </div>
  )
}

export default App
