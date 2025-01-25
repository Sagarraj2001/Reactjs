// import React from 'react'

// const App = (props) => {
//   const a=Number(props.num);
//   if(a%2 ===0 && a%3===0){
//     return <h1>Number is divisible by 2 and 3 both</h1>;
//   }
//   else{
//     return <h1>number is not divisible by 2 and 3</h1>;
//   }
 
// }

// export default App;

import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Gallery/Home';
import Village from './Gallery/Village';
import City from './Gallery/City';
import Bird from './Gallery/Bird';
import Animal from "./Gallery/Animal";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/city" element={<City/>}/>
        <Route  path="/village" element={<Village/>}/>
        <Route  path="/bird" element={<Bird/>}/>
        <Route  path="/animal" element={<Animal/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

