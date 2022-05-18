import React from "react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { NavLink } from "react-router-dom";

import "../styles/Carousel.css";

function RitualCarousel() {
  const [RitualArray, setRitualArray] = useState([]);
  const [RitualEffectArray, setRitualEffectArray] = useState([]);

  const carousel = useRef();

  useEffect(() => {
    //make api call to server for XYZ monsters of rank 7 and above
    const getRitualMonster = async () => {
      axios
        .get(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Ritual%20Monster&level=gt6`
        )
        .then((response) => {
          setRitualArray(response.data.data);
        });
    };
    const getRitualEffectMonster = async () => {
      axios
        .get(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Ritual%20Effect%20Monster&level=gt8`
        )
        .then((response) => {
          setRitualEffectArray(response.data.data);
        });
    };
    getRitualMonster();
    getRitualEffectMonster();
    //console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    //  setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth )
  }, []);

  //apply Fisher-Yates (aka Knuth) shuffle
  const randomizeArray = (array1, array2) => {
    let array = array1.concat(array2);
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

    array.length = 72; // Set number of  cards in carousel to be the same
    return array;
  };

  return (
    RitualArray && (
      <div>
        {console.log(RitualArray)}
        <h1> Ritual Monsters </h1>
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
            {randomizeArray(RitualArray, RitualEffectArray).map((card) => {
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

export default RitualCarousel;
