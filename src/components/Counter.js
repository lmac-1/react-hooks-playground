import React, { useState } from 'react';
import '../styles.css';

export default function Counter() {
  // sets the state "count" to 4 by default on page load
  const [count, setCount] = useState(4);
  
  // When this function is called, it will re-render the component with the new state value 
  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="container">
      <button onClick={decrementCount}>-</button>
      <span className="counter">{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}
