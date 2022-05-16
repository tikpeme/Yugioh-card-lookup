import React from "react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";

function DisplayRelatedCards({ referenceCard }) {
  const [relatedCards, setRelated] = useState([]);
  console.log(referenceCard.archetype);

  useEffect(() => {
    //console.log(referenceCard.archetype);
    if (referenceCard.archetype) {
      //check to see if there is an archtype for the refernce card
      console.log(referenceCard.archetype);
      axios
        .get(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${referenceCard.archetype}`
        )
        .then((response) => {
          setRelated(response.data.data);
        });
      console.log(relatedCards);
    } else {
      axios
        .get(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=${referenceCard.cardset[0]}`
        )
        .then((response) => {
          setRelated(response.data.data);
        });
      console.log(relatedCards);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {console.log(relatedCards)}
      <Grid>
        {relatedCards.map &&
          relatedCards.map((card, idx) => {
            return (
              <div key={idx}>
                <SLink to={"/Card/" + card.id}>
                  <CardName>{card.name}</CardName>
                  <Img
                    className="image"
                    src={card.card_images[0].image_url}
                    alt={card.name}
                  />
                </SLink>
              </div>
            );
          })}
      </Grid>
    </div>
  );
}

function RelatedCards() {
  const [referenceCard, setReferenceCard] = useState([]);

  let { cardId } = useParams();

  useEffect(() => {
    //Create function to make API call
    //console.log(cardId);
    const getCard = async () => {
      axios
        .get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${cardId}`)
        .then((response) => {
          setReferenceCard(response.data.data[0]);
        });
    };
    getCard();
  }, []);

  //console.log(referenceCard.archetype);

  return (
    <div>
      {referenceCard.name && (
        <DisplayRelatedCards referenceCard={referenceCard} />
      )}
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 70px;
  margin: auto 30px;
  text-align: center;
`;

const Img = styled.img`
  border: 1rem none;
  height: 20rem;
`;
const SLink = styled(NavLink)`
  text-decoration: none;
  color: violet;
`;

const CardName = styled.h3`
  margin-bottom: 1px;
  text-decoration: none;
`;

export default RelatedCards;
