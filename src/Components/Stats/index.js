import React, { useEffect } from "react";
import { useStateValue } from "../../State/StateProvider";
import countWords from "./functions/countWords"
function Stats() {
  const [{ messages }, messagesDispatch] = useStateValue();
  const [{ filter }, filterDispatch] = useStateValue();
  useEffect(() => {
    if (messages) {
      // console.log(messages, filter);
    }
  });
  return (
    <span>
      <h2>Stats</h2>
      <p>Total Messages: {messages && messages.length}</p>
      <p>Total Words: {messages && countWords(messages)}</p>
      <p>Most Common Word:</p>
      <p>Most Common Leter:</p>
    </span>
  );
}
export default Stats;



