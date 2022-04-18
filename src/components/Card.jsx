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
       {data.attribute && <Details id={data.attribute}>  <strong>Attribute</strong>:  {data.attribute}</Details>}
        <Details id={data.type}>  Card Type:  {data.type}</Details>

        {/*Check to see if card type to display appropriate detail text.  If monster card, then has race.*/}
       {data.atk  && <Details id={data.race}> <strong>Race:</strong>  {data.race}</Details>}
        {/* If non monster card display type of spell or trap card */}
       {!data.atk && <Details id={data.race}> {data.type} Type:  {data.race}</Details>}

        {/* Check to see if monser card is "LEVEL", "RANK" or LINK. If not link or XYZ then has level */}
       {(data.type !== "XYZ Monster" && data.type !== "Link Monster")  && <Details id={data.level}> Level:  {data.level}</Details>}
        {/* If link, has link */}
        {data.type === "Link Monster" && <Details id={data.level}>  Link: {data.linkval}</Details>}
        {/* If XYZ, has Rank */}
        {data.type === "XYZ Monster" && <Details id={data.level}>  Rank : {data.level}</Details>}

        <Details id={data.desc}> Card Text: <br></br>  {data.desc}</Details>
        <Stats>
        {data.atk  && <Details id={data.atk}> ATK {data.atk}</Details>}
        {data.def && <Details id={data.def}> DEF: {data.def}</Details>}
        </Stats>
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
border: 2px green solid;
border-radius: 2rem;
margin: auto;
width: 90%;
background-color: #aba3a3;
padding: 2.5rem;
//background-size:cover;
    overflow:none;
`

const DetailWrapper = styled.div`
  width: 100%;
  padding-left: 25%;
  margin: auto;
  display: flex;
  align-items: center;

`
const Details = styled.div`
width: 20rem;
border: 2px black solid;
border-radius: 0.6rem;
margin: 1rem;
padding: 1rem;

font-size: 1.5rem;
font-weight: 300;
color: #000000;

`
const Stats = styled.div`
display: flex;
width: 50%;
margin-top: -1rem;
margin-bottom: -1rem;



`
const Title = styled.div`
//border: 2px red solid;
font-family: 'Roboto Condensed', sans-serif;
font-size: 3rem;
font-weight: 500;
width:auto;
text-align: center;
`

export default Card