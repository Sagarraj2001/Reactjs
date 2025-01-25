import React, { useState } from "react";
import image1 from "../Gallery/Images/image1.jpg";
import image2 from "../Gallery/Images/image2.jpg";
import image3 from "../Gallery/Images/image3.jpg";


const Hooks2 = () => {
  let [image, setImage] = useState(image1); 

  const changeImage = (image) => {
    setImage(image);
  };
//
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height: "100vh",
        color: "white",
        backgroundPosition: "center",
      }}
    >
      <h1>Changing Bg Image</h1>
      <div>
        <button onClick={() => changeImage(image1)}>Image 1</button>
        <button onClick={() => changeImage(image2)}>Image 2</button>
        <button onClick={() => changeImage(image3)}>Image 3</button>
      </div>
    </div>
  );
};

export default Hooks2;
