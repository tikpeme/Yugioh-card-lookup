import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
function ErrorPage() {
  let { cardName } = useParams(); //Retrieve the search term from the URL

  return (
    //Display the Error Message
    <MessageContainer>
      <Message>
        OOPS!! something went wrong, Go back to the previous page or try another
        search term other than: <SearchTerm> {`"${cardName}"`} </SearchTerm>
      </Message>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  width: 40%;
  height: auto;
  margin: auto;
  display: inline-block;
  margin-top: 10%;
`;
const Message = styled.div`
  color: #f604f6;
  font-size: xx-large;
`;

const SearchTerm = styled.div`
  color: inherit;
  font-weight: bolder;
`;
export default ErrorPage;
