import React, { useState } from 'react';
import './App.css';

import ListEntity from './components/listEntity/Index'

function App() {

  const [on, setOn] = useState(true)

  const listOfEntity = () => {

    if (on)
      return (<ListEntity />)

    return (<div>Hello World</div>)
  }



  return (

    <div className="App">

      <button onClick={() => { setOn(true) }}>SHOW</button>
      <button onClick={() => { setOn(false) }}>HIDDEN</button>
      {listOfEntity()}

      
    </div>
  )
}

export default App;
