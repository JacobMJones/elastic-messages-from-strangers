import React, { useEffect } from "react";
import { useStateValue } from "../../State/StateProvider";
import { useInput } from "../../Hooks/useInput";
import FilterWord from "./FilterWord";
function Filter() {
  const [{ filter }, filterDispatch] = useStateValue();
  const {
    value: wordFilter,
    bind: bindWordFilter,
    reset: resetWordFilter
  } = useInput("");

  useEffect(() => {
    if (filter) {
      // console.log("filter", filter, wordFilter);
    }
  });

  const remove = word => {
   let p = filter.filter(i => i.word !== word)
   filterDispatch({ type: "addFilter", newFilter: p });
   
  };

  const handleSubmit = () => {
    let b = [{ word: wordFilter }, ...filter];
    filterDispatch({ type: "addFilter", newFilter: b });
    resetWordFilter();
  };
  return (
    <span>
      <h2>Filter</h2>
      <>
        Current Filters:
        <br />
        {filter &&
          filter.map((item, index) => {
            return (
              <span key={`filter ${index}`}>
                <FilterWord word={item.word} remove={remove} />
                <br />
              </span>
            );
          })}
      </>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        butt
      </button>
      <label>
        Only contains:
        <input type="text" {...bindWordFilter} />
      </label>
      <br />
    </span>
  );
}
export default Filter;
