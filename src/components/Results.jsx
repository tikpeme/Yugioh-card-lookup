import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import axios from 'axios';


function Results() {
  //create states and function to setState
  const [result, setResults] = useState([]);

  //Use the 'useParams' hook to access piece of URL from when navigated from the SearchBar
  let { name } = useParams();
  //console.log(name)

  //Declare function to make api call
  const getCard = async (name) => {
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${name}`) // API call, no key required
      .then((res) => res.json()) // Provide information from API JSON format
      .then((data) => setResults(data.data));
  };
  /*
    const getCard = async(name) =>{
     const {data} = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${name}` )  // API call, no key require
     if(data) setResults(data);
  }
  */
  useEffect(() => {
    getCard(name);
  }, [name]);

  console.log(result)
  return (
        <Grid>
          {result.map((card, idx) => {
            return <div key={idx}> 
            
             <img 
             className='image'
             src={card.card_images[0].image_url} 
             alt={card.name} 
             width = "100px"
             height={100}

             />
             </div>;
          })}
        </Grid>
  );
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`

export default Results;


