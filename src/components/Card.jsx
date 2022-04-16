import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
function CardDisplay({data}){//This Function is called after state variable in parent function component is updated

  console.log(data)//Check 

  return(data.name && <Plate>
        <Title> {data.name}  </Title>
        <DetailWrapper>
      <img src={data.card_images[0].image_url} alt={data.name} />
      <div >
        <Details id={data.attribute}>  Attribute:  {data.attribute}</Details>
        <Details id={data.race}> </Details>
      </div>
    </DetailWrapper>
  
  </Plate>

)

}


function Card() {

  const [cardData, setCardData] = useState([]);//create states for Card 

  let  {cardName}  = useParams(); //retrieve card name from URL paramaeter

  //console.log(CardName)//Check 

useEffect(()=>{
    //Create function to make API call
    const getCard = async()=>{
      fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`)
      .then((res) => res.json()) // Provide information from API JSON format
      .then(({data}) => setCardData(data[0]));
    };

  getCard();

},[cardName])

//console.log(cardData)//Check 
//console.log(cardData.name)//Check 

//Ensure that states variable is updated before rendering
return (<div>
{cardData.name && <CardDisplay data ={cardData}/>}
</div>
)
}



const Plate = styled.div`
border: 2px red solid;
margin: auto;
width: 60%;
`

const DetailWrapper = styled.div`

  width: 60%;
  margin: auto;
  display: flex;
  align-items: center;
`
const Details = styled.div`
width: 20rem;
border: 2px red solid;
margin: 1rem;
padding: 1rem;
font-size: 1.5rem;
font-weight: 300;
`

const Title = styled.div`
border: 2px red solid;
background-color: #1c64c854;
font-family: 'Roboto Condensed', sans-serif;
font-size: 5rem;
font-weight: 500;
width:100%;
text-align: center;
`

export default Card