import React,{useState} from "react";
import InputMessageId from "../../Components/InputMessageId";
import LinkButton from "../../Components/LinkButton";
import { BodyContainer, InputContainer, Header } from "./styles";

function ReadPage() {
  const [state, setValues] = useState({
    message:''
    });
    const updateState = (name, value) => {
      setValues({
        ...state,
        [name]: value
      });
    };
  return (
    <BodyContainer>
      <Header>
        Check
        <LinkButton title={"Write"} to={"/write"} />
        <LinkButton title={"Read"} to={"/read"} />
      </Header>
      <InputContainer>
        <InputMessageId updateState={updateState} />
      </InputContainer>
      {state.message}
    </BodyContainer>
  );
}

export default ReadPage;
