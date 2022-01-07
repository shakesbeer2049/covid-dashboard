import { useState } from "react";
import Display from "./Display";

const Filter = ({ covid, all, setAll, select, setSelect }) => {
  const [filtered, setFiltered] = useState([]);
  const [inputLength, setInputLength] = useState("");

  //INPUT HANDLER FUNC
  const searchHandler = (e) => {
    setInputLength(e.target.value);
    setFiltered(
      covid.filter((f) =>
        f.country.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <input type="text" placeholder="search ..." onChange={searchHandler} />
      {covid ? (
        <Display
          filtered={filtered}
          inputLength={inputLength}
          covid={covid}
          all={all}
          setAll={setAll}
          select={select}
          setSelect={setSelect}
        />
      ) : <h1>Loading...</h1>}
    </>
  );
};

export default Filter;
