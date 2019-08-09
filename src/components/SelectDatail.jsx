import React from "react";
import Tooltip from "react-tooltip-lite";
import chiz1 from "../assets/chiz1.png";
import chiz2 from "../assets/chiz2.png";
import chiz3 from "../assets/chiz3.png";
function SelectDatail() {
  const images = [
    { src: chiz1, name: "یک" },
    { src: chiz2, name: "دو" },
    { src: chiz3, name: "سه" }
  ];
  return (
    <div className="si-box si-box-mg d-flex border-0 rounded-pill">
      {images.map((image, index) => (
        <div className="si-box-item" key={index}>
          <Tooltip content={image.name}>
            <img src={image.src} alt="detail" />{" "}
          </Tooltip>
        </div>
      ))}
    </div>
  );
}

export default SelectDatail;
