import React, { useState } from 'react';

export default function AlphaCounter() {
  const [char, setChar] = useState("A"); 

  const incrementChar = () => {
    if (char === "Z") return; 
    setChar(String.fromCharCode(char.charCodeAt(0) + 1));
  };

  const decrementChar = () => {
    if (char === "A") return; 
    setChar(String.fromCharCode(char.charCodeAt(0) - 1));
  };

  const resetChar = () => {
    setChar("A"); 
  };

  return (
    <div>
      <h1>Current Character: {char}</h1>
      <button onClick={incrementChar}>Increment</button>
      <button onClick={decrementChar}>Decrement</button>
      <button onClick={resetChar}>Reset</button>
    </div>
  );
}
