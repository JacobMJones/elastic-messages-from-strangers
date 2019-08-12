import React from "react";
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
  fetch("https://nodejs-server-0987.appspot.com/test-query")
    .then(res => res.json())
    .then(res => {
      res.hits.hits.forEach((item, index) => {
        item._source.index = index;
        accounts.push(item._source);
      });

      accountsDispatch({
        type: "addAccounts",
        newAccounts: accounts
      });
    });
}
// https://nodejs-server-0987.appspot.com