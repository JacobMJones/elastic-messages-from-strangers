import React from "react";
import { Word, RemoveFilterWordButton } from "./styles";
function FilterWord(props) {
  return (
    <Word>
      {props.word}
      <RemoveFilterWordButton onClick={()=>{props.remove(props.word)}}>remove</RemoveFilterWordButton>
    </Word>
  );
}
export default FilterWord;
