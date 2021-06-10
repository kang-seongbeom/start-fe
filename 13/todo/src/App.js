import React, { useState } from 'react';
import Header from './Header';

function App() {
  const [countNumber, setCountNumber] = useState(0);
  function addCountNumber(){
    setCountNumber(countNumber + 1);
  }
  return (
    <div className="App">
      <Header/>
      <div>{countNumber}</div>
      <button onClick={addCountNumber}>plus</button>
    </div>
  );
}

export default App;
