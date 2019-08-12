import React from "react";
import { Content, ReplyButton } from "./styles";
import { useStateValue } from "../../../State/StateProvider";

function Message(props) {
  const [{ view }, viewDispatch] = useStateValue();
  const [{ message }, messageDispatch] = useStateValue();

  return (
    <Content>
      {props.message.text}
      <ReplyButton
        onClick={() => {
          viewDispatch({ type: "changeView", newView: "message" });
          messageDispatch({ type: "changeMessage", newMessage: props.message });
        }}
      >
        Reply
      </ReplyButton>
    </Content>
  );
}
export default Message;
