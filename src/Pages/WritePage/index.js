import React from "react";
import Input from "../../Components/InputMessage";
import LinkButton from "../../Components/LinkButton"
import { BodyContainer, Header } from "./styles";

function WritePage() {
  return (
    <BodyContainer>
      <Header>
        Write
        <LinkButton title={"Read"} to={'/read'} />
        <LinkButton title={"Check"} to={'/check'} />
      </Header>
      <Input
        isReply={false}
        isReplyId={null}
        hasReply={false}
        hasReplyId={null}
      />
    </BodyContainer>
  );
}

export default WritePage;

