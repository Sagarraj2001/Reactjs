import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Gallery from "./Gallery/Gallery";
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

