import React from 'react'
import {useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import styled from 'styled-components';

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
    <StyledForm  onSubmit={submitHandler}> 
    <FaSearch
    style={{position:"relative", left:"25px", color:"white"}}/>
    <StyledInput 
    type="text"
    name ="card" 
    onChange={(e)=>setInput(e.target.value)}
    value = {input}
    ></StyledInput>
    </StyledForm>
    </div>
  )
}

const StyledInput = styled.input`
border:none;
background: linear-gradient(35deg, #494949,  #313131 );
font-size: 1.5rem;
color: white;
padding: 1rem 3rem;
border:none;
border-radius: 1rem;
outline:none;
width:25%;
margin: 2.5rem auto;
min-width: 200px;
//margin-bottom: 2.5rem;


.active{
  background: linear-gradient(35deg, #494949,  #313131 );
} 
`
const StyledForm = styled.form`
width: 100%;
text-align: center;
  
`


export default SearchBar