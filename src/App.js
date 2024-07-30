import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [currentValue , SetCurrentValue]=useState(10)

    let Dec=()=>{
      SetCurrentValue(currentValue-1)
    }

  return (
    <>

    <button onClick={Dec}  >-</button>
    
    <button> {currentValue} </button>

    <button onClick={ ()=>SetCurrentValue(currentValue+1) } >+</button>
    </>
  );
}

export default App;
