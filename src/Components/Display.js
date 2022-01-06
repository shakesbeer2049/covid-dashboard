import Data from "./Data";
import { useState } from "react";

const Display = ({ filtered, searchHandler, inputLength, covid }) => {
  const [all, setAll] = useState(false);

  if (inputLength.length === 0) {
    return (
      <>
        <button onChange={()=>setAll(!all)}></button>
        <input type="text" placeholder="search ..." onChange={searchHandler} />
        <h3>Type something</h3>
      </>
    );
  } else if (filtered.length > 0 && filtered.length < 10) {
    return (
      <>
        <input type="text" placeholder="search ..." onChange={searchHandler} />
        {filtered.map((f) => (
          <div className="data" key={f.countryInfo._id}>
            <Data f={f} />
          </div>
        ))}
      </>
    );
  } else if (filtered.length >= 10) {
    return (
      <>
        <input type="text" placeholder="search ..." onChange={searchHandler} />
        <h3>Too many matches</h3>
      </>
    );
  } else if (filtered.length === 0) {
    return (
      <>
        <input type="text" placeholder="search ..." onChange={searchHandler} />
        <h3>No Matches</h3>
      </>
    );
  }
};

export default Display;
