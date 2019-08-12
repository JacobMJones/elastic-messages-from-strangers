import React from "react";
import ReactDataGrid from "react-data-grid";
import { useStateValue } from "../../../State/StateProvider";

const columns = [
  { key: "account_number", name: "Account #" },
  { key: "firstname", name: "Name" },
  {key:"age", name:"Age"},
  {key:"city", name:"City"},
  { key: "balance", name: "Balance" }
];

const BasicTable = (props) => {
  const [{ accounts }] = useStateValue();

  console.log('My Table Props', props)
  const rowGetter = rowNumber => accounts[rowNumber];
  const columnProperties = {
    width: props.width
  }
  return (
    <ReactDataGrid
      columns={columns.map(c => ({ ...c, ...columnProperties }))}
      rowGetter={rowGetter}
      rowsCount={accounts.length}
      minHeight={500}
      width={props.width
      }
    />
  );
};

export default BasicTable;
