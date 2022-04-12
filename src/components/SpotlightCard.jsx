import React from 'react'
import { useState, useEffect } from 'react'

function SpotlightCard(data) {

      if(!data) 
      { return null }
      else{
      console.log(data)
    return (
    <div>
          <img src={data?.card_images[0].image_url} alt={data.name}/>    
      </div>
      
    )
      }
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

   useEffect(()=>{
    getSpotLight();
   },[])
   console.log(spotLight)

  return (
  <div>
      {spotLight && <SpotlightCard data ={spotLight}/>}
    </div>
    
  )
}

export default Spotlight