import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Filter from './Components/Filter';
import './index.css'


const App = () => {

const [covid, setCovid] = useState()

  useEffect(()=>{
    axios.get('https://corona.lmao.ninja/v2/countries?yesterday&sort')
    .then(res =>{
       setCovid(res.data)
  })
  },[])
//   let sample = []

//  if(covid !== undefined){

//   sample = covid.filter(n => n.countryInfo._id < 50)
  // covid.map(c => console.log(c.countryInfo._id))
  
//  }

  
  return(

    <>
    <h1 className='covid-head'>Covid Dashboard</h1>
    <Filter covid = {covid} />
    </>
  )
}

export default App