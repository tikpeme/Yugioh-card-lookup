import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



function SpotlightCard(data) {
      console.log(data.data.name)

    return (
    <Sdiv>
      <SLink to = {"/Card/"+data.data.name}>
        <Sh2> You drew : {data.data.name}!</Sh2>
          <img src={data.data.card_images[0].image_url} alt={data.data.name}/>    
      </SLink>
      </Sdiv>
      
    )
      }

function Spotlight() {
  
  const [spotLight, setSpotLight] = useState(); //Create a state for the random spotlight card

       //Make API call to Yugioh card data base to get a radom card
  const getSpotLight = async() =>{
    fetch( `https://db.ygoprodeck.com/api/v7/randomcard.php`) // API call, no key required
    .then(res => res.json())// Provide information from API JSON format 
    .then(data => setSpotLight(data));
        /*
         To consider eventually adding more code to make the spot light card be more of rare cards.  Also to utilize local  storage 
        */
  };

  const drawCard =()=>{
    getSpotLight();

   }

  
   useEffect(()=>{
    
    getSpotLight();
   },[])



  return (
  <div>
      {spotLight && <SpotlightCard data ={spotLight}/>}
      <button  onClick={() => drawCard}> Draw </button>

    </div>
    
  )
}


const SLink = styled(NavLink)`
text-decoration: none;
color: silver;
`

const Sdiv = styled.div`
  text-align: center;
  margin: 50px auto;
`
const Sh2 =styled.h2`
font-family: 'Shrikhand', cursive;
font-weight: 100;

`
export default Spotlight

