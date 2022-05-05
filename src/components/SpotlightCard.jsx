import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



function SpotlightCard() {
  
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
    console.log(spotLight.name)

   }
   useEffect(()=>{
    
    getSpotLight();
   },[])



  return (
  <div>
      {spotLight && 
      
      <Sdiv>
      <SLink to = {"/Card/"+spotLight.name}>
        <Sh2> You drew : {spotLight.name}!</Sh2>
          <img src={spotLight.card_images[0].image_url} alt={spotLight.name}/>    
      </SLink>
      <Sbutton  onClick={() => drawCard()}> Draw </Sbutton>
      </Sdiv>}
      { spotLight &&  console.log(spotLight.name) }


      

    </div>
    
  )
}


const SLink = styled(NavLink)`
text-decoration: none;
color: silver;
`

const Sdiv = styled.div`
width: auto;
  margin: 50px auto;

`
const Sh2 =styled.h2`
font-family: 'Shrikhand', cursive;
font-weight: 100;
`

const Sbutton = styled.button`
cursor: pointer;
display: block;
margin: 10px auto;
font-size: 40px;
width: auto;
height: 100px;
border-radius: 50%;
background-color: brown;
  
`
export default SpotlightCard

