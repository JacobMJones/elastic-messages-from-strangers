import React, { useEffect } from "react";
import { useStateValue } from "../../State/StateProvider";
import elasticAPI from "../../ElasticAPI";
import Input from "../Input/";
import Message from "./Message";
function Messages() {
  const [{ filter }] = useStateValue();
  const [{ messages }, messagesDispatch] = useStateValue();
  const [{ message }, messageDispatch] = useStateValue();
  const [{ view }, viewDispatch] = useStateValue();

  message && console.log('focuse messages', message)
  useEffect(() => {
  !messages && elasticAPI.getAllMessages(messagesDispatch);
  });
  return (
    <>
      {/* map message array into HTML */}
      {view === "search" &&
        messages &&
        messages.map((item, index) => {
          if (filter.length === 0) {
            return <Message message={item} key={`messages ${index}`} />;
          } else {
            for (var i = 0; i < filter.length; i++) {
              if (item.text.includes(filter[i].word)) {
                return <Message message={item} key={`messages ${index}`} />;
              } else {
                return;
              }
            }
          }
        })}
      {/* View indiviual message */}
      {view === "message" && messages && (
        <span>
          {message.text}
          <br />
          Written by: {message.username}
          <br />
          <br />
          <Input
            isReply={true}
            isReplyId={message.id}
            hasReply={false}
            hasReplyId={null}
          />
          <br />
          <br />
          <button
            onClick={() => {
              viewDispatch({ type: "changeView", newView: "search" });
            }}
          >
            Back to Search
          </button>
        </span>
      )}
    </>
  );
}
export default Messages;
