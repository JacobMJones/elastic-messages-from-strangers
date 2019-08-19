import React from "react";
import Messages from "../../Components/Messages";
import LinkButton from "../../Components/LinkButton"
import { BodyContainer, MessagesContainer, Header } from "./styles";

function ReadPage() {
  return (
    <BodyContainer>
      <Header>
        Read
        <LinkButton title={"Write"} to={'/write'} />
        <LinkButton title={"Check"} to={'/check'} />
      </Header>
      <MessagesContainer>
        <Messages />
      </MessagesContainer>
    </BodyContainer>
  );
}

export default ReadPage;

