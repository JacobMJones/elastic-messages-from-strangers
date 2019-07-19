import React from "react";
import { useStateValue } from "./State/StateProvider";
function Text() {
  const [{ numbers }] = useStateValue();
  return <p>I been clickered {numbers.count} times</p>;
}
export default Text;
