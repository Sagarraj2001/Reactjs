import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AlphaCounter from './Counter/AlphaCounter';
// import Hooks from './Hooks/Hooks';
// import Hooks3 from './Hooks/Hooks3';
// import Counter from './Counter/Counter';
// import App from './App';
// import App from './App';
// import Factorial from './Factorial';
// import Alphabet from './Alphabet';
// import Event from './Event';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App num="12" />
    <Factorial num="10"/>
    <Alphabet letter="B"/>
    <Event/> */}
{/* <App/> */}
  {/* <Hooks/> */}
  {/* <Hooks3/> */}
  {/* <Counter/> */}
  <AlphaCounter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

