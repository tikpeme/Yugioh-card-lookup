import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Navigation from './Navigation';


//import axios from 'axios';


function Results() {
  //create states and function to setState
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  //Use the 'useParams' hook to access piece of URL from when navigated from the SearchBar
  let { searchTerm } = useParams();
  //console.log(name)

  //Declare function to make api call
  const getCard = async () => {
      fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchTerm}`) // API call, no key required
      .then((response) => {
        if (response.ok) {
          return response.json();
        }else
        throw new Error('Api fuzzy search call failed');
      })
      .then((data) => {
        setSearchResult(data.data)
        })
      .catch((error) => {
        console.log(error)
        navigate ("/Error/"+searchTerm) //Navigate to Error page
      })
  }          

    
  /*
    const getCard = async(searchTerm) =>{
     const {data} = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchTerm}` )  // API call, no key require
     if(data) setSearchResult(data);
  }
  */
  useEffect(() => {

    getCard();
      
  });

  //console.log(searchResult)
  
  return (
    <div>
      <Navigation></Navigation>
        <Grid>
          {searchResult.map && searchResult.map((card, idx) => {
            return <div key={idx}> 
            
            <SLink to ={'/Card/'+card.name}>
             <CardName>{card.name}</CardName>
             <Img 
             className='image'
             src={card.card_images[0].image_url} 
             alt={card.name} 
             />
              </SLink>
             </div>;
          })}
        </Grid>
        </div>
  );
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 70px;
margin: auto 30px;
text-align: center ;


`

const Img = styled.img`
  border: 1rem none;
  height: 20rem;
`
const SLink = styled(NavLink)`
text-decoration: none;
color: violet;

`

const CardName = styled.h3`
  margin-bottom: 1px;
  text-decoration: none;

`

export default Results;


