import { useState } from "react";

const Data = ({ f }) => {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <>
        <h1>{f.country}</h1>
        <button className="toggler" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Expand"}
        </button>
        <ul>
          <li className="card card1">
            <h5>Population</h5>
            <span className="text">{f.population}</span>
          </li>

          <li className="card">
            <h5>Tests</h5> <span className="text">{f.tests}</span>
          </li>

          <li className="card">
            <h5>Cases</h5> <span className="text red">{f.cases}</span>
          </li>

          <li className="card">
            <h5>Active</h5> <span className="text red">{f.active}</span>
          </li>

          <li className="card">
            <h5>Recovered</h5> <span className="text green">{f.recovered}</span>
          </li>

          <li className="card">
            <h5>Critical</h5> <span className="text red">{f.critical}</span>
          </li>

          <li className="card">
            <h5>Deaths</h5> <span className="text red">{f.deaths}</span>
          </li>
        </ul>
      </>
    );
  } else if (!show) {
    return (
      <>
        <h1>{f.country}</h1>
        <button className="toggler" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Expand"}
        </button>
      </>
    );
  }
};
export default Data;
