import React, { useState } from "react";
import elasticAPI from "../../ElasticAPI"
import { useStateValue } from "../../State/StateProvider";
import axios from "axios";

import { useInput } from "../../Hooks/useInput";




function InputMessageId(props) {
  console.log("in input", props);


  const {
    value: messageId,
    bind: bindMessageId,
    reset: resetMessageId
  } = useInput("");

  function submitId (event){
    
  event.preventDefault()
 elasticAPI.getMessageById(messageId, props.updateState)

 
  };
  return (
    <form onSubmit={submitId}>
      <label>
        message id:
        <input type="text" {...bindMessageId} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
export default InputMessageId;
