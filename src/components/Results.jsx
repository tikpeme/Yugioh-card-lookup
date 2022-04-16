import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


//import axios from 'axios';


function Results() {
  //create states and function to setState
  const [result, setResults] = useState([]);
  const navigate = useNavigate();

  //Use the 'useParams' hook to access piece of URL from when navigated from the SearchBar
  let { name } = useParams();
  //console.log(name)

  //Declare function to make api call
  const getCard = async () => {
      fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${name}`) // API call, no key required
      .then((response) => {
        if (response.ok) {
          return response.json();
        }else
        throw new Error('Api fuzzy search call failed');
      })
      .then((data) => {
        setResults(data.data)
        })
      .catch((error) => {
        console.log(error)
        navigate ("/Error/"+name) //Navigate to Error page
      })
  }          

    
  /*
    const getCard = async(name) =>{
     const {data} = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${name}` )  // API call, no key require
     if(data) setResults(data);
  }
  */
  useEffect(() => {

    getCard();
      
  });

  //console.log(result)

  //create styling object
 
  
  return (
        <Grid>
          {result.map && result.map((card, idx) => {
            return <div key={idx}> 
            
            <SLink to ={'/Card/'+card.name}>
             <h2>{card.name}</h2>
             <Img 
             className='image'
             src={card.card_images[0].image_url} 
             alt={card.name} 
             />
              </SLink>
             </div>;
          })}
        </Grid>
  );
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 70px;
margin-top: 30px;
background-color: #a9a1b3;
`

const Img = styled.img`
  border: 1rem none;
  height: 30rem;
`
const SLink = styled(NavLink)`
text-decoration: none;

  
`




export default Results;


