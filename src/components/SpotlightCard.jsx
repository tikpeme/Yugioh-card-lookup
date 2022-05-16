import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import cardBack from "../images/Card_Back.jpeg";

import "../styles/SpotlightCard.css";

function SpotlightCard() {
  const [spotLight, setSpotLight] = useState(); //Create a state for the random spotlight card

  //Make API call to Yugioh card data base to get a radom card
  const getSpotLight = async () => {
    fetch(`https://db.ygoprodeck.com/api/v7/randomcard.php`) // API call, no key required
      .then((res) => res.json()) // Provide information from API JSON format
      .then((data) => setSpotLight(data));
    /*
         To consider eventually adding more code to make the spot light card be more of rare cards.  Also to utilize local  storage 
        */
  };

  const drawCard = () => {
    getSpotLight();
    console.log(spotLight.name);
    console.log(spotLight);

    //let innerCard = document.querySelector(".flip-card-inner"); //implement later
  };
  useEffect(() => {
    getSpotLight();
  }, []);

  return (
    <div>
      {spotLight && (
        <Sdiv>
          <SLink to={"/Card/" + spotLight.id}>
            <Sh2> You drew : {spotLight.name}!</Sh2>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-back">
                  <img
                    src={spotLight.card_images[0].image_url}
                    alt={spotLight.name}
                  />
                </div>
                <div className="flip-card-front">
                  <img src={cardBack} alt={spotLight.name} />
                </div>
              </div>
            </div>
          </SLink>
        </Sdiv>
      )}
      {spotLight && console.log(spotLight.name)}
      <Sbutton onClick={() => drawCard()}> Draw! </Sbutton>
    </div>
  );
}

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: silver;
`;

const Sdiv = styled.div`
  display: flex;
  width: auto;
  margin: 50px;
  justify-content: center;
`;
const Sh2 = styled.h2`
  font-family: "Shrikhand", cursive;
  color: rgb(220, 218, 218);
  font-weight: 100;
  text-shadow: 2px 2px #ba1bba;
`;

const Sbutton = styled.button`
  cursor: pointer;
  display: block;
  margin: 10px auto;
  font-size: 40px;
  width: auto;
  height: 100px;
  border-radius: 50%;
  background-color: brown;
  color: rgb(220, 218, 218);
  font-family: "Shrikhand";
  text-shadow: 2px 2px #ba1bba;
`;
export default SpotlightCard;
