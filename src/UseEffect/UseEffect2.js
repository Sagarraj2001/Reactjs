import React,{useState,useEffect} from 'react'

const UseEffect2 = () => {
  let [count,setCount]=useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setCount((count)=>
        count+1
      );
    },1000);
  });
  return (
    <>
    <h1>Timer</h1>
    <h1>Count : {count}</h1>
    <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}

export default UseEffect2
