import React from 'react';
import logo from './logo.svg';
import './App.css';

import SkiDayCounter from "SkiDayCounter";

function App() {
  return (
    <div className="App">
      <SkiDayCounter total={100} powder={30} bacncountry={10} goal={40}/>
    </div>
  );
}

export default App;
