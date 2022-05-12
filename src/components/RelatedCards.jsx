import React from "react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

function RelatedCards() {
  const [relatedCards, setRelated] = useState();
  const [referenceCard, setReferenceCard] = useState([]);

  let { cardName } = useParams();

  useEffect(() => {
    //Create function to make API call
    const getCard = async () => {
      axios
        .get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`)
        .then((response) => {
          setReferenceCard(response.data.data[0]);
        });
    };
    getCard();
  }, []);

  console.log(referenceCard.archetype);

  if (referenceCard.archetype) {
    console.log(referenceCard.archetype);

    axios
      .get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${referenceCard.archetype}`
      )
      .then((response) => {
        setRelated(response);
      });
    console.log(relatedCards);
  }

  return <div></div>;
}

export default RelatedCards;
