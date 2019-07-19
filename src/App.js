import React from "react";
import { StateProvider} from "./State/StateProvider";
import Button from "./Button";
import Text from "./Text"
import InitialState from "./State/InitialState"
import reducer from "./State/Reducer"
function App() {
  return (
    <StateProvider initialState={InitialState} reducer={reducer}>
      <Text/>
      <Button />
    </StateProvider>
  );
}
export default App;
