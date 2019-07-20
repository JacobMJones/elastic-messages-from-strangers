import React from "react";
import { StateProvider } from "./State/StateProvider";
import Layout from "./Components/Layout/index.js";
import initialState from "./State/InitialState";
import reducer from "./State/Reducer";
function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
     <Layout/>
    </StateProvider>
  );
}
export default App;
