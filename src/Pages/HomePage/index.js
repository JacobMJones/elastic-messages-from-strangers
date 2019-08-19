import React from "react";
import { Body, Span } from "./styles";
import LinkButton from "../../Components/LinkButton"

function HomePage() {
  return (
    <Body>
      <Span>
        <h1>Home</h1>
        <LinkButton title={"Write"} to={'/write'} />
        <LinkButton title={"Read"} to={'/read'} />
        <LinkButton title={"Check"} to={'/check'} />
      </Span>
    </Body>
  );
}

export default HomePage;
