import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import "../styles/Carousel.css";

function SynchroCarousel() {
  const [synchroArray, SetSynchroArray] = useState([]);
  const carousel = useRef();

  useEffect(() => {
    const getSynchroCards = async () => {
      axios
        .get(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Synchro%20Monster&level=gt8`
        )
        .then((response) => {
          SetSynchroArray(response.data.data);
        });
      console.log(synchroArray);
    };
    getSynchroCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //apply Fisher-Yates (aka Knuth) shuffle
  const randomizeArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    array.length = 72;
    console.log("array.length is : " + array.length);
    return array;
  };

  return (
    synchroArray && (
      <div>
        <h1> Synchro Monsters </h1>
        <motion.div ref={carousel} className="carousel">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -15093.3 }}
            initial={{ x: 0 }}
            animate={{ x: -15093 }}
            transition={{
              type: "spring",
              damping: 100000,
              mass: 100000,
              repeat: Infinity,
            }}
            className="inner-carousel"
          >
            {randomizeArray(synchroArray).map((card) => {
              return (
                <motion.div className="item" key={card.id}>
                  <NavLink to={"/Card/" + card.id}>
                    <img src={card.card_images[0].image_url} alt={card.name} />
                  </NavLink>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    )
  );
}

export default SynchroCarousel;
