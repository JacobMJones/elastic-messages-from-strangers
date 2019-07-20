import React from "react";
import axios from "axios";
import { useStateValue } from "../../State/StateProvider";
import { BasicButton } from "./style.js";
function GetDataButton() {
  const [{ accounts }, accountsDispatch] = useStateValue();

  return (
    <BasicButton onClick={() => ButtonHandler(accountsDispatch, accounts)}>
      GetData
    </BasicButton>
  );
}
export default GetDataButton;

async function ButtonHandler(accountsDispatch, oldAccounts) {
  const accounts = new Array();
  fetch("http://localhost:8080/test-query")
    .then(res => res.json())
    .then(res => {
      res.hits.hits.forEach(item => {
        accounts.push(item._source);
      });
      accountsDispatch({
        type: "addAccounts",
        newAccounts: accounts
      });
    });
}
