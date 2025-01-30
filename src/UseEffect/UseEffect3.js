import React, { useState, useEffect } from 'react';
import image1 from "../Gallery/Images/image1.jpg";
import image2 from "../Gallery/Images/image2.jpg";
import image3 from "../Gallery/Images/image3.jpg";

const UseEffect3 = () => {
  const [bgImage, setBgImage] = useState("white");

  useEffect(() => {
    const ImageArray = [image1, image2, image3];
    let i = 0;

    const interval = setInterval(() => {
      setBgImage(`url(${ImageArray[i]})`);
      i = (i + 1) % ImageArray.length;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ backgroundImage: bgImage, height: "100vh", backgroundSize: "cover" }}>
      <h1 style={{ textAlign: "center" }}>Changing bg Image in every 1 second</h1>
    </div>
  );
}

export default UseEffect3;
