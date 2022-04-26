import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {AiOutlineHome} from 'react-icons/ai'
import {FaFilter} from 'react-icons/fa'

function Navigation() {

    //
    //console.log(window.location.search)
    
    const queryParams = new URLSearchParams(window.location.search)
    let searchTerm = queryParams.get("card")

    if (!searchTerm){
        searchTerm ="" //This is the condition for filtering all cards
    }




  return (
      <List>  
     <StyledIcons to ={`/filter/${searchTerm}`}>
     <FaFilter></FaFilter>
 </StyledIcons>
 </List>
  )
}

const List = styled.div`
display:flex;
justify-content: center;
`

const StyledIcons = styled(NavLink)`
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131) ;
    width: 6rem;
    height: 6rem;
    transform: scale(0.8);

    h4{
   color:white;
   font-size: 0.8rem;
}
svg{
    color:white;
    font-size: 1.5rem;
    
}
&.active{
    background: linear-gradient(to right, orange, crimson );

    svg{
        color: white;
    }
    h4{
        color: white;
    }
}

`
export default Navigation