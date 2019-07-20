import React from "react";
import { useStateValue } from "../../State/StateProvider";
import { BasicButton } from "./style.js";
function Button() {
  const [{ numbers }, countDispatch] = useStateValue();
  const [{ title }, titleDispatch] = useStateValue();
  console.log(useStateValue);
  return (
    <BasicButton
      onClick={() =>
        ButtonHandler(numbers, countDispatch, title, titleDispatch)
      }
    >
      Click me
    </BasicButton>
  );
}
export default Button;

function ButtonHandler(numbers, countDispatch, title, titleDispatch) {
  countDispatch({
    type: "addToCount",
    newCount: { count: numbers.count + 1 }
  });
  titleDispatch({
    type: "changeTitle",
    newTitle: "what what"
  });
  console.log("hello");
}
