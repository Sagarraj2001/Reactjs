import React, { useState } from "react";

const Flipcoin = () => {
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);
    
  const handleFlip = (event) => {
    event.preventDefault();
    const flips = Number(event.target.flips.value);
    if (flips <= 0 ) 
      return ;

    let newHeads = 0
    let newTails = 0;
    for (let i = 0; i < flips; i++) {
      if(Math.random() < 0.5){
        newHeads++;
      }
      else{
        newTails++;
      }
    }
    setHeads(heads + newHeads);
    setTails(tails + newTails);
  };

  const totalFlips = heads + tails;
  const headsProb = totalFlips > 0 ? ((heads / totalFlips) * 100).toFixed(2) : 0;
  const tailsProb = totalFlips > 0 ? ((tails / totalFlips) * 100).toFixed(2) : 0;

  return (
    <div>
      <h2>Coin Flip Simulator</h2>
      <form onSubmit={handleFlip}>
        <input type="number" name="flips" min={1} required />
        <button type="submit">Flip Coin</button>
      </form>
      <div>
        <p>Heads Probability: {headsProb}%</p>
        <p>Tails Probability: {tailsProb}%</p>
      </div>
    </div>
  );
};

export default Flipcoin;
