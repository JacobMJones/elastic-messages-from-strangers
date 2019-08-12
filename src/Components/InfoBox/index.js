import React, {useState} from "react";
import { useStateValue } from "../../State/StateProvider";

function InfoBox() {
  const [{ currentRecord }, currentRecordDispatch] = useStateValue();
  const [{ accounts }, accountsDispatch] = useStateValue();
  return (
    <div style={{fontSize:26}}>
      {accounts !== undefined && currentRecord !== undefined && (
          <span>
        <p>
         <b> Name:</b> {`${accounts[currentRecord].firstname} ${accounts[currentRecord].lastname}`}
        </p>
         <p>
         <b> Age:</b> {accounts[currentRecord].age}
       </p>
       <p>
       <b> Address:</b> {accounts[currentRecord].address}, {accounts[currentRecord].city}, {accounts[currentRecord].state}
       </p>
       <p>
       <b> Employer:</b> {accounts[currentRecord].employer}
       </p>
       <p>
       <b> Balance:</b> ${accounts[currentRecord].balance}
       </p>
       </span>
      )}

  
    </div>
  );
}

export default InfoBox;
