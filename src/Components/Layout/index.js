import React from "react";
import { useStateValue } from "../../State/StateProvider";
import GetDataButton from '../GetDataButton/'
import Text from "../Text/index.js";

function Layout() {
  const [{ accounts }, accountsDispatch] = useStateValue();

  if(accounts !== undefined){
    console.log(accounts[5])
  }

  return (
    <div>
   {accounts !== undefined && accounts[5].firstname }
      <Text />
 <GetDataButton/>
    </div>
  );
}
export default Layout;
