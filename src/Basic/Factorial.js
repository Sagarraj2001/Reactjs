import React from 'react'

const Factorial = (props) => {
    let a =Number(props.num);
    var f=1;
    for(var i=1;i<=a;i++){
      f=f*i;
    }
    if(f%2===0){
      return <h1>The factorial value is even and the value is {f}</h1>;
    }
    else{
      return <h1>The factorial value is odd and the value is {f}</h1>;
    }
}

export default Factorial
