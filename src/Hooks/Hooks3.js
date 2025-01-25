import React, { useState } from "react";
import image1 from "../Gallery/Images/image1.jpg";
import image2 from "../Gallery/Images/image2.jpg";
import image3 from "../Gallery/Images/image3.jpg";

export default function Hooks3() {
    let [bgImage, setBgImage] = useState("");

    const changeImage = (image) => {
        setBgImage(image);
    };

    return (
        <div style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat:"no-repeat",
            height: "100vh",
            color: "white",
            backgroundPosition: "center",
            padding: "50px",
            backgroundColor: ` ${bgImage === image1 ? "green" : bgImage === image2 ? "orange" : bgImage === image3 ? "blue" : "transparent"}`
        }}>
            <h1 style={{ color: "white",textAlign:"center" }}>Changing the Background Image with color</h1>
            <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => changeImage(image1)}>Image 1</button>
                <button onClick={() => changeImage(image2)}>Image 2</button>
                <button onClick={() => changeImage(image3)}>Image 3</button>
            </div>
        </div>
    );
}
