import React from "react";
import { StateProvider} from "./State/StateProvider";
import Button from "./Button";
import Text from "./Text"
import initialState from "./State/InitialState"
import reducer from "./State/Reducer"
function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Text/>
      <Button />
    </StateProvider>
  );
}
export default App;
