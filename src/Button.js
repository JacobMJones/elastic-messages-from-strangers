import React from "react";
import { useStateValue } from "./State/StateProvider";
function Button() {
  const [{ numbers }, dispatch] = useStateValue();
  return (
    <button
      onClick={() =>
        dispatch({
          type: "addToCount",
          newCount: { count: numbers.count + 1 }
        })
      }
    >
      Click me
    </button>
  );
}
export default Button;
