import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  const [input, setInput] = useState(""); // create state for form input

  //Event handler for submission of form
  const submitHandler = (e) => {
    navigate("/searched/" + input); //Navigate to another page
  };

  return (
    <Container>
      <StyledIcons to={"/"}>
        <AiOutlineHome></AiOutlineHome>
      </StyledIcons>
      <StyledForm onSubmit={submitHandler}>
        <FaSearch
          style={{ position: "relative", left: "25px", color: "white" }}
        />
        <StyledInput
          type="text"
          name="card"
          placeholder="Search"
          autocomplete="off"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          required
        ></StyledInput>
      </StyledForm>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const StyledInput = styled.input`
  border: none;
  background: linear-gradient(35deg, #494949, #313131);
  font-size: 1.5rem;
  color: white;
  padding: 1rem 3rem;
  border: none;
  border-radius: 1rem;
  outline: none;
  width: 30%;
  //margin: 2rem 0 auto;
  min-width: 200px;
  //margin-bottom: 2.5rem;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
  }
`;
const StyledForm = styled.form`
  width: auto;
  text-align: center;
`;
const StyledIcons = styled(NavLink)`
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 4rem;
  height: 4rem;
  transform: scale(0.9);
  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
`;

export default SearchBar;
