import React from "react";
import gosht from "../assets/main/meat.png";
import sabzijat from "../assets/main/broccoli.png";
import panir from "../assets/main/cheese.png";
import binam from "../assets/main/rolling-pin.png";
import sos from "../assets/main/tomato-sauce.png";
import { selectedPart } from "../action";
import { connect } from "react-redux";

function MainContent(props) {
  const data = [
    { image: binam, id: 0, name: "نان", color: "#492828" },
    { image: sos, id: 1, name: "سس", color: "#eabc4c" },
    { image: panir, id: 2, name: "پنیر", color: "#904cea" },
    { image: gosht, id: 3, name: "گوشت", color: "#984848" },
    { image: sabzijat, id: 4, name: "سبزیجات", color: "#37a978" }
  ];
  return (
    <div className="main-box d-flex align-items-end   justify-content-around">
      {data.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            props.selector(item.id);
            props.selectedPart(item.id);
          }}
          style={{ background: item.color }}
          className={`main-item mx36 d-flex flex-column align-items-center justify-content-between ${
            item.id === props.num ? "s-active" : ""
          }`}
        >
          <h5 className="main-item-text">{item.name}</h5>
          <div>
            <img src={item.image} alt={item.name} className="main-item-img" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default connect(
  null,
  { selectedPart }
)(MainContent);
