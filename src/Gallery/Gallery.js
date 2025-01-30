import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Gallery/Home';
import Village from './Gallery/Village';
import City from './Gallery/City';
import Bird from './Gallery/Bird';
import Animal from "./Gallery/Animal";
const Gallery = () => {
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

export default Gallery

