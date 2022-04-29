import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Filter() {
  //For the filter function component, data from the current page is passed into it
  const { searchTerm } = useParams();
  //  console.log("Seaech Term is "+searchTerm)

  const [filterResults, setFilterResults] = useState([]);


  useEffect(() => {
    // re-make api call, same as component that Filter componenet was called in
    const getCards = async () => {
      const { data } = await axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchTerm}`,
      ); // API call, no key require
      if (data) setFilterResults(data.data);
    };
    getCards();
  }, [searchTerm]);

  //console?.log(filterResults)
  //Create an object with

  // add functionality t listener for SButtons clicks to update color
  const [filterArray, setFilterArray] = useState([]);

  const updateFilterArray = (e, buttonValue) => {

    if (filterArray.includes(buttonValue)) {
      //if value is in array already "unselect" or remove from array and change color
      const indexofFilterTerm = filterArray.findIndex((str) => {
        return str === buttonValue;
      });
      filterArray.splice(indexofFilterTerm, 1);
      //Call Button color update function
      buttonColorReset(e)
        } else {
      filterArray.push(buttonValue);
      buttonColorUpdate(e)
    }
    setFilterArray([...filterArray]);
    //console.log(filterArray);

    filterCards();
  };

  //Filter function to return new filtered array
  const filterCards = () => {
    let newCardArr = filterResults;

    if (filterArray.length > 0) {
      let newCardArr = [];
      for (let i = 0; i < filterArray.length; i++) {
        //let tempArr = [];
        for (let j = 0; j < filterResults.length; j++) {
          if ((filterArray[i] === filterResults[j].type) || (filterArray[i] === filterResults[j].race) ) {
            //console.log(filterResults[j])
            //console.log(tempArr)
            newCardArr.push(filterResults[j]);
          }
          //newCardArr+=tempArr
        }
      }
      //console.log(newCardArr.length);
      //console.log('This is the final Array' + { newCardArr });
      return newCardArr;
    } else {
      return newCardArr;
    }
  };


  const buttonColorReset = (e)=>{
    if(e){
    e.target.style.backgroundColor = '#bcb9b9';
    }
    else{
      let buttonElems = document.getElementsByTagName('button')
      console.log(buttonElems)

      for (let i =0; i<buttonElems.length; i++){
        buttonElems[i].style.backgroundColor='white'
      }
        
    

    }

  }

  const buttonColorUpdate = (e)=>{
    
    e.target.style.backgroundColor = 'Salmon';


  }


  //console.log(filterResults)
  //console.log(filterCards())

  //

  return (
    <div>
      <Filters> 

      <FilterButtonContainer id="Monster">  
      <SButtons
        value="Normal Monster"
        onClick={(e) => {
          updateFilterArray(e, e.target.value);
        }}
      >
        Normal
      </SButtons>
      <SButtons
        value="Effect Monster"
        onClick={(e) => {
          updateFilterArray(e, e.target.value);
        }}
      >
        Effect
      </SButtons>
      <SButtons
        value="Flip Effect Monster"
        onClick={(e) => {
          updateFilterArray(e, e.target.value);
        }}
      >
      Flip Effect Monster
      </SButtons>

      <SButtons
        value="Ritual Monster"
        onClick={(e) => {
          updateFilterArray(e, e.target.value);
        }}
      >
        Ritual  Normal 
      </SButtons>
      <SButtons
        value="Ritual Effect Monster"
        onClick={(e) => {
          updateFilterArray(e, e.target.value);
        }}
      >
        Ritual Effect 
      </SButtons>
      <SButtons
        value="Fusion Monster"
        onClick={(e) => {
          updateFilterArray(e, e.target.value);
        }}
      >
        Fusion 
      </SButtons>
      <SButtons
        value="Synchro Monster"
        onClick={(e) => {
          updateFilterArray(e, e.target.value);
        }}
      >
        Synchro 
      </SButtons>
      <SButtons
        value="Synchro Effect Monster"
        onClick={(e) => {
          updateFilterArray(e, e.target.value);
        }}
      >
        Synchro Effect 
      </SButtons>

      <SButtons
        value="XYZ Monster"
        onClick={(e) => {
          updateFilterArray(e, e.target.value);
        }}
      >
        XYZ 
      </SButtons>

      <SButtons
        value="Link Monster"
        onClick={(e) => {
          updateFilterArray(e, e.target.value);
        }}
      >
        Link 
      </SButtons>

      </FilterButtonContainer>  

      <FilterButtonContainer id="Spell">  

      <SButtons
        value="Spell Card"
        onClick={(e) => {
          updateFilterArray(e, e.target.value);
        }}
      >
        Spell Card
      </SButtons>

      </FilterButtonContainer>  

      <FilterButtonContainer id="Trap">  

      <SButtons
        value="Trap Card"
        onClick={(e) => {
          updateFilterArray(e, e.target.value);
        }}
      >
        Trap Card
      </SButtons>
      </FilterButtonContainer>  


      </Filters>
      <Grid>
        {filterCards &&
          filterCards()?.map((card, idx) => {
            return (
              <div key={idx}>
                <SLink to={'/Card/' + card.name}>
                  <CardName>{card.name}</CardName>
                  <Img className="image" src={card.card_images[0].image_url} alt={card.name} />
                </SLink>
              </div>
            );
          })}
      </Grid>
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

`

const CardName = styled.h3`
  margin-bottom: 1px;
  text-decoration: none;
`
const Filters = styled.div`
  display: flex;
  width: 100%;
  justify-content:space-between;


`
const FilterButtonContainer = styled.div`
  flex:1;
  margin-bottom: 1px;
  text-decoration: none;
`

const SButtons = styled.button`
  width: 105px;
  height: 40px;
  border: 2em;
  margin: .4em;
  border-radius: 60%;
  background-color: #bcb9b9 ;


  

`
export default Filter;
