import React from 'react';
import { Button } from "./styles";
import { useStateValue } from "../../State/StateProvider";
function NavButton(props) {
    const [{ page }, pageDispatch] = useStateValue()

  return <Button onClick={()=>{pageDispatch({
    type: "changePage",
    newPage: props.newPage
  });}}>{props.title}</Button>;
}

export default NavButton;

