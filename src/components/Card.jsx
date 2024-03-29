import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function CardDisplay({ data }) {
  //This Function is called after state variable in parent function component is updated

  console.log(data); //Check

  useEffect(() => {
    const setBackgroundColor = () => {
      //get Dom elements to be modified
      const details = document.querySelectorAll(".Details");
      const plate = document.querySelector(".Plate");
      const title = document.getElementById("cardName");

      switch (data.type) {
        case "Normal Monster":
          plate.style.backgroundImage = "none";
          plate.style.backgroundColor = "#c18f4d";
          details.forEach((detail) => {
            detail.style.backgroundColor = "#ecdec4";
            detail.style.borderColor = "#d16813";
          });
          title.style.color = "black";
          title.style.borderBottom = "1px black solid";
          break;
        case "XYZ Monster":
          plate.style.backgroundImage = "none";

          plate.style.backgroundColor = "#171818";
          details.forEach((detail) => {
            detail.style.backgroundColor = "grey";
            detail.style.borderColor = "#d16813";
          });
          title.style.color = "white";
          title.style.borderBottom = "1px gold solid";
          break;
        case "XYZ Pendulum Effect Monster":
          plate.style.backgroundImage = "linear-gradient(#171818, #118984)";
          details.forEach((detail) => {
            detail.style.backgroundColor = "#a7d3d2";
            detail.style.borderColor = "#45403c";
          });
          title.style.color = "white";
          title.style.borderBottom = "1px gold solid";
          break;
        case "Synchro Monster":
          plate.style.backgroundImage = "none";
          plate.style.backgroundColor = "#e9e6e5";
          details.forEach((detail) => {
            detail.style.backgroundColor = "#f5f4f2";
            detail.style.borderColor = "#d16813";
          });
          title.style.color = "black";
          title.style.borderBottom = "1px black solid";
          break;
        case "Synchro Pendulum Effect Monster":
          plate.style.backgroundImage = "linear-gradient(#e9e6e5, #118984)";
          details.forEach((detail) => {
            detail.style.backgroundColor = "#a7d3d2";
            detail.style.borderColor = "#45403c";
          });
          title.style.color = "black";
          title.style.borderBottom = "1px black solid";
          break;
        case "Effect Monster":
        case "Union Effect Monster":
        case "Tuner Monster":
        case "Gemini Monster":
          plate.style.backgroundImage = "none";
          plate.style.backgroundColor = "#bb6f41";
          details.forEach((detail) => {
            detail.style.backgroundColor = "#e5cabe";
            detail.style.borderColor = "#d16813";
          });
          title.style.color = "black";
          title.style.borderBottom = "1px black solid";
          break;
        case "Pendulum Monster":
        case "Pendulum Tuner Effect Monster":
        case "Pendulum Effect Monster":
          plate.style.backgroundImage = "none";
          plate.style.backgroundImage = "linear-gradient(#b25426, #118984)";
          details.forEach((detail) => {
            detail.style.backgroundColor = "#a7d3d2";
            detail.style.borderColor = "#45403c";
          });
          title.style.color = "black";
          title.style.borderBottom = "1px black solid";
          break;
        case "Ritual Monster":
        case "Ritual Effect Monster":
          plate.style.backgroundImage = "none";
          plate.style.backgroundColor = "#527abe";
          details.forEach((detail) => {
            detail.style.backgroundColor = "#c4d3e4";
            detail.style.borderColor = "#d16813";
          });
          title.style.color = "black";
          title.style.borderBottom = "1px black solid";
          break;
        case "Fusion Monster":
          plate.style.backgroundImage = "none";
          plate.style.backgroundColor = "#893f97";
          details.forEach((detail) => {
            detail.style.backgroundColor = "#dbc6e1";
            detail.style.borderColor = "#d16813";
          });
          title.style.color = "black";
          title.style.borderBottom = "1px black solid";
          break;
        case "Pendulum Effect Fusion Monster":
          plate.style.backgroundImage = "linear-gradient(#893f97, #118984)";
          details.forEach((detail) => {
            detail.style.backgroundColor = "#a7d3d2";
            detail.style.borderColor = "#45403c";
          });
          title.style.color = "black";
          title.style.borderBottom = "1px black solid";
          break;
        case "Link Monster":
          plate.style.backgroundImage = "none";
          plate.style.backgroundColor = "#2972a8";
          details.forEach((detail) => {
            detail.style.backgroundColor = "#b9c9dc";
            detail.style.borderColor = "#d16813";
          });
          title.style.color = "black";
          title.style.borderBottom = "1px black solid";
          break;

        case "Spell Card":
          plate.style.backgroundImage = "none";
          plate.style.backgroundColor = "#058776";
          details.forEach((detail) => {
            detail.style.backgroundColor = "#b7dcd5";
            detail.style.borderColor = "#d16813";
          });
          title.style.color = "black";
          title.style.borderBottom = "1px black solid";
          break;
        case "Trap Card":
          plate.style.backgroundImage = "none";
          plate.style.backgroundColor = "#ae377d";
          details.forEach((detail) => {
            detail.style.backgroundColor = "#e6c4d9";
            detail.style.borderColor = "#d16813";
          });
          title.style.color = "white";
          title.style.borderBottom = "1px black solid";
          break;

        default:
      }
    };
    setBackgroundColor();
  }, [data.type]);

  return (
    data.name && (
      <Plate className="Plate">
        <Title id="cardName"> {data.name.toUpperCase()} </Title>
        <Cardcontent>
          <ImgStyled>
            <img
              style={{ maxWidth: "101%", height: "auto", minWidth: "157px" }}
              src={data.card_images[0].image_url}
              alt={data.name}
            />
          </ImgStyled>
          <DetailWrapper>
            {data.attribute && (
              <Details className="Details" id={data.attribute}>
                {" "}
                <strong>Attribute</strong>: {data.attribute}
              </Details>
            )}
            <Details className="Details" id={data.type}>
              {" "}
              <strong>Card Type</strong>: {data.type}
            </Details>

            {/*Check to see if card type to display appropriate detail text.  If monster card, then has race.*/}
            {data.attribute && (
              <Details className="Details" id={data.race}>
                {" "}
                <strong>Race</strong>: {data.race}
              </Details>
            )}
            {/* If non monster card display type of spell or trap card */}
            {!data.attribute && (
              <Details className="Details" id={data.race}>
                {" "}
                <strong>{data.type} Type</strong>: {data.race}
              </Details>
            )}

            {/* Check to see if monser card is "LEVEL", "RANK" or LINK. If not link or XYZ then has level */}
            {data.level &&
              data.type !== "XYZ Monster" &&
              data.type !== "Link Monster" && (
                <Details className="Details" id={data.level}>
                  {" "}
                  <strong>Level</strong>: {data.level}
                </Details>
              )}
            {/* If link, has link */}
            {data.type === "Link Monster" && (
              <Details className="Details" id={data.level}>
                {" "}
                <strong>Link</strong>: {data.linkval}
              </Details>
            )}
            {/* If XYZ, has Rank */}
            {data.type === "XYZ Monster" && (
              <Details className="Details" id={data.level}>
                {" "}
                <strong>Rank</strong>: {data.level}
              </Details>
            )}

            <Details className="Details" id={data.desc}>
              {" "}
              <strong>Card Text</strong>: <br></br> {data.desc}
            </Details>
            <Stats>
              {data.attribute && (
                <Details className="Details" id={data.atk}>
                  {" "}
                  ATK: {data.atk}
                </Details>
              )}
              {data.attribute && (
                <Details className="Details" id={data.def}>
                  {" "}
                  DEF: {data.def}
                </Details>
              )}
            </Stats>
          </DetailWrapper>
        </Cardcontent>
      </Plate>
    )
  );
}

function Card() {
  const [cardData, setCardData] = useState([]); //create states for Card

  let { cardId } = useParams(); //retrieve card name from URL paramaeter

  //console.log(CardName)//Check
  //console.log(cardData); //Check

  useEffect(() => {
    //Create function to make API call
    const getCard = async () => {
      fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${cardId}`)
        .then((res) => res.json()) // Provide information from API JSON format
        .then(({ data }) => setCardData(data[0]));
    };

    getCard();
  }, [cardId]);

  //console.log(cardData)//Check
  //console.log(cardData.name)//Check

  //Ensure that states variable is updated before rendering
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {cardData.name && <CardDisplay data={cardData} />}
    </div>
  );
}

const Plate = styled.div`
  border: 1px grey solid;
  border-radius: 1rem;
  margin: 2rem auto;

  max-width: 50%;
  min-width: 356px;

  box-shadow: 0 0 30px 5px grey;

  background-color: #aba3a3;
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Cardcontent = styled.div`
  display: flex;
  width: 100%;
  //padding-left: 25%;
  margin: auto;
  text-align: left;
  align-items: flex-start;
  justify-content: center;
  flex-flow: center;
  flex-wrap: wrap;
  align-content: space-around;
`;
const ImgStyled = styled.div`
  flex: 1;
  text-align: center;
  padding: 1rem;
  width: auto;
`;

const DetailWrapper = styled.div`
  flex: 1;
  //display: flex;
  //flex-direction: column;
  justify-content: center;
  align-content: center;
`;

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
`;
const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -1rem;
  margin-bottom: -1rem;
  //max-width: 20rem;

  //align-self: center;
`;
const Title = styled.div`
  //border: 2px red solid;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 3rem;
  font-weight: 500;
  width: auto;
  text-align: center;
  //padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px black solid;
`;

export default Card;
