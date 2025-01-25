import React from 'react'

const Event = () => {
    const handleClick=()=>{
        alert("Hi i am an event");
    }
  return (
    <>
    <button onMouseOver={handleClick}>Click here</button>
    </>
  )
}

export default Event
