import React from "react";
import Tooltip from "react-tooltip-lite";
// import chiz1 from "../assets/chiz1.png";
import chiz2 from "../../assets/chiz2.png";
// import chiz3 from "../assets/chiz3.png";
import { selectedFood } from "../../action";
import store from "../../store";
import { sabzi_data } from "../../data";
function SelectDatail() {
  const foods = store.getState().foods;
  const isSelected = id => {
    const res = foods.findIndex(food => food.id === id);
    return res !== -1;
  };
  return (
    <div
      className="pa d-flex border-0 rounded-pill"
      style={{
        backgroundColor: "#37A97876"
      }}
    >
      {sabzi_data.map((sabzi, index) => (
        <Tooltip content={sabzi.name} key={index}>
          <div
            className={`si-box-item ${isSelected(sabzi.id) ? "active-si" : ""}`}
            onClick={() => {
              store.dispatch(selectedFood(sabzi));
            }}
          >
            <img src={sabzi.icon1} alt={sabzi.name} />{" "}
          </div>
        </Tooltip>
      ))}
    </div>
  );
}

export default SelectDatail;
