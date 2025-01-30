import { useEffect, useState } from "react";
import beepSound from "./beep.mp3"; 

export default function BeepSound() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const beep = new Audio(beepSound); 

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      beep.play();
      setCount((prevCount) => prevCount + 1);
    }, 300*10000); 

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <>
      <p>A beep sound plays every 5 minutes when the alarm is on.</p>
      <p>Beep count: {count}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Turn Off Alarm" : "Turn On Alarm"}
      </button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </>
  );
}
