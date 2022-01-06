import { useState } from "react";
import Display from "./Display";

const Filter = ({ covid }) => {
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
      <Display 
      filtered={filtered}
      searchHandler={searchHandler}
      inputLength={inputLength}
      covid = {covid} 
       />
    </>
  );
};

export default Filter;
