import React from 'react'
import {useState } from 'react'
import {FaSearch} from 'react-icons/fa'

import { useNavigate } from "react-router-dom";


function SearchBar() {
  const navigate = useNavigate();

  const [input, setInput] = useState(""); // create state for form input

  //Event handler for submission of form
  const  submitHandler = (e) =>{
    navigate ("/searched/"+input) //Navigate to another page
  }

  return (
    <div> 
    <form onSubmit={submitHandler}>  
    <input 
    type="text"
    name ="card" 
    onChange={(e)=>setInput(e.target.value)}
    value = {input}
    />
    </form>
    </div>
  )
}

export default SearchBar