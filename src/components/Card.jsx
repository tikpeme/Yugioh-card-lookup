import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
function CardDisplay({data}){//This Function is called after state variable in parent function component is updated

  console.log(data)//Check 

  return(data.name && <Plate>
        <Title> {data.name}  </Title>
        <Cardcontent>
          <ImgStyled>
          <img 
          style ={{ maxWidth:"101%", height:"auto", minWidth:"157px"}}
          src={data.card_images[0].image_url} 
          alt={data.name} />
          </ImgStyled>
      <DetailWrapper >
       {data.attribute && <Details id={data.attribute}>  <strong>Attribute</strong>:  {data.attribute}</Details>}
        <Details id={data.type}>  <strong>Card Type</strong>: {data.type}</Details>

        {/*Check to see if card type to display appropriate detail text.  If monster card, then has race.*/}
       {data.attribute  && <Details id={data.race}> <strong>Race</strong>:  {data.race}</Details>}
        {/* If non monster card display type of spell or trap card */}
       {!data.attribute  && <Details id={data.race}> <strong>{data.type} Type</strong>:  {data.race}</Details>}

        {/* Check to see if monser card is "LEVEL", "RANK" or LINK. If not link or XYZ then has level */}
       {(data.level && data.type !== "XYZ Monster" && data.type !== "Link Monster")  && <Details id={data.level}> <strong>Level</strong>:  {data.level}</Details>}
        {/* If link, has link */}
        {data.type === "Link Monster" && <Details id={data.level}>  <strong>Link</strong>: {data.linkval}</Details>}
        {/* If XYZ, has Rank */}
        {data.type === "XYZ Monster" && <Details id={data.level}>  <strong>Rank</strong>: {data.level}</Details>}

        <Details id={data.desc}> <strong>Card Text</strong>: <br></br>  {data.desc}</Details>
        <Stats>
        {data.attribute && <Details id={data.atk}> ATK: {data.atk}</Details>}
        {data.attribute && <Details id={data.def}> DEF: {data.def}</Details>}
        </Stats>
      </DetailWrapper>
    </Cardcontent>
  
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
max-width: 50%;
min-width: 356px;

background-color: #aba3a3;
padding: 2.5rem;
text-align: center;
`

const Cardcontent = styled.div`
   display: flex;
   width: 100%;
  //padding-left: 25%;
  margin: auto;
  text-align: left;
  align-items: flex-start;
  justify-content: center;
  flex-flow: center;
  flex-wrap: wrap ;
  align-content: space-around;
`
const ImgStyled = styled.div`
flex:1;
text-align: center;
padding: 1rem ;
width: auto;

`

const DetailWrapper = styled.div`
flex:1;
//display: flex;
//flex-direction: column;
justify-content: center;
align-content: center;



`

const Details = styled.div`
//width: 26rem;
border: 2px black solid;
border-radius: 0.6rem;
margin: 1rem 0;
padding: 1rem;

min-width: 140px;

font-size: 1.5rem;
font-weight: 300;
color: #000000;
align-self: center;

`
const Stats = styled.div`
display: flex;
justify-content: space-between;
margin-top: -1rem;
margin-bottom: -1rem;
//max-width: 20rem;

//align-self: center;

`
const Title = styled.div`
//border: 2px red solid;
font-family: 'Roboto Condensed', sans-serif;
font-size: 3rem;
font-weight: 500;
width:auto;
text-align: center;
//padding-bottom: 1rem;
margin-bottom: 1rem;
border-bottom: 1px black solid;

`

export default Card