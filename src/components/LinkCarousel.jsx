import React from "react";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { NavLink } from "react-router-dom";

import "../styles/Carousel.css";

function LinkCarousel() {
  const [linkArray, SetLinkArray] = useState([]);
  const carousel = useRef();

  useEffect(() => {
    const getLinkCards = async () => {
      axios
        .get(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Link%20Monster`
        )
        .then((response) => {
          SetLinkArray(response.data.data);
        });
      console.log(linkArray);
    };
    getLinkCards();
  }, []);

  //Filter array for card with Link Value of greater than 3
  const filterLinkVal = (array) => {
    return randomizeArray(array.filter((card) => card.linkval > 2));
  };

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
    return array;
  };

  return (
    linkArray && (
      <div>
        <h1> Link Monsters </h1>
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
            {filterLinkVal(linkArray).map((card) => {
              return (
                <motion.div className="item" key={card.id}>
                  <NavLink to={"/Card/" + card.name}>
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
export default LinkCarousel;
