import React from 'react'
import {useRef,useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import axios from 'axios';
import { createRoutesFromChildren } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


import '../styles/Carousel.css'


function XYZCarousel() {

    const [xyzArray, setXyzArray] =  useState([]);

    const[width, setWidth] = useState(0);
    const carousel = useRef();


    useEffect(()=>{
        //make api call to server for XYZ monsters of rank 7 and above
    const getXyz = async() =>{
        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?type=XYZ%20Monster&level=gt7`)
            .then(response =>{ 
                setXyzArray(response.data.data)}) 
    };
    getXyz()
  //console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
  //  setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth )
    },[])

    //apply Fisher-Yates (aka Knuth) shuffle
    const randomizeArray = (array) =>{
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }


  return (
<motion.div ref ={carousel} className='carousel'>
          <motion.div 
          drag = 'x' 
          dragConstraints={{right:0, left:-15093.3}} 
          initial = {{x : 0}}
          animate = {{x:-15093}}
          transition={{
            type: "spring",
            damping : 100000,
            mass: 100000,
            repeat: Infinity

           
        }}
          className='inner-carousel'>
              {
              randomizeArray(xyzArray).map((card)=>{
                  return(
                  <motion.div className='item' key={card.id}>
                    <NavLink to = {"/Card/"+card.name}>

                      <img src={card.card_images[0].image_url} alt={card.name} />
                      </NavLink>
                      </motion.div>

                      );
                    })}
          </motion.div>
      </motion.div>
  );
}


export default XYZCarousel