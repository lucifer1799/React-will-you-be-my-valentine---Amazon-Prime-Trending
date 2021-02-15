import React, {Component, useState,  useEffect} from "react";
import '../styles/App.css';

import slids from '../data'
const App = () => {
  const [i,setI]=useState(0);
  const [preDesable,setPreDesable]=useState(false)
  const [nextDesable,setnextDesable]=useState(false);

  function handleNext(){
    if(i<slids.length-1){
      setI(i+1)
    }

  }
  function handlePre(){
    if(i>0){
      setI(i-1)
    }

  }
  useEffect(function(){
    if(i<=0){
      setPreDesable(true)
    }
    else{
      setPreDesable(false)
    }
    if(i===slids.length-1){
      setnextDesable(true)
    }
    else{
      setnextDesable(false)
    }
  },[i])
  function handelReset(){
    setI(0);
  }
  return (
    <div id="main">
      <h1 data-testid="title">{slids[i].title}</h1>
      <p data-testid="text">{slids[i].text}</p>
      <button onClick={handlePre} data-testid="button-prev" disabled={preDesable}>Prev</button>
      <button onClick={handleNext} data-testid="button-next" disabled={nextDesable}>Next</button>
      <button onClick={handelReset}>Restart</button>
    </div>
  );
}
export default App;
