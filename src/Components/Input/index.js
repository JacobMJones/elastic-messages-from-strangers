import React, { useState } from "react";
import { useStateValue } from "../../State/StateProvider";
import axios from "axios";

import { useInput } from "../../Hooks/useInput";

function Input(props) {
  console.log("in input", props);
  const [{ numbers }, countDispatch] = useStateValue();
  const [{ title }, titleDispatch] = useStateValue();

  const {
    value: username,
    bind: bindUsername,
    reset: resetUsername
  } = useInput("");
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput(
    ""
  );

  const submitNewMessage = () => {
    const { isReply, isReplyId, hasReply, hasReplyId } = props;
    console.log("in submsadsadsait", isReply, isReplyId, hasReply, hasReplyId);
    const id =
      Date.now() +
      Math.random()
        .toString(36)
        .substring(7);
    axios
      .post("http://localhost:8080/new-message", {
        replyId: isReplyId,
        id: id,
        username: username,
        type: "text",
        text: message,
        createdOn: Date.now(),
        lastSeenOn: Date.now(),
        seenAmount: 0,
        lastFlaggedOn: null,
        flagAmount: 0,
        hasReply: hasReply,
        hasReplyId: hasReplyId,
        isReply: isReply,
        isReplyId: isReplyId,
        hidden: false
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    resetUsername();
    resetMessage();
  };
  return (
    <form onSubmit={submitNewMessage}>
      <label>
        username:
        <input type="text" {...bindUsername} />
      </label>
      <br />
      <label>
        password:
        <input type="text" {...bindMessage} />
      </label>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
export default Input;
