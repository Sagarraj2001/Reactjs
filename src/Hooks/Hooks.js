// hooks :- it is used to manage or handle the state in the web pages


import React, { useState } from 'react'

const Hooks = () => {
    let [color,setColor]=useState("red");

    const changeColor=(color)=>{
        setColor(color);
    };
  return (
    <>
        <div style={{backgroundColor:color,height:"100vh"}}>
          <h1 style={{textAlign:"center"}}>Changing the background color</h1>
          <div>
            <button className='btn btn-danger mx-2' onClick={()=>changeColor("red")}>Red</button>
            <button className='btn btn-warning mx-2' onClick={()=>changeColor("orange")}>Orange</button>
            <button className='btn btn-success mx-2' onClick={()=>changeColor("Green")}>Green</button>
          </div>

        </div>
    </>
  )
}

export default Hooks
