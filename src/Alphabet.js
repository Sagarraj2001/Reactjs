import React from 'react'

const Alphabet = (props) => {
    let a=props.letter
  if(a==="A" || a==="E"||a==="O"||a==="I"||a==="U"||a==="a" || a==="e"||a==="i"||a==="o"||a==="u"){
    return<h1>The letter is vowel</h1>;
  }
  else{
    return<h1>The letter is consonant</h1>;
  }
}

export default Alphabet
