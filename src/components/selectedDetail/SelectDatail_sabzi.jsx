import React from "react";
import Tooltip from "react-tooltip-lite";
// import chiz1 from "../assets/chiz1.png";
import chiz2 from "../../assets/chiz2.png";
// import chiz3 from "../assets/chiz3.png";
import { selectedFood } from "../../action";
import store from "../../store";
import { sabzi_data } from "../../data";
function SelectDatail() {
  return (
    <div className="pa d-flex border-0 rounded-pill">
      {sabzi_data.map((sabzi, index) => (
        <Tooltip content={sabzi.name} key={index}>
          <div
            className="si-box-item"
            onClick={() => {
              store.dispatch(selectedFood(sabzi));
            }}
          >
            <img src={chiz2} alt={sabzi.name} />{" "}
          </div>
        </Tooltip>
      ))}
    </div>
  );
}

export default SelectDatail;
