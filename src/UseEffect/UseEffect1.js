import React,{useState,useEffect} from 'react'

const UseEffect1 = () => {
    const [bgColor,setBgColor]=useState("white");
    useEffect(()=>{
        let colorArray=["red","green","blue"];
        let i=0;
        let interval=setInterval(()=>{
            setBgColor(colorArray[i]);
            i=(i+1)%colorArray.length;
        },1000);
        return ()=>{
            clearInterval(interval)
        }
    },[]);
  return (
    <div style={{backgroundColor:bgColor,height:"100vh"}}>
      <h1 style={{textAlign:"center"}}>Changing bg color in the 1 second</h1>
    </div>
  )
}

export default UseEffect1
