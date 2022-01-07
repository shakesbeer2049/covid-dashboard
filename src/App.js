import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Components/Filter";
import "./index.css";

const App = () => {
  const [covid, setCovid] = useState();
  const [select, setSelect] = useState("");

  useEffect(() => {
    axios.get("https://corona.lmao.ninja/v2/countries?yesterday&sort").then((res) => {
      setCovid(res.data);
    });
  }, []);
  //? https://corona.lmao.ninja/v2/countries?yesterday&sort

  const selectHandler = (e) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <h1 className="covid-head">Covid Dashboard</h1>
    <div className="selection">
      
    <select name="selection" onChange={selectHandler} id="covid-select">
        <option value="alpha">Sort by</option>
        <option value="deaths-Asc">Deaths (ASC)</option>
        <option value="deaths-Desc">deaths (DESC)</option>
        <option value="active-cases-Asc">Active Cases (ASC)</option>
        <option value="active-cases-Desc">Active Cases (DESC)</option>
        <option value="cases-Asc">Total Cases (ASC)</option>
        <option value="cases-Desc">Total Cases (DESC)</option>
      </select>
    </div>

      <Filter covid={covid} select={select} setSelect={setSelect} />
    </>
  );
};

export default App;
